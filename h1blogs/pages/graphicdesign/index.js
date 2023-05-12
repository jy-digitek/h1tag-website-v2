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

const index = () => {
    const [currentUrl, setCurrentUrl] = useState("");
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    return (
        <Layout>
            <SEOTags
                title={"#1 Graphic Design Course in Delhi | H1 Tags"}
                description={
                    "Looking for the Best Graphic Designing Course in Delhi? H1 Tags Provide Best Graphic Designing Course with 100% Placement Guarantee | Book a Free Demo Class Now!"
                }
                currentUrl={"https://h1tags.com/graphicdesign"}
            />
            {/* <Head>
                <title>#1 Graphic Design Course in Delhi | H1 Tags</title>
                <meta
                    name="description"
                    content={
                        "Looking for the Best Graphic Designing Course in Delhi? H1 Tags Provide Best Graphic Designing Course with 100% Placement Guarantee | Book a Free Demo Class Now!"
                    }
                />
                <meta name="language" content="english" />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href={"http://localhost:3000/graphicdesign"}
                    key="canonical"
                />
            </Head> */}
            {/* <PageBanner title="Graphic Design Course" /> */}
            {/* <GraphicBanner /> */}
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
