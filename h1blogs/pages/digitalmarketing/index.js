import Layout from "../../components/layout";
import { CourseTab } from "./partials/CourseTab";
import { Faq } from "./partials/Faq";
import { JoinH1Tags } from "./partials/JoinnH1Tags";
import { CarrerOption } from "./partials/CarrerOption";

const index = () => {
  return (
    <Layout>
      <CourseTab />
      <JoinH1Tags />
      <CarrerOption />
      <Faq />
    </Layout>
  );
};

export default index;
