import { Container, SimpleGrid, Box, Heading, Highlight, Card, Text, CardBody } from "@chakra-ui/react"

export const MoreSegment = () => {
    return (
        <Container maxW={'full'}>
            <Box textAlign={'center'} bg={'#f7f7f7'} pt={10}>

                <Heading fontWeight={'bold'}>More SegMent</Heading>
            </Box>
            <SimpleGrid columns={[1, 3]} spacing={10} bg={'#f7f7f7'} px={[0, 20]} py={10}>
                <Box>
                    <Card align='center'>
                        <CardBody>
                            <Text fontSize={'20px'} fontWeight='bold'>
                                <Highlight
                                    query=' Corporate Training
        '
                                    styles={{ px: '2', py: '1', rounded: 'full', color: '#be1e2d' }}
                                >
                                    Corporate Training


                                </Highlight>


                            </Text>

                        </CardBody>
                    </Card>
                </Box>
                <Box>
                    <Card align='center'>
                        <CardBody>
                            <Text fontSize={'20px'} fontWeight='bold'>
                                <Highlight
                                    query=' College | University
        '
                                    styles={{ px: '2', py: '1', rounded: 'full', color: '#be1e2d' }}
                                >
                                    College | University


                                </Highlight>


                            </Text>
                        </CardBody>
                    </Card>

                </Box>
                <Box align='center'>
                    <Card>
                        <CardBody>
                        <Text fontSize={'20px'} fontWeight='bold'>
                                <Highlight
                                    query='100 Reasons to Choose DIDM
        '
                                    styles={{ px: '2', py: '1', rounded: 'full', color: '#be1e2d' }}
                                >
                                   100 Reasons to Choose DIDM


                                </Highlight>


                            </Text>

                            
                            
                        </CardBody>
                    </Card>

                </Box>

            </SimpleGrid>

        </Container>

    )

}