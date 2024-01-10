import React from "react";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";
import Timing from "./Timing";

function Index() {
  return (
    <>
      <Layout>
        <SEOTags
          title={"Unlock Your Potential with Flexible Batch Timings at H1tags"}
          description={
            "Experience the Ultimate Convenience in Learning with H1ags, the Top Institute Offering Flexible Batch Timings. Tailor Your Educational Journey."
          }
          currentUrl={"https://h1tags.com/flexible-batch-timing.html/"}
        />
        <Timing />
      </Layout>
    </>
  );
}

export default Index;
