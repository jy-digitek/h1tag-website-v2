import React from "react";
import {
    Container,
    Box,
    Card,
    CardBody,
    Stack,
    Input,
    Text,
    SimpleGrid,
    UnorderedList,
    ListItem,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";

const tabData = [
    {
        label: "Email Marketing",
        content:
            "Email Marketing has now emerged as the most effective marketing tool to reach a number of targeted audiences at the lowest cost. This is the most feasible advertising technique that makes use of Social Media to reach internet users in bulk. It is also the best way to gain customer’s trust and is now widely used as the method of marketing that is producing a high response rate. This is the reason we have introduced an email marketing course. After successful completion of this course, the trainees will be able to understand the techniques required to effectively interact and draft emails for the targeted audience.Our email marketing training courses teach trainees the fundamentals that are behind email marketing campaigns, email deliverability, email copywriting, and more. We provide trainers who are already in this industry and their experiences and best practices are well shared in the sessions. Trainees also get to know the best use of social media, analytics, and mobile strategies to create a unified, integrated email marketing strategy.",
    },
    {
        label: "Google  AdWords/ PPC",
        content:
            "Pay-Per-Click (PPC) marketing is the best modern advertising strategy that is used to target the prospective audience over the social media to increase the sale. In this method, advertiser advertises on different websites and pay for the each click made by the audience. This has raised the demand for PPC Training Course. We understand that this is very effective marketing technique and is widely providing career option and business growth to job seekers and business owners. With this one can generate leads at low cost and grow the customer base easily. PPC training provided by us concentrates on using the search engine for generating clicks for the websites rather than concentrate on earning. This is also the form of sponsored ads.",
    },
    {
        label: "Online Reputation Management",
        content:
            "Understanding the concept of online reputation management reveals that you need to possess knowledge of the various analytical and practical methods that will allow you to understand the negative components and ways to eliminate them from your website. In this module, we make sure that you get deep knowledge in developing branding strategies and monitor the brand image by providing it with a positive outlook. The importance of this module cannot be expressed in words, as it is the complete solution for your business website. After the completion of the course, you will be able to deal with the social media and will easily manage the brand name by attracting organic viewers to the website.Who should attend this training?",
    },
    {
        label: "Affiliate Marketing",
        content:
            "We have come up with the balanced affiliate marketing course that is handled by the professionals in this industry. Affiliate marketing method is now opted among all sort of business that is using digital platforms. With this course, one will get complete knowledge on the affiliate marketing. With this targeted marketing, it is easy to reach customers that finally lead to business success. The class conducted by experts teach trainees to learn best practices to place banner ads, hyperlinks for product images, buttons, etc over the various website.",
    },
    {
        label: "Social Media Marketing",
        content:
            "Social media marketing module provided by us concentrate on developing skills in the trainees to build the brand image along with generating leads for the respective business. It is sure that after completing the desired SMO Courses from Delhi Institute of Digital Marketing you will understand the complete concept of digital marketing and ways to use it extensively for promoting your products and services. Various methods and tactics are introduced in the sessions that will help trainees to improve their reach within the customers and prospects.",
    },
    {
        label: "Search Engine Optimization",
        content:
            "We have designed SEO training course in Delhi to provide complete knowledge of the tools, techniques and concepts of Search Engine Optimisation. The course not only provides the basic concepts of the SEO but also cares for providing hand on practice in the industry related applications and tools under the guidance of industry experts. This course ensures to provide the necessary skill to trainees to maintain the top listing of the websites in the search engine. This course concentrates on 360-degree development and learning of modules that provide complete knowledge of the industry and SEO concepts.",
    },
    {
        label: "Adsense",
        content:
            "Google AdSense is a program run by Google that allows publishers in the Google Network of content sites to serve automatic text, image, video, or interactive media advertisements that are targeted to site content and audience. These advertisements are administered, sorted, and maintained by Google. They can generate revenue on either a per-click or per-impression basis. AdSense has become one of the popular programs that specialize in creating and placing banner advertisements on a website or blog because the advertisements are less intrusive and the content of the advertisements is often relevant to the website.",
    },
];

const CourseModule = () => {
    return (
        <Container maxW={"full"} py={[5, 0]}>
            <Box m={20}>
                <Text
                    fontWeight={"bold"}
                    fontSize={"3xl"}
                    style={{ textAlign: "center" }}
                >
                    Digital Marketing Training Course Module in Pitampura
                </Text>
                <Text>
                    Delhi Institute of Digital Marketing (DIDM) in Pitampura -
                    Covers 50+ modules that you will learn in Master in digital
                    marketing training program in pitampura.
                </Text>
                <SimpleGrid columns={[2]} mx={10} p={10}>
                    <Card>
                        <CardBody>
                            <Tabs
                                defaultTab="one"
                                // onChange={(tabId) => {
                                //     console.log(tabId);
                                // }}
                                // className={Styles.tabsContainer}
                                vertical
                                background={"blue"}
                            >
                                <TabList>
                                    <Tab
                                        // className={Styles.Tab_default}
                                        tabFor="one"
                                    >
                                        MASTER COURSE
                                    </Tab>
                                    <Tab tabFor="two">FOUNDATION COURSE</Tab>
                                    <Tab tabFor="three">
                                        {" "}
                                        JOB ORIENTED PROGRAM
                                    </Tab>
                                    <Tab tabFor="fourth">CUSTOMIZED COURSE</Tab>
                                </TabList>
                            </Tabs>
                        </CardBody>
                    </Card>
                    <Card
                        mx={10}
                        style={{
                            width: "500px",
                            height: "500px",
                            overflow: "auto",
                        }}
                    >
                        <CardBody>
                            <Text fontSize="2xl">
                                {" "}
                                <strong>Email Marketing</strong>
                            </Text>
                            <Text>
                                Email Marketing has now emerged as the most
                                effective marketing tool to reach a number of
                                targeted audiences at the lowest cost. This is
                                the most feasible advertising technique that
                                makes use of Social Media to reach internet
                                users in bulk. It is also the best way to gain
                                customer’s trust and is now widely used as the
                                method of marketing that is producing a high
                                response rate. This is the reason we have
                                introduced an email marketing course. After
                                successful completion of this course, the
                                trainees will be able to understand the
                                techniques required to effectively interact and
                                draft emails for the targeted audience.
                            </Text>
                            <Text pt={5}>
                                Our email marketing training courses teach
                                trainees the fundamentals that are behind email
                                marketing campaigns, email deliverability, email
                                copywriting, and more. We provide trainers who
                                are already in this industry and their
                                experiences and best practices are well shared
                                in the sessions. Trainees also get to know the
                                best use of social media, analytics, and mobile
                                strategies to create a unified, integrated email
                                marketing strategy.
                            </Text>
                            <Text>
                                <strong>Important Course Objectives</strong>
                                <UnorderedList>
                                    <ListItem>
                                        Learn tactics to draw more traffic by
                                        generating brand awareness and get high
                                        visibility
                                    </ListItem>
                                    <ListItem>
                                        Understand effective tactics of email
                                        marketing
                                    </ListItem>
                                    <ListItem>
                                        Learn to build an email list and email
                                        campaigns
                                    </ListItem>
                                    <ListItem>
                                        Understanding the Marketing Process
                                    </ListItem>
                                    <ListItem>
                                        Learn skills to market a business with
                                        the use of an email marketing platform
                                    </ListItem>{" "}
                                    <ListItem>
                                        In-depth knowledge of the email
                                        marketing rules and regulations
                                    </ListItem>
                                    <ListItem>
                                        Learn the best ways to send mass emails
                                        to various people who look for a
                                        particular product or service
                                    </ListItem>
                                </UnorderedList>
                            </Text>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </Box>
        </Container>
    );
};

export default CourseModule;
