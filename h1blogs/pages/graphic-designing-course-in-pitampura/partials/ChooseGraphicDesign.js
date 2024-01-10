import React from "react";
import {
  Container,
  Grid,
  GridItem,
  Text,
  UnorderedList,
  ListItem,
  Box,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { H1TagsCourseGraphic } from "../../../components/DATA";

const data = [
  {
    heading: "High Industrial Demand",
    label:
      "With the increasing demand for professional graphic designers, our courses are tailored to meet the high demand for skilled designers in the industry.\nWe aim to bring out your creativity through this advanced course in Graphic Design as well as to make a living out of it as a professional graphic designer.",
  },
  {
    heading: "Well-Experience Instructors",
    label:
      "There is nothing better than being taught by well-verse industrial experts in graphic design. All our trainers are skilled and professional individuals who will help you with high-quality experience to help you become the best designer. Our trainers will ensure you get practical insights, allowing you to stay ahead of the curve.",
  },
  {
    heading: "Classroom Training",
    label:
      "As the saying goes, practice makes a man perfect!\nWe ensure you get the best out of every class, so we focus on personalised attention and interactive learning through hands-on training. Through our advanced Graphic design course,we ensure you get the best from experienced instructors who will guide you through every step of the designing process.",
  },
  {
    heading: "100% Placement",
    label:
      "At H1 Tags, we provide a graphic designing course with 100% Placement.\nOnce you have completed the course in Graphic Designing at Pitampura, we will notify you with a 100% placement allowing you to start your career as a professional graphic designer. We ensure to help you to step ahead of your peers who are still trying to get a job placement! We ensure that employers find you and your frustration of job search ends through our 100% placement in some of the best companies!\nStep on your professional journey with confidence, knowing that the institute is dedicated to launching your careers successfully!",
  },
  {
    heading: "Paid Internship",
    label:
      "What is a better way to hone your skills than with a paid internship?\nYou will get hands-on learning experience as well along with theoretical knowledge, offering real-world experience through paid internships. Here, you will learn not only theory but practical lessons!\nYou will get the right platform to put what you have learned into practice through this internship, and get paid from the first month itself!",
  },
  {
    heading: "Certifications",
    label:
      "Decorate and flaunt your industrial knowledge with our graphic design certificate course in Pitampura!\nUpon your completion of the course, you will receive recognised certifications, adding weight to your resume. These certifications are a testament to their expertise and serve as a valuable asset in the competitive job market, increasing your chance of learning better.",
  },
  {
    heading: "Increase Your Skills",
    label:
      "Do you have all the talents but need to upgrade your skills?\nThis advanced graphic designing course is for you!\nAt H1 Tags, the best graphic designing institute in Pitampura, you will learn not only the basics skills but also the opportunities to upgrade your skills to the next phase. Stay updated with your designing skills to stay relevant in this dynamic field of graphic design.\nAlso, do you have a business?\nThe course allows you to equip yourself with the right skills to expand your business according to your industrial needs!\nLearn the art of creating eye-catching marketing materials to develop a cohesive brand identity and gain invaluable business growth as well as your skills.",
  },
  {
    heading: "Flexible Payment Methods",
    label:
      "Affordable as well as flexible payment methods!\nWe understand the diverse financial situations of each of our students, so we offer flexible payment methods at affordable prices. It means you can pay fees through instalments or EMIs according to your convenience.\nOur main concern is, you get the best graphic designing course in Pitampura without being hindered by financial constraints.",
  },
];

export default function ChooseGraphicDesign() {
  return (
    <Container maxW={"full"} px={[5, 20]} py={10}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
      >
        <GridItem colSpan={4}>
          <SectionTitle
            py={10}
            children="Why Choose H1 Tags to Learn Graphic Designing Course in
        Pitampura?"
            desc={
              "Today, H1 Tags is considered the best institute for graphic designing, offering a comprehensive curriculum that covers the latest industry trends and tools. Below are the benefits of choosing the best graphic designing institute in Pitampura to advance yourcreativity in design."
            }
          />
          <UnorderedList>
            {data.map((item, index) => (
              <ListItem>
                <Box style={{ display: "flex" }}>
                  <Text style={{ whiteSpace: "pre-wrap" }}>
                    <strong> {item.heading}-</strong>
                    {item.label}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </UnorderedList>
        </GridItem>
        <GridItem colSpan={3} bg="papayawhip" />
      </Grid>

      {/* <SimpleGrid columns={[1, 1, 3]} gap={3}>
        {H1TagsCourseGraphic.map((item, i) => {
          return (
            <Box key={i} alignItems={"center"}>
              <Card borderLeft={"6px solid blue"} bg="gray.100">
                <Flex>
                  <CardHeader mx={"auto"}>{item.icon}</CardHeader>
                  <CardBody textAlign={"center"}>{item.label}</CardBody>
                </Flex>
              </Card>
            </Box>
          );
        })}
        <Box></Box>
      </SimpleGrid> */}
    </Container>
  );
}
