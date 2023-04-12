import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  MinusIcon,
  Box,
  AddIcon,
  Container,
  AccordionIcon,
} from "@chakra-ui/react";

import { AccordionDigitalData } from "../../../components/DATA";

import { SectionTitle } from "../../../components/SectionTitle";

const FAQ = () => {
  return (
    <Container py={10}>
      <SectionTitle children={"FAQ's"} my={10} />
      {AccordionDigitalData.map((item, i) => {
        return (
          <Accordion allowMultiple key={i}>
            <AccordionItem>
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
          </Accordion>
        );
      })}
    </Container>
  );
};
export default FAQ;
