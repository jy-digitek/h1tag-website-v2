import React from "react";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";
import ExpertTraining from "./ExpertTraining";

function Index() {
  return (
    <>
      <Layout>
        <SEOTags
          title={
            "Master Your Craft with Real-Time Experts: Best Institute for Training"
          }
          description={
            "Boost Your Skills with the Industry's Best at H1tags, Where Real-Time Experts Guide Your Training Journey. Join the Leading Institute for Hands-On Expertise."
          }
          currentUrl={"https://h1tags.com/training-real-time-experts.html/"}
        />
        <ExpertTraining />
      </Layout>
    </>
  );
}

export default Index;
