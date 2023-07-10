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
import CourseOffer from "./partials/CourseOffer";
import Feedback from "./partials/Feedback";
import WhyChoose from "./partials/WhyChoose";
import Faq from "./partials/Faq";
import CTA from "../../components/CTA";
import SEOTags from "../../components/Head";
const index = () => {
    return (
        <>
            <Layout>
                <SEOTags
                    title={
                        "Best Digital Marketing Course in Pitampura - H1 Tags Institute "
                    }
                    description={
                        "Looking for the Best Digital Marketing Course in Pitampura? Book your seat for the Advanced Digital Marketing Course in Pitampura. Join Now free demo class - H1 Tags."
                    }
                    currentUrl={"https://h1tags.com/contact.html/"}
                />
                <Banner />
                <CourseOffer />
                <Feedback />
                <WhyChoose />
                {/* <MasterCourse /> */}
                <SechduleTime />
                <KeyPoint />

                {/* <Didm /> */}
                {/* <CourseModule /> */}
                {/* <AboutCourse /> */}

                {/* <UpcomingBatch /> */}
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
                {/* <TrandingBlog /> */}

                <Location />
                <Faq />
            </Layout>
        </>
    );
};

export default index;
