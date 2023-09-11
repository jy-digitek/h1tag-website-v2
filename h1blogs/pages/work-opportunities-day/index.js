import React from "react";
import Layout from "../../components/layout";
import SEOTags from "../../components/Head";
import Work from "./Work";

function index() {
    return (
        <>
            <Layout>
                <SEOTags
                    title={
                        " Best Size Work Digital Marketing Course in Rohini - H1 Tags Institute "
                    }
                    description={
                        "Looking for the Best Digital Marketing Course in Rohini? Book your seat for the Advanced Digital Marketing Course in Rohini. Join Now free demo class - H1 Tags."
                    }
                    currentUrl={"https://h1tags.com/contact.html/"}
                />
                <Work />
            </Layout>
        </>
    );
}

export default index;
