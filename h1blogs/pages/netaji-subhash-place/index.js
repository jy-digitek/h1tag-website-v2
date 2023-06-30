import React from "react";
// import SechduleTime from "./partials/SechduleTime";
import SechduleTime from "./partials/SechduleTime";
import Didm from "./partials/Didm";
import CourseModule from "./partials/CourseModule";
import AboutCourse from "./partials/AboutCourse";
import MasterCourse from "./partials/MasterCourse";
import UpcomingBatch from "./partials/UpcomingBatch";
import JoinReasons from "./partials/JoinReasons";
import TrandingBlog from "./partials/TrandingBlog";
import Banner from "./partials/Banner";
import KeyPoint from "./partials/KeyPoint";
import Location from "./partials/Location";
import Layout from "../../components/layout";
const index = () => {
    return (
        <>
            <Layout>
                <Banner />
                <KeyPoint />
                <MasterCourse />
                <SechduleTime />
                <Didm />
                {/* <CourseModule /> */}
                <AboutCourse />
                <Location />
                <UpcomingBatch />
                <JoinReasons />
                <TrandingBlog />
            </Layout>
        </>
    );
};

export default index;
