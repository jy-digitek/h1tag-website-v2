import React from "react";
import Head from "next/head";
import Script from "next/script";

const SEOTags = ({ title, description, currentUrl }) => {
    return (
        <Head>
            <title>{title}</title>
            <link
                rel="shortcut icon"
                href="/h1logo.png"
                style={{
                    height: "16px",
                    width: "16px",
                }}
            />
            <meta name="description" content={description} key={title} />
            <meta name="language" content="english" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={currentUrl} key="canonical" />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CPREKLS4XW" />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || []; function gtag()
                    {dataLayer.push(arguments)}
                    gtag('js', new Date()); gtag('config', 'G-CPREKLS4XW');
                `}
            </Script>
        </Head>
    );
};

export default SEOTags;
