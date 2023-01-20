// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";


import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (obtained) =>
    obtained.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">

      </Tooltip>
    ));

  return {
    columns: [
      { name: "RMSE_Lables", align: "left" },
      { name: "obtained", align: "left" },
      { name: "paper", align: "center" },
      { name: "compare", align: "center" },
    ],

    rows: [
      {
        RMSE_Lables: [logoXD, "RMSE Testing(varies according to data)"],
        obtained: (
          <SoftBox display="text" py={1}>
            6.6
          </SoftBox>
        ),
        paper: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            6.1
          </SoftTypography>
        ),
        compare: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={95} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        RMSE_Lables: [logoAtlassian, "Biased RMSE"],
        obtained: (
          <SoftBox display="flex" py={1}>

            31
          </SoftBox>
        ),
        paper: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            38
          </SoftTypography>
        ),
        compare: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={80} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        RMSE_Lables: [logoSlack, "Random RMSE"],
        obtained: (
          <SoftBox display="flex" py={1}>

            47
          </SoftBox>
        ),
        paper: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            49
          </SoftTypography>
        ),
        compare: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={98} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
    ],
  };
}
