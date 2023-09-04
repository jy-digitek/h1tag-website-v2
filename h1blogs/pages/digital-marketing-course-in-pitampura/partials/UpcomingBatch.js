import React from "react";
import {
    Text,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Button,
    Container,
    border,
} from "@chakra-ui/react";

{
    /* <style>
    Table,Th,Td { border='1px solid black',
  borderCollapse="collapse"}
</style> */
}

const UpcomingBatch = () => {
    return (
        <>
            <Container maxW={"7xl"}>
                <Text fontSize={"4xl"} textAlign={"center"}>
                    Pitampura Training Center Upcoming Batches Details
                </Text>

                <Table
                    style={{
                        border: "2px solid black",
                        borderCollapse: "collapse",
                    }}
                    pt={10}
                >
                    <Thead
                        style={{
                            border: "2px solid black",
                            borderCollapse: "collapse",
                        }}
                    >
                        <Tr
                            style={{
                                borderLeft: "1px solid black",
                                // height: "300px",

                                // left: "50%",
                            }}
                        >
                            <Th>BATCH</Th>
                            <Th>DURATION</Th>
                            <Th>NEXT BATCH</Th>
                            <Th>DURATION </Th>
                            <Th> FEES</Th>
                            <Th> DOWNLOADS</Th>
                        </Tr>
                    </Thead>
                    {/* border: 1px solid black; */}
                    <Tbody>
                        <Tr>
                            <Td>Regular Batches</Td>
                            <Td>118 Hrs Training, 12 Hrs Backup Classes</Td>
                            <Td>
                                08th June 2023 Tuesday to Friday - 10:30am -
                                12:30pm
                            </Td>
                            <Td>12 Weeks</Td>
                            <Td>
                                Rs. 48490/- + 8728/- (18% GST) =Rs 57218/- 2
                                Easy Instalments- 51490/- + 9268/- (18% GST) =
                                Rs 60758/-
                            </Td>{" "}
                            <Td>
                                <Button
                                    style={{
                                        backgroundColor: "#ae1212",
                                        color: "white",
                                    }}
                                >
                                    DOWNLOADS
                                </Button>
                            </Td>
                        </Tr>
                        <Tr
                            style={{
                                border: "2px solid black",
                                borderCollapse: "collapse",
                            }}
                        >
                            <Td>Regular Batches</Td>
                            <Td>118 Hrs Training, 12 Hrs Backup Classes</Td>
                            <Td>
                                23rd May 2023 Tuesday to Friday - 03:00am -
                                05:00pm
                            </Td>
                            <Td>12 Weeks</Td>
                            <Td>
                                Rs. 48490/- + 8728/- (18% GST) =Rs 57218/- 2
                                Easy Instalments- 51490/- + 9268/- (18% GST) =
                                Rs 60758/-
                            </Td>{" "}
                            <Td>
                                <Button
                                    style={{
                                        backgroundColor: "#ae1212",
                                        color: "white",
                                    }}
                                >
                                    DOWNLOADS
                                </Button>
                            </Td>
                        </Tr>
                        <Tr
                            style={{
                                border: "2px solid black",
                                borderCollapse: "collapse",
                            }}
                        >
                            <Td>Weekend Batches</Td>
                            <Td>118 Hrs Training, 12 Hrs Backup Classes</Td>
                            <Td>
                                20th May 2023 Saturday & Sunday - 10:30am -
                                12:30pm
                            </Td>
                            <Td>20 Weeks</Td>
                            <Td>
                                Rs. 48490/- + 8728/- (18% GST) =Rs 57218/- 2
                                Easy Instalments- 51490/- + 9268/- (18% GST) =
                                Rs 60758/-
                            </Td>{" "}
                            <Td>
                                <Button
                                    style={{
                                        backgroundColor: "#ae1212",
                                        color: "white",
                                    }}
                                >
                                    DOWNLOADS
                                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Container>
        </>
    );
};

export default UpcomingBatch;
