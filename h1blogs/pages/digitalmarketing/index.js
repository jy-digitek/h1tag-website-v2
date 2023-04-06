import Layout from "../../components/layout";
import { CourseTab } from "./partials/CourseTab";
import { Faq } from "./partials/Faq";
import { JoinH1Tags } from "./partials/JoinnH1Tags";
import { CarrerOption } from "./partials/CarrerOption";
import { EligibalForCourse } from "./partials/EligibalForCourse";
import { ScholarshipProgram } from "./partials/ScholarshipProgram";
import { WithSpeechBubbles } from "./partials/Testimonial";
import { DigitalmarketingBox } from "./partials/DigitalmarketingBox";
import { H1TagsAdmission } from "./partials/H1TagsAdmission";
import Tabs2 from "./partials/Tabs2";

const index = () => {
  return (
    <Layout>
      <DigitalmarketingBox />
      <Tabs2 />
      <CourseTab />
      <JoinH1Tags />
      <CarrerOption />
      <EligibalForCourse />
      <ScholarshipProgram />
      <WithSpeechBubbles />
      <H1TagsAdmission />

      <Faq />
    </Layout>
  );
};

export default index;
