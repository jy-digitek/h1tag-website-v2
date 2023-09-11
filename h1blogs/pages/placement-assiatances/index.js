import React from "react";
import Placement from "./Placement";
import Whychoice from "./Whychoice";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";

function Index() {
    return (
        <>
            <Layout>
                <SEOTags
                    title={
                        " Best Placement Digital Marketing Course in Rohini - H1 Tags Institute "
                    }
                    description={
                        "Looking for the Best Digital Marketing Course in Rohini? Book your seat for the Advanced Digital Marketing Course in Rohini. Join Now free demo class - H1 Tags."
                    }
                    currentUrl={"https://h1tags.com/contact.html/"}
                />
                <Placement />
                <Whychoice />
            </Layout>
        </>
    );
}

export default Index;
