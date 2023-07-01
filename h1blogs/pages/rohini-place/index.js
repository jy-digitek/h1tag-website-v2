import React from "react";
import Layout from "../../components/layout";
// import RohBanner from "./partials/Banner";
import CourseOffer from "./partials/CourseOffer";
// import Feedback from "./partials/Feedback";
import WhyChoose from "./partials/WhyChoose";
import SechduleTime from "./partials/SechduleTime";
import KeyPoint from "./partials/KeyPoint";
import JoinReasons from "./partials/JoinReasons";
import RohLocation from "./partials/Location";
import Faq from "./partials/Faq";
import RohBanner from "./partials/Banner";
import RohCourseOffer from "./partials/CourseOffer";
import RohFeedback from "./Feedback";
import CTA from "../../components/CTA";

const index = () => {
    return (
        <Layout>
            <RohBanner />
            <RohCourseOffer />
            <RohFeedback />
            <WhyChoose />
            <SechduleTime />
            <KeyPoint />
            <JoinReasons />
            <CTA
                title={"Struggling to Choose a Career?"}
                label={"Get instant Career Counselling"}
                color="black"
                mt={10}
                backgroundImage={
                    "linear-gradient(45deg, rgb(3 10 46), rgb(0 0 0 / 75%))"
                }
                //background={"white"}
                bg={"white"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
            />
            <RohLocation />
            <Faq />
        </Layout>
    );
};

export default index;
