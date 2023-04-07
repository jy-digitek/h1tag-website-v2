import React from "react";
import {
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AddIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";
import { AccordionGraphicsData } from "../../../components/DATA";
export const Faq = () => {
  return (
    <Container>
      <SectionTitle children={"FAQ’S"} />
      <Accordion allowMultiple>
        {AccordionGraphicsData.map((item, i) => {
          return (
            <AccordionItem key={i}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {item.que}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.ans}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Container>
  );
};
