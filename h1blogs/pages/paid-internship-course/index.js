import React from "react";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";
import Program from "./Program";
import Course from "./Course";
import Faq from "./Faq";

function Index() {
  return (
    <>
      <Layout>
        <SEOTags
          title={"Kickstart Your Career: Paid Internship Course with H1tags"}
          description={
            "Fuel Your Career Ambitions with a Paid Internship Course at H1tags, Recognized as the Premier Institute for Professional Development. Gain Practical Experience."
          }
          currentUrl={"https://paid-internship-course.html/"}
        />
        <Course />
        <Program />
        {/* <Whychoice /> */}
        <Faq />
      </Layout>
    </>
  );
}

export default Index;
