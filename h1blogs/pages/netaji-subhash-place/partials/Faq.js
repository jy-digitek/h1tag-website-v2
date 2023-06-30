import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";

const Faq = () => {
    return (
        <Box my={[0, 10]}>
            <SectionTitle mb={10}>
                Digital Marketing Course in Pitampura FAQ’S
            </SectionTitle>
            <Accordion allowMultiple mx={[5, 10, 60]}>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        What salary package will I get after
                                        completing the course?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize="12px" />
                                    ) : (
                                        <AddIcon fontSize="12px" />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Digital marketing is a well-paying career, with
                                salaries varying according to work roles such as
                                SEO, SMO, PPC, Google Adwords, Email Marketing,
                                etc. A Digital Marketer's monthly salary package
                                starts from Rs.15,000 - Rs.25,000.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Does your Institute provide Laptops?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize="12px" />
                                    ) : (
                                        <AddIcon fontSize="12px" />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                We provide laptops during lessons so students
                                can easily understand and practice. We provide
                                practical training to them so that it becomes
                                relatively easy for them when they work on-site.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        After what duration can I expect to get
                                        the internship? And, is it paid or
                                        unpaid?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize="12px" />
                                    ) : (
                                        <AddIcon fontSize="12px" />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Yes, we provide paid internships from the first
                                month of joining the course. We provide a
                                stipend and practical training in the
                                internship.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Do you also provide weekend batches?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize="12px" />
                                    ) : (
                                        <AddIcon fontSize="12px" />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Yes, we offer weekend batches. Weekend batches
                                are special classes for working professionals or
                                students who cannot attend the weekday batches.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Are there any placement opportunities
                                        after the completion of the course?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize="12px" />
                                    ) : (
                                        <AddIcon fontSize="12px" />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                We provide the Best Digital Marketing Course in
                                Delhi, which ensures 100% employment. After the
                                training, you will be placed in a good company;
                                our primary goal is to place students in their
                                dream jobs. We assist you in becoming fully
                                proficient.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Can I pay the fee on an EMI basis?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize="12px" />
                                    ) : (
                                        <AddIcon fontSize="12px" />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Yes, you can pay the fee in easy installments.
                                You won't have to pay the total amount this way.
                                Whereas you can pay some amount and the rest,
                                you can pay later in installments.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </Box>
    );
};

export default Faq;
