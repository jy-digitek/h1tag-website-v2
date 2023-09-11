import React from "react";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";
import Pratices from "./Pratices";
import NextStep from "./NextStep";

function Index() {
    return (
        <>
            <Layout>
                <SEOTags
                    title={
                        " Best Live Pratices Session Digital Marketing Course in Rohini - H1 Tags Institute "
                    }
                    description={
                        "Looking for the Best Digital Marketing Course in Rohini? Book your seat for the Advanced Digital Marketing Course in Rohini. Join Now free demo class - H1 Tags."
                    }
                    currentUrl={"https://h1tags.com/contact.html/"}
                />
                <Pratices />
                <NextStep />
            </Layout>
        </>
    );
}

export default Index;
