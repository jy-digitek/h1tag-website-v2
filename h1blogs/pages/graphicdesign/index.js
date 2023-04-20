import React from "react";
import Layout from "../../components/layout";
import { PageBanner } from "../../components/PageBanner";
import TabsCourse from "./partials/TabsCourse";
import Faq from "./partials/Faq";
import CarrerOportunity from "./partials/CarrerOportunity";
import ChooseGraphicDesign from "./partials/ChooseGraphicDesign";
import JobRoles from "./partials/JobRoles";
import PerSueGraphicDesign from "./partials/PerSueGraphicDesign";
import Eligibility from "./partials/Eligibility";
import ScholarShipProgram from "./partials/ScholarShipProgram";
import SEOTags from "../../components/Head";

const index = () => {
  return (
    <Layout>
      <SEOTags
        title={"#1 Graphic Design Course in Delhi | H1 Tags"}
        description={
          "Looking for the Best Graphic Designing Course in Delhi? H1 Tags Provide Best Graphic Designing Course with 100% Placement Guarantee | Book a Free Demo Class Now!"
        }
      />
      <PageBanner title="Graphic Design Course" />
      <TabsCourse />
      <CarrerOportunity />
      <Eligibility />
      <PerSueGraphicDesign />
      <ScholarShipProgram />
      <ChooseGraphicDesign />
      <JobRoles />
      <Faq />
    </Layout>
  );
};

export default index;
