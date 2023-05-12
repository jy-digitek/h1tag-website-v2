import Layout from "../../components/layout";
import ContactBanner from "./partials/Banner";
import QuickContact from "./partials/QuickContact";
import Addresses from "./partials/Addresses";
import SEOTags from "../../components/Head";
import { useState, useEffect } from "react";
const Contact = () => {
    const [currentUrl, setCurrentUrl] = useState("");
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    return (
        <Layout>
            <SEOTags
                title={"Best Digital Marketing Institute in Delhi NCR"}
                description={
                    "the best digital marketing institute in Delhi NCR and take your career to the next level. Enroll in our comprehensive and hands-on courses today."
                }
                currentUrl={"https://h1tags.com/contact"}
            />
            <ContactBanner />
            <QuickContact />
            <Addresses />
        </Layout>
    );
};
export default Contact;
