import Layout from "../../components/layout";
import CarrerOption from "./partials/CarrerOption";
import EligibalForCourse from "./partials/EligibalForCourse";
import JoinH1Tags from "./partials/JoinnH1Tags";
// import ScholarshipProgram from "./partials/ScholarshipProgram";
import { Zoom } from "react-awesome-reveal";
import SEOTags from "../../components/Head";
//import AreaCourse from "../area-course";
import DigitalBanner from "./partials/DigitalBanner";
import DigitalmarketingBox from "./partials/DigitalmarketingBox";
import H1TagsAdmission from "./partials/H1TagsAdmission";
import Tabs2 from "./partials/Tabs2";
import WithSpeechBubbles from "./partials/Testimonial";
import FAQ from "./partials/Faq";
import PracticalCourse from "./partials/PracticalCourse";
import Gallery from "./partials/gallery";
// import FAQ from "./partials/Faq";
const index = () => {
  // console.log("canonicalUrl", canonicalUrl);
  return (
    <Layout>
      <SEOTags
        title={"Best Digital Marketing Course in Delhi"}
        description={
          "Looking for the Best Digital Marketing Course in Delhi? Book your seat for the Advanced Digital Marketing Training Program. A Free Demo Class is Available."
        }
        currentUrl={
          "https://h1tags.com/digitam-marketing-course-in-delhi.html/"
        }
      />

      <DigitalBanner />
      <Zoom>
        <DigitalmarketingBox />
      </Zoom>
      <Tabs2 />

      <JoinH1Tags />

      <CarrerOption />
      <EligibalForCourse />
      <Gallery />
      {/* <ScholarshipProgram /> */}
      <WithSpeechBubbles />
      <H1TagsAdmission />
      {/* <AreaCourse /> */}
      <PracticalCourse />
      <FAQ />
    </Layout>
  );
};
export async function getStaticProps(ctx) {
  // const { pathname } = ctx;
  // console.log(ctx);
  // console.log(canonicalUrl);
  return {
    props: {
      canonicalUrl: "https://h1tags.com/digitalmarketing/",
    },
  };
}

export default index;
