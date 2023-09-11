import React from "react";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";
import Program from "./Program";
import Course from "./Course";
import Faq from "./Faq";

function Index() {
    return (
        <>
            <Layout>
                <SEOTags
                    title={
                        " Best Paid Internship Digital Marketing Course in Rohini - H1 Tags Institute "
                    }
                    description={
                        "Looking for the Best Digital Marketing Course in Rohini? Book your seat for the Advanced Digital Marketing Course in Rohini. Join Now free demo class - H1 Tags."
                    }
                    currentUrl={"https://h1tags.com/contact.html/"}
                />
                <Course />
                <Program />
                {/* <Whychoice /> */}
                <Faq />
            </Layout>
        </>
    );
}

export default Index;
