import Banner from "./partials/Banner";
import Layout from "../../components/layout";
import { Box } from "@chakra-ui/react";
import PickCourseTab from "./partials/PickCourseTab";
import TransFormingCourse from "./partials/TransFormingCourse";
import WhyUs from "./partials/WhyUs";
import Benifits from "./partials/Benifits";
import StandsOut from "./partials/StandsOut";
import CourseBuiltFor from "./partials/CourseBuiltFor";
import ExperienceH1tags from "./partials/ExperienceH1tags";
import CareerOption from "./partials/CareerOption";
import StudentFeedback from "./partials/StudentFeedback";
import TrustedPartner from "./partials/TrustedPartner";
import CTA from "./partials/CTA";

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
        <CTA title={"Unlock 10 Lakhs+ Job Opportunities"} mt={10} />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <WhyUs />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <StandsOut />
      </Box>

      {/* <SwiperCar /> */}

      <Box pt={{ base: "0", sm: "10" }}>
        <CourseBuiltFor />
        <CTA title={"We are here to Build Your Future"} mt={10} />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <ExperienceH1tags />
      </Box>
      <Box pt={{ base: "0", sm: "10" }}>
        <CareerOption />
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
