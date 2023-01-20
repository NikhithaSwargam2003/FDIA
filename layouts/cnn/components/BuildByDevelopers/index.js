
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import overview from "assets/images/curved-images/CNN_overview.jpeg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";

function BuildByDevelopers() {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="yellow" fontWeight="medium">
                
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="h2" fontWeight="bold" gutterBottom bgColor="yellow">
                Understanding CNN 
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="blue">
                  CNNs are biologically inspired  feed-forward ANNs that present a simple model for the mammalian visual cortex.
                  In terms of sensitivity, we also explore that
                  CNN is way more sensitive to FDIAs when compared to the
                  LSTM and GRU. This is indeed an important observation since CNN-based techniques are quite popular in asset
                  maintenance and our results indicate that special
                  measures should be taken for designing a CNN-based PdM.A 1D CNN model is utilized in this paper to predict the RUL
                  of the engine. Details about CNN construction and network
                  design are presented in detail in the below paper.
                </SoftTypography>

              </SoftBox>
              <SoftTypography
                component="a"
                href="https://www.researchgate.net/publication/304550799_Real-Time_Motor_Fault_Detection_by_1D_Convolutional_Neural_Networks"
                variant="button"
                target="_blank"
                color="yellow"
                
                fontWeight="medium"
                
                sx={{
                  mt: "auto",
                  mr: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translate(2px, -0.5px)`,
                    transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                  },

                  "&:hover .material-icons-round, &:focus  .material-icons-round": {
                    transform: 'translate(6px, -0.5px)',
                  },
                }}
              >
                Read More
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SoftTypography>
              <SoftBox>
                <SoftBox component="img" src={overview} alt="CNN Overview" width="100%" pt={3}  />
              </SoftBox>
            </SoftBox>
          </Grid>

          {/* <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="warning"
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
              />
              <SoftBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
            </SoftBox>
          </Grid> */}
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
