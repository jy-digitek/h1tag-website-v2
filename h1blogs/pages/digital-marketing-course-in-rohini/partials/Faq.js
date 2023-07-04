import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const Faq = () => {
    return (
        <Container maxW={"full"}>
            <Box my={[0, 10]}>
                <SectionTitle mb={10}>
                    Digital Marketing Course in Rohini FAQ’S
                </SectionTitle>
                <Accordion allowMultiple mx={[0, 10, 60]}>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            where is h1tags located in rohini?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <strong> H1Tags Rohini</strong> is located
                                    in the hub of educational institute area at
                                    D-44, Kanjhawala Rd, Budh Vihar Phase-I
                                    Krishan Vihar, Delhi, 110086
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            Why choose H1Tags Institute in
                                            Rohini?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    H1Tags is the top{" "}
                                    <strong>
                                        digital marketing institute in Rohini,
                                    </strong>{" "}
                                    and it offers offline live sessions, so you
                                    may learn digital marketing on your own
                                    time. You can evaluate our online digital
                                    marketing course by enrolling in a digital
                                    marketing career workshop.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            what is the starting salary package
                                            in digital marketing?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    A digital marketer's pay starts at 3 lacs.
                                    It is dependent on the candidate's position,
                                    knowledge, and experience.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            what types of work opportunities are
                                            available after taking a digital
                                            marketing course?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    There are a number of digital marketing job
                                    opportunities available for both job seekers
                                    and working professionals, including Digital
                                    <strong>
                                        {" "}
                                        Marketing Manager, Digital Marketer
                                        Coordinator, Digital Marketing
                                        Specialist, Customer Success Manager,
                                        Digital Marketing Assistant, Digital
                                        Marketing Director, Digital Marketing
                                        Trainer, Marketing and Digital
                                        Assistant, Jr. SEO Executive, Sr. SEO
                                        Executive, SEO Consultant, SEO Project
                                        Manager, SEO Trainer.
                                    </strong>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            What are the fees of the digital
                                            marketing course in H1 tags in
                                            Rohini?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    The cost of a digital marketing course in
                                    Rohini is determined by the training
                                    programme that you select.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            What are the advantages of the
                                            Rohini digital marketing programme?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    There are many chances in the sector of
                                    digital marketing in Delhi-NCR. Many global
                                    corporations want qualified expertise in
                                    fields such as SEO, SMO, AdWords, Email
                                    Marketing, and so on. Job portals such as
                                    Naukri.com and Monster.com are saturated
                                    with Digital Marketing job vacancies for the
                                    Rohini Region.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            What are the advantages of the
                                            Rohini digital marketing programme?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    There are many chances in the sector of
                                    digital marketing in Delhi-NCR. Many global
                                    corporations want qualified expertise in
                                    fields such as SEO, SMO, AdWords, Email
                                    Marketing, and so on. Job portals such as
                                    Naukri.com and Monster.com are saturated
                                    with Digital Marketing job vacancies for the
                                    Rohini Region.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            Can I get a job after finishing the
                                            digital marketing course from H1
                                            Tags?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    yes, you can get a job after completing a
                                    digital marketing course in Rohini. H1Tags
                                    provides you with 100% job because we work
                                    with numerous organisations for job
                                    placements.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            Why is digital marketing good for
                                            your career?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Digital marketing allows them to reach a
                                    larger audience, expand their business, and
                                    create more revenue. Learning an in-demand
                                    skill never hurts. It simply implies that
                                    you will be able to obtain employment that
                                    pays more with greater security as the
                                    demand for such skills grows.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            Can a New Graduate Work in Digital
                                            Marketing?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    A degree is not required to work as a
                                    digital marketer. Starting a small business
                                    or working at a startup might provide you
                                    with valuable expertise in digital
                                    marketing.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            Can I become a digital marketer in 3
                                            months?
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    If you enroll in{" "}
                                    <strong>
                                        {" "}
                                        H1Tags to learn digital marketing,{" "}
                                    </strong>{" "}
                                    you can learn it in 3 months. Even if you go
                                    for advanced learning, it will take 4 months
                                    on average. However, your zeal, area of
                                    interest, and learning capability will
                                    decide how many months you take to become a
                                    digital marketing expert.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                </Accordion>
            </Box>
        </Container>
    );
};

export default Faq;
