import React from "react";
import Layout from "../../components/layout";
import { PageBanner } from "../../components/PageBanner";
import { TabsCourse } from "./partials/TabsCourse";
import { Faq } from "./partials/Faq";
import { CarrerOportunity } from "./partials/CarrerOportunity";

const index = () => {
  return (
    <Layout>
      <PageBanner title="Graphic Design Course" />
      <TabsCourse />
      <CarrerOportunity />
      <Faq />
    </Layout>
  );
};

export default index;
