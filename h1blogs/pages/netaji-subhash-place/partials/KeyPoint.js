import React from "react";
import {
    Card,
    CardBody,
    SimpleGrid,
    Text,
    UnorderedList,
    ListItem,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Thead,
    Tr,
    Th,
    TableCaption,
    Tfoot,
} from "@chakra-ui/react";

const KeyPoint = () => {
    return (
        <SimpleGrid
            columns={[1, 1, 1, 2]}
            px={[0, 0]}
            mb={[10]}
            fontSize={"20px"}
            mx={10}
            pt={50}
        >
            <Card px={10}>
                <CardBody>
                    <Text fontSize="3xl">
                        <strong>Key Highlights</strong>
                    </Text>
                    <UnorderedList>
                        <ListItem>
                            A practical based course designed by experts.
                        </ListItem>
                        <ListItem>
                            In-depth practical digital marketing training
                            sessions will make you job-ready with a good salary
                            package.
                        </ListItem>
                        <ListItem>
                            Taking up our digital marketing course with 50+
                            Modules can help working professionals have an edge
                            over their colleagues.
                        </ListItem>
                        <ListItem>
                            Hands on practical experience on Live Projects.
                        </ListItem>

                        <ListItem>
                            Support by online Learning Management System (LMS).
                        </ListItem>
                        <ListItem>Tools and Software support.</ListItem>
                        <ListItem>Internship and Placement support.</ListItem>
                    </UnorderedList>
                </CardBody>
            </Card>{" "}
            <Card mx={10}>
                {" "}
                {/* <TableContainer style={{ textAlign: "center" }}>
                        <Table variant="simple">
                            <Text>Training Specification</Text>

                            <Tbody>
                                <Tr>
                                    <Td>
                                        <strong>Training Mode</strong> In Class
                                        | Online
                                    </Td>
                                    <Td>Course Duration 3 | 5 Months </Td>
                                    <Td>Course Materials E-Notes & E-Books</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        Training Session Recording (LMS) & Live
                                        Session
                                    </Td>
                                    <Td>
                                        Practical Learning Assignment | Case
                                        Studies
                                    </Td>
                                    <Td>Market Exposure Live Projects</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        Placement Session Job Preperation &
                                        Placements
                                    </Td>
                                    <Td>
                                        Practical Exposure 02 Months Internship
                                        - Online Strikers
                                    </Td>
                                    <Td>
                                        Certifications & Exams 20+
                                        Certifications
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer> */}
                <TableContainer>
                    <Table variant="simple">
                        {/* <TableCaption>
                                Imperial to metric conversion factors
                            </TableCaption> */}
                        {/* <Thead>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Thead> */}
                        <Tbody>
                            <Tr
                                style={{
                                    width: "3px",
                                    height: "100px",
                                }}
                            >
                                <Td>
                                    <strong>Training Mode</strong> In Class |
                                    Online
                                </Td>
                                <Td>Course Duration 3 | 5 Months </Td>
                                <Td>Course Materials E-Notes & E-Books</Td>
                            </Tr>
                            <Tr
                                style={{
                                    width: "3px",
                                    height: "100px",
                                }}
                            >
                                <Td>
                                    Training Session Recording (LMS) & Live
                                    Session
                                </Td>
                                <Td>
                                    Practical Learning Assignment | Case Studies
                                </Td>
                                <Td>Market Exposure Live Projects</Td>
                            </Tr>
                            <Tr
                                style={{
                                    width: "3px",
                                    height: "100px",
                                }}
                            >
                                <Td>
                                    Placement Session Job Preperation &
                                    Placements
                                </Td>
                                <Td>
                                    Practical Exposure 02 Months Internship -
                                    Online Strikers
                                </Td>
                                <Td>
                                    Certifications & Exams 20+ Certifications
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>
        </SimpleGrid>
    );
};

export default KeyPoint;
