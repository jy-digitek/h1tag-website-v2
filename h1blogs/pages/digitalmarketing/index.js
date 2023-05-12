import Layout from "../../components/layout";
import JoinH1Tags from "./partials/JoinnH1Tags";
import CarrerOption from "./partials/CarrerOption";
import EligibalForCourse from "./partials/EligibalForCourse";
// import ScholarshipProgram from "./partials/ScholarshipProgram";
import WithSpeechBubbles from "./partials/Testimonial";
import DigitalmarketingBox from "./partials/DigitalmarketingBox";
import H1TagsAdmission from "./partials/H1TagsAdmission";
import Tabs2 from "./partials/Tabs2";
import { Slide, Zoom } from "react-awesome-reveal";
import SEOTags from "../../components/Head";
import DigitalBanner from "./partials/DigitalBanner";
import { useEffect, useState } from "react";
const index = () => {
    const [currentUrl, setCurrentUrl] = useState("");
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    return (
        <Layout>
            <SEOTags
                title={"Best Digital Marketing Course in Delhi"}
                description={
                    "Looking for the Best Digital Marketing Course in Delhi? Book your seat for the Advanced Digital Marketing Training Program. A Free Demo Class is Available."
                }
                currentUrl={"https://h1tags.com/digitalmarketing"}
            />
            <DigitalBanner />
            <Zoom>
                <DigitalmarketingBox />
            </Zoom>
            <Tabs2 />
            <JoinH1Tags />
            <CarrerOption />
            <EligibalForCourse />
            {/* <ScholarshipProgram /> */}
            <WithSpeechBubbles />
            <H1TagsAdmission />

            {/* <FAQ /> */}
        </Layout>
    );
};

export default index;
