import Layout from "../../components/layout";
import { CourseTab } from "./partials/CourseTab";
import { Faq } from "./partials/Faq";
import { JoinH1Tags } from "./partials/JoinnH1Tags";
import { CarrerOption } from "./partials/CarrerOption";
import { EligibalForCourse } from "./partials/EligibalForCourse";
import { ScholarshipProgram } from "./partials/ScholarshipProgram";
import { WithSpeechBubbles } from "./partials/Testimonial";

const index = () => {
  return (
    <Layout>
      <CourseTab />
      <JoinH1Tags />
      <CarrerOption />
      <EligibalForCourse />
      <ScholarshipProgram />
      <WithSpeechBubbles />

      <Faq />
    </Layout>
  );
};

export default index;
