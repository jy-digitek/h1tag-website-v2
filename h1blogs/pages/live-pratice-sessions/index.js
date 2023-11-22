import React from "react";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";
import Pratices from "./Pratices";
import NextStep from "./NextStep";

function Index() {
  return (
    <>
      <Layout>
        <SEOTags
          title={"Increse Your Skills with Live Practice Sessions at H1tags"}
          description={
            "Immerse Yourself in Hands-On Learning at H1tags with Live Practice Sessions. Gain Practical Experience, Enhance Your Expertise, and Prepare for Real-World"
          }
          currentUrl={"https://h1tags.com/live-pratice-sessions.html/"}
        />
        <Pratices />
        <NextStep />
      </Layout>
    </>
  );
}

export default Index;
