import React from "react";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";
import Work from "./Work";

function index() {
  return (
    <>
      <Layout>
        <SEOTags
          title={"Seize Work Opportunities from Day 1: Empower Your Career"}
          description={
            "at H1tags, We Redefine the Beginning of Your Career Journey. Unlock Exciting Work Opportunities Right from Day 1 with Our Dynamic Programs. Join Us."
          }
          currentUrl={"https://h1tags.com/work-opportunities-day.html/"}
        />
        <Work />
      </Layout>
    </>
  );
}

export default index;
