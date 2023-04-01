import { Banner } from "./partials/Banner";
import Layout from "../../components/layout";
import { Box } from "@chakra-ui/react";
// import styles from "../../styles/Home.module.css";
import { PickCourseTab } from "./partials/PickCourseTab";
import { TransFormingCourse } from "./partials/TransFormingCourse";
// import { TraningHightLight } from "./partials/TraningHightLight";
// import { UpSkillCarrier } from "./partials/UpSKillCarrier";
// import { Tranding } from "./partials/Tranding";
import { WhyUs } from "./partials/WhyUs";
// import { EndToEnd } from "./partials/EndToEnd";
import { Benifits } from "./partials/Benifits";
import { StandsOut } from "./partials/StandsOut";
import { CourseBuiltFor } from "./partials/CourseBuiltFor";
import { ExperienceH1tags } from "./partials/ExperienceH1tags";
import { CarrerOption } from "./partials/CarrerOption";
import { StudentFeedback } from "./partials/StudentFeedback";
import { TrustedPartner } from "./partials/TrustedPartner";
import { Cta } from "./partials/Cta";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <TransFormingCourse />

      <Box pt={{ base: "0", sm: "10" }}>
        <PickCourseTab />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <Benifits />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <WhyUs />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <StandsOut />
      </Box>

      <Box pt={{ base: "0", sm: "10" }}>
        <CourseBuiltFor />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <ExperienceH1tags />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <CarrerOption />
      </Box>
      {/* <EndToEnd /> */}
      <Box pt={{ base: "0", sm: "10" }}>
        <StudentFeedback />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <TrustedPartner />
      </Box>
    </Layout>
  );
};
export default Home;
