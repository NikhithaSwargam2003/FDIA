

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import ivancik from "assets/images/ivancik.jpg";

function WorkWithTheRockets() {
  return (
    <Card>
      {/* <SoftBox position="relative" height="100%" p={2}>
        <SoftBox
        
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url(${ivancik})`,
            backgroundSize: "cover",
          }}
        >
          <SoftBox mb={3} pt={1}>
            <SoftTypography variant="h2" color="info" fontWeight="bold">
              CheckOut the dataSet
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography fontSize="25" variant="body2" color="white">
              We refered to the paper published by Gautam Raj Mode, Prasad Calyam, Khaza Anuarul Hoque.
              The dataset used are of IOT based Sensors.
            </SoftTypography>
          </SoftBox>
          <SoftTypography
            component="a"
            href="https://www.kaggle.com/datasets/behrad3d/nasa-cmaps"
            variant="button"
            color="white"
            target="_blank"
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
            Refer Dataset here
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography>


        </SoftBox>
      </SoftBox> */}
    </Card>
  );
}

export default WorkWithTheRockets;
