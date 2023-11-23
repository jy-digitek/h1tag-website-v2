import React from "react";
import { Box, Card, CardBody, Container, Image, Text } from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";

const Placement = () => {
  return (
    <Container maxW={"full"} p={0}>
      {/* <Box p={0}>
        <Image src={"/pitampura.jpg"} w={"100%"} />
      </Box> */}

      <Container maxW={"8xl"}>
        <SectionTitle as="h3" pt={[8, 12]} px={[0, 20]}>
          {" "}
          <span style={{ color: "rgb(255, 87, 51)" }}> H1Tags </span>Digital
          Marketing Institute in Pitampura Provide Live Project Training:
        </SectionTitle>
        <Box sx={{ padding: 5 }} px={[0, 20]}>
          <Text px={[0, 20]}>
            Ultimately, online courses come with a unique set of drawbacks.
            Students tend to lose interest in them since they are frequently
            inflexible and less engaging. The goal of{" "}
            <span style={{ color: "rgb(255, 87, 51)" }}>H1Tags</span>{" "}
            <strong>digital marketing courses in Pitampura</strong> is to
            provide real-world experience through practical projects that will
            enhance your functional abilities and give you a more comprehensive
            understanding of the subject.
          </Text>
        </Box>
      </Container>

      <Container maxW={"8xl"}>
        <SectionTitle as="h3" pt={[8, 12]} px={[0, 20]}>
          {" "}
          Best Digital Marketing Course in Pitampura, Delhi, with 100% Job
          Placement
        </SectionTitle>
        <Box sx={{ padding: 5 }} px={[0, 20]}>
          <Text px={[0, 20]}>
            If you're looking for the most excellent digital marketing course in
            Pitampura, <span style={{ color: "rgb(255, 87, 51)" }}>H1Tags</span>{" "}
            Digital Marketing Institute is the ideal setting for you to acquire
            social media and digital marketing expertise. We're giving you the
            chance to work on an actual project so you can match your talents to
            the needs of the industry as it exists now. We have worked with many
            clients worldwide and are well-versed in all areas.
          </Text>
        </Box>
        <Box sx={{ padding: 5 }} px={[0, 20]}>
          <Text px={[0, 20]}>
            You'll learn Marketing Principles, Consumer Behaviour Analyzing,
            Search Engine Optimization (SEO), Google Ads/Search Engine Marketing
            (SEM), Social Media Optimization (SMO), Social Media Marketing
            (SEM), Online Reputation Management (ORM), Google Analytic,
            Affiliate Marketing, Video and Mobile Marketing etc.
          </Text>
        </Box>
        <Box sx={{ padding: 5 }} px={[0, 20]}>
          <Text px={[0, 20]} fontWeight={"bold"}>
            We provide offline training. We Guarantee 100% Job Placement in our
            Master Digital Marketing Course in Pitampura.
          </Text>
        </Box>
      </Container>
    </Container>
  );
};

export default Placement;
