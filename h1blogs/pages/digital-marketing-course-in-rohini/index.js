import React from "react";
import Layout from "../../components/layout";
// import RohBanner from "./partials/Banner";
// import Feedback from "./partials/Feedback";
import CTA from "../../components/CTA";
import SEOTags from "../../components/Head";
import Feedback from "./Feedback";
import RohBanner from "./partials/Banner";
import RohCourseOffer from "./partials/CourseOffer";
import Faq from "./partials/Faq";
import JoinReasons from "./partials/JoinReasons";
import KeyPoint from "./partials/KeyPoint";
import RohLocation from "./partials/Location";
import SechduleTime from "./partials/SechduleTime";
import WhyChoose from "./partials/WhyChoose";
import Placement from "./partials/viewpage/Placement";

const index = () => {
    return (
        <Layout>
            <SEOTags
                title={
                    " Best Digital Marketing Course in Rohini - H1 Tags Institute "
                }
                description={
                    "Looking for the Best Digital Marketing Course in Rohini? Book your seat for the Advanced Digital Marketing Course in Rohini. Join Now free demo class - H1 Tags."
                }
                currentUrl={"https://h1tags.com/contact.html/"}
            />
            <RohBanner />
            <RohCourseOffer />
            <Feedback />
            <WhyChoose />
            <SechduleTime />

            <KeyPoint />

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
            <JoinReasons />
            <RohLocation />
            <Faq />
        </Layout>
    );
};

export default index;
