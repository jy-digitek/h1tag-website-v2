import React from "react";
import { Box, Card, CardBody, Container, Image, Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";

const Placements = () => {
  return (
    <Container maxW={"full"} p={0}>
      <Container maxW={"8xl"}>
        <SectionTitle as="h3" pt={[8, 12]} px={[0, 20]}>
          Digital Marketing Course in Rohini With 100% Placement
        </SectionTitle>
        <Box sx={{ padding: 5 }} px={[0, 20]}>
          <Text px={[0, 20]}>
            <strong>
              {" "}
              Digital marketing courses in Rohini are in high demand.
            </strong>{" "}
            As everyone is aware, India's growth rate is rapidly increasing due
            to internet usage. Our nation sets the digital media standard with
            an annual growth rate of more than 35%. The need for highly
            qualified Digital Marketing Professionals is growing daily due to
            this development. Studying digital marketing differs slightly from
            studying web development and design. For working professionals,
            company owners, and job seekers, we are providing an all-in-one
            Advanced Digital Marketing Course. It includes well-designed,
            simple-to-understand modules on digital marketing strategy, SEO,
            SMO, PPC, YouTube marketing, freelancing, affiliate marketing,
            blogging, and more.
          </Text>
        </Box>
      </Container>
      <Container maxW={"8xl"}>
        <SectionTitle as="h3" pt={[8, 12]} px={[0, 20]}>
          Best Institute for Digital Marketing Course In Rohini{" "}
        </SectionTitle>
        <Box sx={{ padding: 5 }} px={[0, 20]}>
          <Text px={[0, 20]}>
            H1Tags offers 100% job placement support for all students in Rohini
            in the following job types:
            <br />
            <br />
          </Text>
          <UnorderedList px={[0, 20]}>
            <ListItem>WordPress Developer</ListItem>
            <ListItem>SEO Executive</ListItem>
            <ListItem>SEO Expert/Manager</ListItem>
            <ListItem> SMO Executive</ListItem>
            <ListItem> Social Media Manager</ListItem>
            <ListItem> PPC Executive</ListItem>
            <ListItem>Digital Marketing Executive</ListItem>
            <ListItem>Digital Marketing Manager</ListItem>
            <ListItem>Affiliate Marketing Manager and more jobs</ListItem>
          </UnorderedList>
        </Box>
      </Container>

      <Container maxW={"8xl"}>
        <SectionTitle as="h3" pt={[8, 12]} px={[0, 20]}>
          Expert Training Institute – #1 Best Digital Marketing Course in Rohini
        </SectionTitle>
        <Box sx={{ padding: 5 }} px={[0, 20]}>
          <Text px={[0, 20]}>
            Unlock the door to unprecedented opportunities in the digital realm
            with Expert Training Institute's unrivaled Best Digital Marketing
            Course in Rohini. Recognized as the #1 Best Digital Marketing Course
            in Rohini, we offer a comprehensive learning experience that propels
            your career to new heights. Learn from the best in the business! Our
            instructors bring industry experience and are H1Tags accredited,
            ensuring you receive top-notch training. Benefit from their
            expertise, insights, and real-world strategies that will set you
            apart in the competitive digital landscape.
            <br />
            <br />
            Expert Training Institute is proud to be recognized by H1Tags as a
            center of excellence in digital marketing training. Our commitment
            to quality education and industry-relevant skills has earned us the
            distinction of being the best institute in digital marketing.
            <br />
            <br />
            Don't miss the chance to participate in the #1{" "}
            <strong>Best Digital Marketing Course in Rohini</strong> . Join
            Expert Training Institute, where success is not just a destination;
            it's a journey. Enroll today, and let us guide you towards a
            fulfilling and successful career in digital marketing.
          </Text>
        </Box>
      </Container>
    </Container>
  );
};

export default Placements;
