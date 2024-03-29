import Layout from "../../components/layout";
import JoinH1Tags from "./partials/JoinnH1Tags";
import CarrerOption from "./partials/CarrerOption";
import EligibalForCourse from "./partials/EligibalForCourse";
// import ScholarshipProgram from "./partials/ScholarshipProgram";
import WithSpeechBubbles from "./partials/Testimonial";
import DigitalmarketingBox from "./partials/DigitalmarketingBox";
import H1TagsAdmission from "./partials/H1TagsAdmission";
import Tabs2 from "./partials/Tabs2";
import { Slide, Zoom } from "react-awesome-reveal";

const index = () => {
  return (
    <Layout>
      <Zoom>
        <DigitalmarketingBox />
      </Zoom>
      <Tabs2 />
      <JoinH1Tags />
      <CarrerOption />
      <EligibalForCourse />
      {/* <ScholarshipProgram /> */}
      <WithSpeechBubbles />
      <H1TagsAdmission />

      {/* <FAQ /> */}
    </Layout>
  );
};

export default index;
