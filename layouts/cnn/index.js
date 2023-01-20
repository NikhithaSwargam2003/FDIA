
// @mui material components
import Grid from "@mui/material/Grid";
import Chart from "react-apexcharts";
import axios from "axios";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";


// Dashboard layout components
import BuildByDevelopers from "layouts/cnn/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/cnn/components/WorkWithTheRockets";
import Projects1 from "layouts/cnn/components/Projects1";


import { useState, useEffect } from "react";

function cnn() {
    const truth = [96, 124, 95, 50, 16, 20, 97, 90, 8, 7, 11, 10, 59, 114, 21, 29, 26, 103, 37, 21, 54, 72, 28, 8, 94, 10, 34, 8, 9, 58, 136, 38, 20, 85, 20];
    const lableList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
    const [data, setData] = useState({ arr1: truth });
    const [detectedResult, setDetectedResult] = useState();
    const [apex, setApex] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: lableList
            }
        },
        series: [
            {
                name: "Truth",
                data: []
            },
            {
                name: "Preciction",
                data: []
            },
            {
                name: "Biased",
                data: []
            },
            {
                name: "Random",
                data: []
            }

        ]
    });
    const handleSubmit = () => {
        const url = 'http://localhost:5000/api/model/cnn';
        document.getElementById("detected-result").removeAttribute("hidden");
        setDetectedResult("");
        const a = axios.post(url, {
            file: "Predict"
        })
            .then((res) => {
                setData({ ...data, arr2: res.data.split(" ").map(Number).slice(25, res.data.length) });
                setDetectedResult("Done");
            });
    };
    const handleSubmit_biased = () => {
        const url = 'http://localhost:5000/api/model/cnn';
        document.getElementById("detected-result").removeAttribute("hidden");
        setDetectedResult("");
        const a = axios.post(url, {
            file: "Biased"
        })
            .then((res) => {
                setData({ ...data, arr3: res.data.split(" ").map(Number).slice(25, res.data.length) });
                setDetectedResult("Done");
            });
    };
    const handleSubmit_random = () => {
        const url = 'http://localhost:5000/api/model/cnn';
        document.getElementById("detected-result").removeAttribute("hidden");
        setDetectedResult("");
        const a = axios.post(url, {
            file: "Random"
        })
            .then((res) => {
                setData({ ...data, arr4: res.data.split(" ").map(Number).slice(25, res.data.length) });
                setDetectedResult("Done");
            });
    };

    useEffect(() => {
        setApex({
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: lableList
                }
            },
            series: [
                {
                    name: "Truth",
                    data: data.arr1
                },
                {
                    name: "Predict",
                    data: data.arr2
                },
                {
                    name: "Biased",
                    data: data.arr3
                },
                {
                    name: "Random",
                    data: data.arr4
                }
            ]
        });
        console.log(data);
    }, [detectedResult, data])


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <BuildByDevelopers />
                    </Grid>
                </SoftBox>
                <SoftBox mb={3} pt={2}>
                    <Grid container spacing={3}>
                        <WorkWithTheRockets />
                    </Grid>
                </SoftBox>
                <SoftBox mb={2} >
                    <SoftTypography variant="body2" fontWeight="bold" fontSize="40px">
                        Continuous FDIA:
                    </SoftTypography>
                    <SoftBox mb={3}>
                        <SoftBox mb={2} mt={3}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                // justifyContent: "center",
                            }}>

                                <div style={{ marginRight: "30px" }}>

                                    <SoftButton onClick={handleSubmit}>
                                        Predict Without False Data
                                    </SoftButton>
                                </div>
                                <div style={{ marginRight: "30px" }}>
                                    <SoftButton onClick={handleSubmit_biased}>
                                        Biased
                                    </SoftButton>
                                </div>
                                <div >
                                    <SoftButton onClick={handleSubmit_random}>
                                        Random
                                    </SoftButton>
                                </div>
                                <SoftBox ml={3}>
                                    <SoftBox >
                                        <span id="detected-result" style={{ color: "white" }} hidden>
                                            {detectedResult ? (
                                                detectedResult
                                            ) : (
                                                <img src={require("../../assets/images/illustrations/giphy.gif")} width="80" />
                                            )}
                                        </span>
                                    </SoftBox>
                                </SoftBox>
                            </div>
                        </SoftBox>

                        <Grid item xs={12} lg={7} pt={3}>
                            <Chart
                                options={apex.options}
                                series={apex.series}
                                type="line"
                                width="1200"
                            />
                        </Grid>
                    </SoftBox>
                </SoftBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={8}>
                        <Projects1 />
                    </Grid>
                </Grid>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default cnn;
