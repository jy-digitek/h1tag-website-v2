import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { internshipFaq } from "../../components/DATA";
import { Container } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
} from "@chakra-ui/react";

function Faq() {
    return (
        <>
            <Container maxW={"5xl"}>
                <SectionTitle children={"FAQ's"} my={5} mx={[0, 10, 60]} />
                {internshipFaq.map((item, i) => {
                    return (
                        <Accordion allowMultiple key={i}>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            {item.qus}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    pb={4}
                                    style={{
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    {item.ans}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    );
                })}
            </Container>
        </>
    );
}

export default Faq;
