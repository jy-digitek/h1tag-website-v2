import Layout from "../../components/layout";
import { CourseTab } from "./partials/CourseTab";
import { Faq } from "./partials/Faq";

const index = () => {
  return (
    <Layout>
      <CourseTab />
      <Faq />
    </Layout>
  );
};

export default index;
