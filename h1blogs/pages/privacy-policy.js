import React from "react";
import Layout from "../components/layout";
import { Container, Heading, Box, Text } from "@chakra-ui/react";

const Privacy = () => {
  return (
    <Layout>
      <Container maxW={"6xl"} py={[5, 10]}>
        <Heading textAlign={"center"} as="h1" py={10}>
          Privacy Policy
        </Heading>
        <Box>
          <Text>
            At H1Tags.com, accessible from one of our main priorities is the
            privacy of our visitors. This Privacy Policy document contains types
            of information that is collected and recorded by H1Tags.com and how
            we use it.
          </Text>
          <Heading fontSize={"20px"} pt={5}>
            Log Files
          </Heading>
          <Text>
            H1Tags.com follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Text>
          <Heading fontSize={"20px"} pt={5}>
            Cookies and Web Beacons
          </Heading>
          <Text>
            Like any other website, H1Tags.com uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information. You may consult this list to find the Privacy Policy
            for each of the advertising partners of H1Tags.com. Third-party ad
            servers or ad networks uses technologies like cookies, JavaScript,
            or Web Beacons that are used in their respective advertisements and
            links that appear on H1Tags.com, which are sent directly to users'
            browser. They automatically receive your IP address when this
            occurs. These technologies are used to measure the effectiveness of
            their advertising campaigns and/or to personalize the advertising
            content that you see on websites that you visit. Note that
            H1Tags.com has no access to or control over these cookies that are
            used by third-party advertisers.
          </Text>
          <Heading fontSize={"20px"} pt={5}>
            Third Party Privacy Policies
          </Heading>
          <Text>
            H1Tags.com's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You can choose to disable cookies
            through your individual browser options. To know more detailed
            information about cookie management with specific web browsers, it
            can be found at the browsers' respective websites.
          </Text>
          <Text>
            {" "}
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </Text>{" "}
          <Text>
            H1Tags.com does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Text>
          <Heading fontSize={"20px"} pt={5}>
            Online Privacy Policy Only
          </Heading>
          <Text pb={10}>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in H1Tags.com. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </Text>
        </Box>
      </Container>
    </Layout>
  );
};

export default Privacy;
