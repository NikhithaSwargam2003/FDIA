

// @mui material components
import Grid from "@mui/material/Grid";



// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import attack1 from "assets/images/curved-images/grid-attack.jpg";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";




function Dashboard() {


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>


        <SoftBox mb={6} pt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3} ml={4} mr={4}>
          <Grid container spacing={3}>
            <p>
              <SoftBox mb={2} pt={2}>
                <SoftTypography variant="h4" fontWeight="bold">
                  Some recent incidents of FDIA Attacks
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                As mentioned in the paper one of the recent articles considers cyber-attacks as
                one of the reasons behind the two recent Boeing 737 Max
                8 crashes.

                <a href="https://leeneubecker.com/sonic-weapon-attack-boeing/"><br />Read the article here</a>
                <br />
                <SoftTypography varian="body2" fontWeight="bold" fontSize="25px"  color="primary"> 
                  Some successfully orchestrated FDIA Cyber Attacks from the recent History:
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={2} >
                <SoftTypography variant="body2" fontWeight="bold" fontSize="40px" color="info">
                  December 2015 Ukraine Blackout
                </SoftTypography>

                <SoftBox>
                  <SoftBox component="img" src={attack1}
                    alt="cnn overview" width="35%" pt={3}
                    mb={3}
                  />

                </SoftBox>
                This is one of the first publicly acknowledged cyber attacks on power system automation software. On 23rd December 2015, attackers were able to hack Ukraine’s power grid system and use spear-phishing techniques to install malware that led to a blackout affecting over 200,000 consumers. The malware bypassed a bad data detection mechanism and remotely connected with employees’ machines to disconnect 30 substations for over three hours. The adversaries also blocked telephone device communication networks that prevented residents from reporting the outage to concerned officials.
                {/* <Link to="https://en.wikipedia.org/wiki/Ukraine_power_grid_hack">Wikipedia</Link> */}
                <a href="https://en.wikipedia.org/wiki/Ukraine_power_grid_hac" target="_blank" rel="noopener noreferrer">Wikipedia</a>

              </SoftBox>
              <SoftBox mt={3} mb={3}>

                <SoftTypography variant="body2" fontWeight="bold" fontSize="40px" color="success">
                  Stuxnet Worm on Iranian Nuclear Power Stations
                </SoftTypography>
                {/* <SoftTypography variant="body2"> */}
                Stuxnet is a computer worm that targets programmable logic controllers used to automate industrial processes and power systems. The worm has been under development since the mid-2000s and usually targets computers that use Windows OS and run the Siemens Step 7 real-time data transmission software. As part of the planned attack, attackers planted the worm on Iranian critical infrastructure management centers, collecting real-time data from industrial systems. They also caused the uranium gas centrifuges to spin out of control and cause maximum damage to the entire power grid.
                <a href="https://en.wikipedia.org/wiki/Stuxnet#:~:text=Stuxnet%20is%20a%20malicious%20computer,the%20nuclear%20program%20of%20Iran." target="_blank" rel="noopener noreferrer">Wikipedia</a>
                {/* </SoftTypography> */}
              </SoftBox>
              <SoftBox>

                <SoftTypography variant="body2" fontWeight="bold" fontSize="30px" color="warning">
                  Maroochy Water System Attack
                </SoftTypography>
                {/* <SoftTypography variant="body2"> */}
                Considered one of the most infamous internal attacks, this attack was carried out by a disgruntled employee of a radio-controlled sewage equipment installation company. After a strained relationship between the company and a worker, the disgruntled worker issued false data to the sewage equipment through radio commands. This injection resulted in the spillage of 800,000 liters of raw sewage into parks, rivers, and close residential areas, severely impacting marine and human life.
                <a href="https://medium.com/curious-minds/what-the-maroochy-incident-taught-us-about-cyber-warfare-4a1abd6abcfc" target="_blank" rel="noopener noreferrer">medium</a>
                {/* </SoftTypography> */}
              </SoftBox>

            </p>

            <p>
              <SoftBox mb={2} pt={2}>
                <SoftTypography variant="h4" fontWeight="bold" fontSize="40px" color="danger">
                  Severity Level
                </SoftTypography>
              </SoftBox>
              <SoftBox>

                {/* <SoftTypography variant="body2"> */}
                Wireless IoT device communication has found favorable adoption in major industries, such as air travel, autonomous vehicles, and healthcare. In such instances, false data injection vulnerabilities introduce the risk of privacy leakage, as these devices mostly process sensitive, personally identifying information. Successful data injection into these systems often results in computational overhead as unknown elements complicate the mathematical model used in decision-making based on IoT sensor input.
                Attackers also target injection vulnerabilities in communication networks to alter data transmitted within the control device to hybrid IoT networks. A successful attack’s severity depends on the injection attack type, the target system, and the deviation between original measurements and the altered data set.

                <a href="https://crashtest-security.com/different-injection-attack-types/" target="_blank" rel="noopener noreferrer">Types</a>
                {/* </SoftTypography> */}
              </SoftBox>
            </p>

            <p>
              <SoftBox mb={2} pt={2}>
                <SoftTypography variant="h5" fontWeight="bold" fontSize="40px" color="primary">
                  Attackers Objective
                </SoftTypography>
              </SoftBox>
              <SoftBox>

                {/* <SoftTypography variant="body2"> */}
                The attackers objective is to cause
                a delay in aircraft engine maintenance. This objective can
                be achieved by altering the IoT sensors readings that are
                fed to the PdM systems. Injecting false data to the sensor
                readings result in incorrect predictions from PdM systems
                which in turn results in a delay of timely maintenance. As
                timely maintenance is a crucial factor in engine performance,
                a lapse of maintenance may result in mid-air engine failures
                which are catastrophic. One can argue that the attacker having
                access to the physical sensors or the communication network
                of the sensors would directly attack the main systems (flight
                navigation and instrument landing systems) rather than just
                altering the sensor values for the PdM. However, there is a
                higher chance that a direct attack on the main system will
                easily get detected by the defense mechanisms. In contrast,
                introducing FDIA to sensors is a safer option for an attacker
                since such attacks are more stealthy, hard to detect as they
                are in the sensors acceptable range. Thus, such attacks
                will cause an erroneous calculation of the RUL and might
                delay the maintenance cycle leading to a catastrophic incident.
                {/* <a href="https://crashtest-security.com/different-injection-attack-types/" target="_blank" rel="noopener noreferrer">Types</a> */}
                {/* </SoftTypography> */}
              </SoftBox>
            </p>
            <SoftTypography variant="h4" fontWeight="bold" fontSize="35px" color="warning">
             Documented paper:
            </SoftTypography>
          </Grid>
        </SoftBox>


        <SoftBox>
          <embed src="https://arxiv.org/pdf/1910.01716.pdf#:~:text=In%20false%20data%20injection%20attack,to%20the%20sensor%20output%20undetected." type="application/pdf" width="100%" height="900px" />
        </SoftBox>

      </SoftBox>
      <Footer />



    </DashboardLayout>
  );
}

export default Dashboard;
