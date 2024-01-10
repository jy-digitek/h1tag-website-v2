"use client";
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
import GraphicBanner from "./partials/GraphicBanner";
import { useState, useEffect } from "react";
import Head from "next/head";
import AboutGraphics from "./partials/AboutGraphics";

const index = ({ canonicalUrl }) => {
  console.log("canonicalUrl", canonicalUrl);
  return (
    <Layout>
      <SEOTags
        title={"Best graphic design course in pitampura-get enroll now"}
        description={
          "Best graphic design course in Delhi. Enroll now to master design principles, Adobe Creative Suite, branding, and more. Join us for hands-on learning and industry insights."
        }
        currentUrl={"https://h1tags.com/graphic-designing-course-in-delhi.html"}
      />

      <TabsCourse />
      <CarrerOportunity />

      <Eligibility />
      <PerSueGraphicDesign />
      <ScholarShipProgram />
      <ChooseGraphicDesign />
      {/* <JobRoles />
      <AboutGraphics />
      <Faq /> */}
    </Layout>
  );
};

export async function getStaticProps(ctx) {
  // const { pathname } = ctx;
  // console.log(ctx);
  // console.log(canonicalUrl);
  return {
    props: {
      canonicalUrl: "https://h1tags.com/graphicdesign/",
    },
  };
}
export default index;
