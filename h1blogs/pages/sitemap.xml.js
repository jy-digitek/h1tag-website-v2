const EXTERNAL_DATA_URL = "https://h1tags.com";

function dateHandler() {
  var oldDate = new Date("Thu Jan 01 1970 23:59:59 GMT +0530(IST)");
  var newDate = new Date();
  newDate.setHours(oldDate.getHours());
  newDate.setMinutes(oldDate.getMinutes());
  newDate.setSeconds(oldDate.getSeconds());
  return newDate.toISOString();
}
const links = ["", "/about", "/digitalmarketing", "/graphicdesign", "/contact"];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
    ${links
      .map((item) => {
        return `
        <url>
        <loc>${`${EXTERNAL_DATA_URL}${item}/`}</loc>
        <Lastmod>${dateHandler()}</Lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
       </url>`;
      })
      .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  //const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: { fallback: false },
  };
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}
export default SiteMap;
