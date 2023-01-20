// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
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
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { yellow } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
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
            {/* {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])} */}
            7.5
          </SoftBox>
        ),
        paper: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            7.5
          </SoftTypography>
        ),
        compare: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        RMSE_Lables: [logoAtlassian, "Biased RMSE"],
        obtained: (
          <SoftBox display="flex" py={1}>
            {/* {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])} */}
            85
          </SoftBox>
        ),
        paper: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            85
          </SoftTypography>
        ),
        compare: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={90} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        RMSE_Lables: [logoSlack, "Random RMSE"],
        obtained: (
          <SoftBox display="flex" py={1}>
            {/* {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])} */}
            197
          </SoftBox>
        ),
        paper: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            140
          </SoftTypography>
        ),
        compare: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={80} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      // {
      //   RMSE_Lables: [logoSpotify, "Launch our Mobile App"],
      //   obtained: (
      //     <SoftBox display="flex" py={1}>
      //       {avatars([
      //         [team4, "Jessica Doe"],
      //         [team3, "Alexander Smith"],
      //         [team2, "Romina Hadid"],
      //         [team1, "Ryan Tompson"],
      //       ])}
      //     </SoftBox>
      //   ),
      //   paper: (
      //     <SoftTypography variant="caption" color="text" fontWeight="medium">
      //       $20,500
      //     </SoftTypography>
      //   ),
      //   compare: (
      //     <SoftBox width="8rem" textAlign="left">
      //       <SoftProgress value={100} color="success" variant="gradient" label={false} />
      //     </SoftBox>
      //   ),
      // },
      // {
      //   RMSE_Lables: [logoJira, "Add the New Pricing Page"],
      //   obtained: (
      //     <SoftBox display="flex" py={1}>
      //       {avatars([[team4, "Jessica Doe"]])}
      //     </SoftBox>
      //   ),
      //   paper: (
      //     <SoftTypography variant="caption" color="text" fontWeight="medium">
      //       $500
      //     </SoftTypography>
      //   ),
      //   compare: (
      //     <SoftBox width="8rem" textAlign="left">
      //       <SoftProgress value={25} color="info" variant="gradient" label={false} />
      //     </SoftBox>
      //   ),
      // },
      // {
      //   RMSE_Lables: [logoInvesion, "Redesign New Online Shop"],
      //   obtained: (
      //     <SoftBox display="flex" py={1}>
      //       {avatars([
      //         [team1, "Ryan Tompson"],
      //         [team4, "Jessica Doe"],
      //       ])}
      //     </SoftBox>
      //   ),
      //   paper: (
      //     <SoftTypography variant="caption" color="text" fontWeight="medium">
      //       $2,000
      //     </SoftTypography>
      //   ),
      //   compare: (
      //     <SoftBox width="8rem" textAlign="left">
      //       <SoftProgress value={40} color="info" variant="gradient" label={false} />
      //     </SoftBox>
      //   ),
      // },
    ],
  };
}
