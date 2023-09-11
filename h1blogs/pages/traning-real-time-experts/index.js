import React from "react";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";
import ExpertTraining from "./ExpertTraining";

function Index() {
    return (
        <>
            <Layout>
                <SEOTags
                    title={
                        " Best Export Training Digital Marketing Course in Rohini - H1 Tags Institute "
                    }
                    description={
                        "Looking for the Best Digital Marketing Course in Rohini? Book your seat for the Advanced Digital Marketing Course in Rohini. Join Now free demo class - H1 Tags."
                    }
                    currentUrl={"https://h1tags.com/contact.html/"}
                />
                <ExpertTraining />
            </Layout>
        </>
    );
}

export default Index;
