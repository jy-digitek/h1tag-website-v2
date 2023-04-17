import Layout from "../../components/layout";
import Banner from "./partials/Banner";
import TransFormingCourse from "./partials/TransFormingCourse";
import PickCourseTab from "./partials/PickCourseTab";
import Benifits from "./partials/Benifits";
import WhyUs from "./partials/WhyUs";
import CareerOption from "./partials/CareerOption";
import StudentFeedback from "./partials/StudentFeedback";
import TrustedPartner from "./partials/TrustedPartner";
import CourseBuiltFor from "./partials/CourseBuiltFor";
import ExperienceH1tags from "./partials/ExperienceH1tags";
import StandsOut from "./partials/StandsOut";
import Testimonial from "../digitalmarketing/partials/Testimonial";
import EnrollCta from "./partials/EnrollCta";

const Home = () => {
  return (
    <Layout>
      {/* <Banner /> */}
      <EnrollCta />
      <TransFormingCourse />
      <PickCourseTab />
      <Benifits />
      <WhyUs />
      <StandsOut />
      <CourseBuiltFor />
      <ExperienceH1tags />
      <CareerOption />
      <StudentFeedback />
      <Testimonial />
      <TrustedPartner />
    </Layout>
  );
};
export default Home;
