import React from "react";
import {
    Container,
    Image,
    Grid,
    Hide,
    Box,
    GridItem,
    Show,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

export default function Eligibility() {
    return (
        <Box py={10} mx={[5, 10]}>
            <Container maxW={"7xl"} backgroundColor={"#e4f0e7"}>
                <Grid templateColumns="repeat(6, 1fr)" gap={5}>
                    <GridItem colSpan={[6, 5]}>
                        <Box position={"relative"} p={[0, 8]}>
                            <SectionTitle
                                children="

        Who Can Do a Graphic Design Course?
"
                            />
                            <Box as="p">
                                <strong>Students -</strong> Any Student Who Is
                                Enrolled in or Has Finished the 10+2 Program
                                (From Any Subject or Stream) Is Eligible to
                                Apply for the H1tags, Delhi.
                            </Box>
                            <Box as="p">
                                <strong>Recent Graduates - </strong> from Any
                                University Are Also Qualified for the H1tags
                                Delhi's Graphic Design Course.
                            </Box>
                            <Box as="p">
                                <strong>Working Professionals - </strong>{" "}
                                Professionals Already Employed by Businesses Can
                                Enroll in This Course to Advance Their Knowledge
                                and Abilities.
                            </Box>
                            <Box as="p">
                                <strong> Content Creators - </strong>
                                Professionals Already Employed by Businesses Can
                                Enroll in This Course to Advance Their Knowledge
                                and Abilities.
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Show above="md">
                            <Image
                                src="https://web.moxcreative.com/ekursus/wp-content/uploads/sites/24/2023/03/img_1.png"
                                alt=""
                                minWidth={"450px"}
                                marginTop={"-2.5rem"}
                            />
                        </Show>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
}
