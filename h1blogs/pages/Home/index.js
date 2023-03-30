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

const Home = () => {
  return (
    <Layout>
      <Banner />
      <TransFormingCourse />
      <Box py={{ base: "0", sm: "10", md: "20" }}>
        <PickCourseTab />
      </Box>
      <Box py={{ base: "0", sm: "10", md: "20" }}>
        <Benifits />
      </Box>
      <Box py={{ base: "0", sm: "10", md: "20" }}>
        <WhyUs />
      </Box>
      <Box py={{ base: "0", sm: "10", md: "20" }}>
        <StandsOut />
      </Box>

      <Box py={{ base: "0", sm: "10", md: "20" }}>
        <CourseBuiltFor />
      </Box>
      <Box py={{ base: "0", sm: "10", md: "20" }}>
        <ExperienceH1tags />
      </Box>
      <Box py={{ base: "0", sm: "10", md: "20" }}>
        <CarrerOption />
      </Box>
      {/* <EndToEnd /> */}
      <Box py={{ base: "0", sm: "10", md: "20" }}>
        <StudentFeedback />
      </Box>
      <Box py={{ base: "0", sm: "10", md: "20" }}>
        <TrustedPartner />
      </Box>
    </Layout>
  );
};
export default Home;
