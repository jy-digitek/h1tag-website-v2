import React from "react";
import Placement from "./Placement";
import Whychoice from "./Whychoice";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";

function Index() {
  return (
    <>
      <Layout>
        <SEOTags
          title={"Secure Your Future with H1tags: Unmatched Placement"}
          description={
            "Empower Your Career with H1tags and Our Unparalleled Placement Assistance Program. Gain Access to a Network of Top Recruiters, Personalized Career."
          }
          currentUrl={"https://h1tags.com/placement-assistances.html/"}
        />
        <Placement />
        <Whychoice />
      </Layout>
    </>
  );
}

export default Index;
