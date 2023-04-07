import React from "react";
import Layout from "../../components/layout";
import { PageBanner } from "../../components/PageBanner";
import { TabsCourse } from "./partials/TabsCourse";
import { Faq } from "./partials/Faq";
import { CarrerOportunity } from "./partials/CarrerOportunity";
import { ChooseGraphicDesign } from "./partials/ChooseGraphicDesign";
import { JobRoles } from "./partials/JobRoles";
import { PerSueGraphicDesign } from "./partials/PerSueGraphicDesign";
import { Eligibility } from "./partials/Eligibility";
import { ScholarShipProgram } from "./partials/ScholarShipProgram";

const index = () => {
  return (
    <Layout>
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
