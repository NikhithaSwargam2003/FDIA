

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";

function BuildByDevelopers() {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="secondary" fontWeight="medium">
                 
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="h4" fontWeight="bold" gutterBottom color="success">
                What is FDIA?
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="dark">
                  In false data injection attack
                  (FDIA), an attacker stealthily compromises measurements
                  from IoT sensors (by a very small margin), such that the
                  manipulated sensor measurements bypass the sensor’s basic
                  ‘faulty data’ detection mechanism and propagates to the sensor
                  output undetected.
                </SoftTypography>
              </SoftBox>
              <SoftTypography
                component="a"
                href="https://casmodeling.springeropen.com/articles/10.1186/s40294-020-00070-w"
                variant="button"
                target="_blank"
                color="info"
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
                    transform: `translate(6px, -0.5px)`,
                  },
                }}
              >
                Read More
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SoftTypography>
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
