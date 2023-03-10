import keras
from keras.layers import Conv1D, BatchNormalization,\
Dropout, Dense, InputLayer, Flatten, MaxPool1D, Activation, GlobalAveragePooling1D
from keras.activations import relu, softmax
from keras.optimizers import Adam
from keras.models import Sequential
from keras.losses import binary_crossentropy
from keras.utils import to_categorical
import keras.backend as K
import tensorflow as tf
from tensorflow.keras.utils import CustomObjectScope
from keras.models import Sequential,load_model
from metrics_cnn import r2_keras,rmse,gen_sequence,gen_labels
from model_cnn import build_cnn
import sys

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
from sklearn import preprocessing

def text_file(path):
    # Setting seed for reproducibility
    np.random.seed(1234)  
    PYTHONHASHSEED = 0
    model_path= "C:/Users/kiran/OneDrive/Desktop/FDIA/projext/project-fdia/server/python/cnn/regression_model_cnn.h5"

    train_df = pd.read_csv("C:/Users/kiran/OneDrive/Desktop/FDIA/projext/FDIA-PdM-master/Datasets/Training/PM_train.txt", sep=" ", header=None)
    train_df.drop(train_df.columns[[26, 27]], axis=1, inplace=True)
    train_df.columns = ['id', 'cycle', 'setting1', 'setting2', 'setting3', 's1', 's2', 's3',
                        's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14',
                        's15', 's16', 's17', 's18', 's19', 's20', 's21']

    train_df = train_df.sort_values(['id','cycle'])

    # read test data - It is the aircraft engine operating data without failure events recorded.
    test_df = pd.read_csv(path, sep=" ", header=None)
    test_df.drop(test_df.columns[[26, 27]], axis=1, inplace=True)
    test_df.columns = ['id', 'cycle', 'setting1', 'setting2', 'setting3', 's1', 's2', 's3',
                        's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14',
                        's15', 's16', 's17', 's18', 's19', 's20', 's21']

    # read ground truth data - It contains the information of true remaining cycles for each engine in the testing data.
    truth_df = pd.read_csv("C:/Users/kiran/OneDrive/Desktop/FDIA/projext/FDIA-PdM-master/Datasets/Attacked test data/True/RUL.txt", sep=" ", header=None)
    truth_df.drop(truth_df.columns[[1]], axis=1, inplace=True)

    ##################################
    # Data Preprocessing
    ##################################

    #######
    # TRAIN
    #######
    # Data Labeling - generate column RUL(Remaining Usefull Life or Time to Failure)
    rul = pd.DataFrame(train_df.groupby('id')['cycle'].max()).reset_index()
    rul.columns = ['id', 'max']
    train_df = train_df.merge(rul, on=['id'], how='left')
    train_df['RUL'] = train_df['max'] - train_df['cycle']
    train_df.drop('max', axis=1, inplace=True)

    # generate label columns for training data
    # we will only make use of "label1" for binary classification, 
    # while trying to answer the question: is a specific engine going to fail within w1 cycles?
    w1 = 30
    w0 = 15
    train_df['label1'] = np.where(train_df['RUL'] <= w1, 1, 0 )
    train_df['label2'] = train_df['label1']
    train_df.loc[train_df['RUL'] <= w0, 'label2'] = 2

    # MinMax normalization (from 0 to 1)
    train_df['cycle_norm'] = train_df['cycle']
    cols_normalize = train_df.columns.difference(['id','cycle','RUL','label1','label2'])
    min_max_scaler = preprocessing.MinMaxScaler()
    norm_train_df = pd.DataFrame(min_max_scaler.fit_transform(train_df[cols_normalize]), 
                                columns=cols_normalize, 
                                index=train_df.index)
    join_df = train_df[train_df.columns.difference(cols_normalize)].join(norm_train_df)
    train_df = join_df.reindex(columns = train_df.columns)

    #train_df.to_csv('../../Dataset/PredictiveTraining.csv', encoding='utf-8',index = None)

    ######
    # TEST
    ######
    # MinMax normalization (from 0 to 1)
    test_df['cycle_norm'] = test_df['cycle']
    norm_test_df = pd.DataFrame(min_max_scaler.transform(test_df[cols_normalize]), 
                                columns=cols_normalize, 
                                index=test_df.index)
    test_join_df = test_df[test_df.columns.difference(cols_normalize)].join(norm_test_df)
    test_df = test_join_df.reindex(columns = test_df.columns)
    test_df = test_df.reset_index(drop=True)
    # print(test_df.head())

    # We use the ground truth dataset to generate labels for the test data.
    # generate column max for test data
    rul = pd.DataFrame(test_df.groupby('id')['cycle'].max()).reset_index()
    rul.columns = ['id', 'max']
    truth_df.columns = ['more']
    truth_df['id'] = truth_df.index + 1
    truth_df['max'] = rul['max'] + truth_df['more']
    truth_df.drop('more', axis=1, inplace=True)

    # generate RUL for test data
    test_df = test_df.merge(truth_df, on=['id'], how='left')
    test_df['RUL'] = test_df['max'] - test_df['cycle']
    test_df.drop('max', axis=1, inplace=True)

    # generate label columns w0 and w1 for test data
    test_df['label1'] = np.where(test_df['RUL'] <= w1, 1, 0 )
    test_df['label2'] = test_df['label1']
    test_df.loc[test_df['RUL'] <= w0, 'label2'] = 2

    #test_df.to_csv('../../Dataset/PredictiveManteinanceTest.csv', encoding='utf-8',index = None)

    # pick a large window size of 50 cycles
    sequence_length = 100

    # function to reshape features into (samples, time steps, features) 


    # pick the feature columns
    sensor_cols = ['s' + str(i) for i in range(1,22)]
    sequence_cols = ['setting1', 'setting2', 'setting3', 'cycle_norm']
    sequence_cols.extend(sensor_cols)

    # TODO for debug 
    # val is a list of 192 - 50 = 142 bi-dimensional array (50 rows x 25 columns)
    val=list(gen_sequence(train_df[train_df['id']==1], sequence_length, sequence_cols))
    # print(len(val))

    # generator for the sequences
    # transform each id of the train dataset in a sequence
    seq_gen = (list(gen_sequence(train_df[train_df['id']==id], sequence_length, sequence_cols)) 
            for id in train_df['id'].unique())

    # generate sequences and convert to numpy array
    seq_array = np.concatenate(list(seq_gen)).astype(np.float32)
    # print(seq_array.shape)

    # function to generate labels

    # generate labels
    label_gen = [gen_labels(train_df[train_df['id']==id], sequence_length, ['RUL']) 
                for id in train_df['id'].unique()]

    label_array = np.concatenate(label_gen).astype(np.float32)
    label_array.shape

    ##################################
    # Modeling
    ##################################

    # Next, we build a deep network.
    # The first layer is an LSTM layer with 100 units followed by another LSTM layer with 50 units. 

    nb_features = seq_array.shape[2]
    nb_out = label_array.shape[1]

    seq_array_test_last = [test_df[test_df['id']==id][sequence_cols].values[-sequence_length:] 
                        for id in test_df['id'].unique() if len(test_df[test_df['id']==id]) >= sequence_length]

    seq_array_test_last = np.asarray(seq_array_test_last).astype(np.float32)
    # print("seq_array_test_last")
    #print(seq_array_test_last)
    # print(seq_array_test_last.shape)

    # Similarly, we pick the labels
    #print("y_mask")
    y_mask = [len(test_df[test_df['id']==id]) >= sequence_length for id in test_df['id'].unique()]
    label_array_test_last = test_df.groupby('id')['RUL'].nth(-1)[y_mask].values
    label_array_test_last = label_array_test_last.reshape(label_array_test_last.shape[0],1).astype(np.float32)
    # print(label_array_test_last.shape)
    # print("label_array_test_last")
    # print(label_array_test_last)
    
    # if best iteration's model was saved then load and use it
    if os.path.isfile(model_path):
        #cnn=build_cnn(seq_array.shape[2],label_array.shape[1])
        #cnn.compile(loss='mean_squared_error', optimizer='rmsprop',metrics=[rmse,r2_keras])

        #cnn.load_model(model_path)
        #cnn = load_model(model_path,custom_objects={'r2_keras': r2_keras})
        with CustomObjectScope({'r2_keras': r2_keras, 'rmse': rmse}):
            cnn = tf.keras.models.load_model(model_path)

        # test metrics
        scores_test = cnn.evaluate(seq_array_test_last, label_array_test_last, verbose=2)
        # print('\nRMSE: {}'.format(scores_test[1]))
        # print('\nR^2: {}'.format(scores_test[2]))

        y_pred_test = cnn.predict(seq_array_test_last)
        y_true_test = label_array_test_last
        # print("Prediction")
        res_arr = []
        for i in range(len(y_pred_test)):
            res_arr.append(y_pred_test[i][0])
        print(*res_arr)
        # print("Truth")
        # print(y_pred_test)

        # Plot in blue color the predicted data and in green color the
        # actual data to verify visually the accuracy of the model.
        # fig_verify = plt.figure(figsize=(100, 50))
        # plt.plot(y_pred_test, color="blue")
        # plt.plot(y_true_test, color="green")
        # plt.title('prediction')
        # plt.ylabel('RUL in cycles')
        # plt.xlabel('Engine ID')
        # plt.legend(['predicted', 'actual data'], loc='upper left')
        # plt.show()

text_file(sys.argv[1])
# text_file("C:/Users\kiran\OneDrive\Desktop\FDIA\projext\FDIA-PdM-master\Datasets\Attacked test data\Attack scenario\Continuous\Biased.txt")
