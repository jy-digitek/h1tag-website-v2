"use client";
import React from "react";
import Head from "next/head";

const SEOTags = ({ title, description, currentUrl }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} key={title} />
            <meta name="language" content="english" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={currentUrl} key="canonical" />
        </Head>
    );
};

export default SEOTags;
