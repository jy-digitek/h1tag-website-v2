import React from "react";
import Layout from "../../components/layout";
import { PageBanner } from "../../components/PageBanner";
import { TabsCourse } from "./partials/TabsCourse";
import { Faq } from "./partials/Faq";
import { CarrerOportunity } from "./partials/CarrerOportunity";
import { ChooseGraphicDesign } from "./partials/ChooseGraphicDesign";
import { JobRoles } from "./partials/JobRoles";

const index = () => {
  return (
    <Layout>
      <PageBanner title="Graphic Design Course" />
      <TabsCourse />
      <CarrerOportunity />
      <ChooseGraphicDesign />
      <JobRoles />
      <Faq />
    </Layout>
  );
};

export default index;
