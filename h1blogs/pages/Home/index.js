import { Banner } from "./partials/Banner";
import Layout from "../../components/layout";
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
      <PickCourseTab />
      <Benifits />
      <WhyUs />
      <StandsOut />
      <CourseBuiltFor />
      <ExperienceH1tags />
      <CarrerOption />
      {/* <EndToEnd /> */}
      <StudentFeedback />
      <TrustedPartner />
    </Layout>
  );
};
export default Home;
