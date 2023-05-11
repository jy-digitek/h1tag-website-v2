import Layout from "../../components/layout";
import Banner from "./partials/Banner";
import TransFormingCourse from "./partials/TransFormingCourse";
import PickCourseTab from "./partials/PickCourseTab";
import Benifits from "./partials/Benifits";
import WhyUs from "./partials/WhyUs";
import CareerOption from "./partials/CareerOption";
import StudentFeedback from "./partials/StudentFeedback";
import TrustedPartner from "./partials/TrustedPartner";
import CourseBuiltFor from "./partials/CourseBuiltFor";
import ExperienceH1tags from "./partials/ExperienceH1tags";
import StandsOut from "./partials/StandsOut";
import Testimonial from "../digitalmarketing/partials/Testimonial";
import EnrollCta from "./partials/EnrollCta";
import SEOTags from "../../components/Head";
import { useState, useEffect } from "react";
import Head from "next/head";

const Home = () => {
    const [currentUrl, setCurrentUrl] = useState("");
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    return (
        <Layout>
            {/* <Banner /> */}
            {/* <SEOTags
                title={"Best Digital Marketing Institute in Delhi | H1 Tags"}
                description={
                    "H1 Tags is the Best Digital Marketing Institute in Delhi with Paid Internship During the Course. We provide a 100% Placement Guarantee. Book a Free Demo Class."
                }
                currentUrl={currentUrl}
            /> */}

            <Head>
                <title>
                    Best Digital Marketing Institute in Delhi | H1 Tags
                </title>
                <meta
                    name="description"
                    content={
                        "H1 Tags is the Best Digital Marketing Institute in Delhi with Paid Internship During the Course. We provide a 100% Placement Guarantee. Book a Free Demo Class."
                    }
                />
                <meta name="language" content="english" />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href={"https://h1tags.com/"}
                    key="canonical"
                />
            </Head>
            <EnrollCta />
            <TransFormingCourse />
            <PickCourseTab />
            <Benifits />
            <WhyUs />
            <StandsOut />
            <CourseBuiltFor />
            <ExperienceH1tags />
            <CareerOption />
            <StudentFeedback />
            <Testimonial />
            <TrustedPartner />
        </Layout>
    );
};
export default Home;
