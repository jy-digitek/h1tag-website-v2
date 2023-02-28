import { Container, Box, Heading, SimpleGrid, Card, CardBody, Text, CardHeader, CardFooter, Button, Highlight } from '@chakra-ui/react'
import ContactForm from '../../../components/contactform'
export const Map = () => {
    return (
        <Container maxW={'full'} py={10}>
            <Box align='center'>
                <Heading>
                    <Highlight query='career' styles={{px: '1', py: '1', color:"#be1e2d"}}>Map your career with </Highlight>  <Highlight query='DIDM' styles={{px: '1', py: '1', color:"#be1e2d"}}>DIDM</Highlight></Heading>
            </Box>
            <SimpleGrid columns={[1, 2]} spacing={10}>
                <Box ></Box>
                <Box >
                    <ContactForm />
                </Box>
            </SimpleGrid>
            <SimpleGrid spacing={4} columns={[1, 2]} px={[0, '15%']}>
                <Box>
                    <Card py={10}>
                        <CardHeader py={1}>
                            <Heading size='md' color={'#be1e2d'}> Dwarka</Heading>
                        </CardHeader>
                        <CardBody py={3}>
                            <Text>E-557, 2nd Floor, Opp, Goyal sons, Near Ramphal Chawk, West Delhi, Dwarka, Sector-7, New Delhi-110077</Text>
                            <Text py={1}>
                                <Highlight query='Call @' styles={{ px: '1', py: '1', color: 'black.500',fontWeight:"bold" }}>
                                Call @ 08383883621
                                </Highlight>
                            </Text>
                            <Text py={3}>
                                <Highlight query='Helpline No - ' styles={{ px: '1', py: '1', color: 'black.500',fontWeight:"bold" }}>
                                Helpline No - +91 - 08800505151
                                </Highlight>
                            </Text>
                            <Text py={3}>
                                <Highlight query='Email ID - ' styles={{ px: '1', py: '1', color: 'black.500',fontWeight:"bold" }}>
                                Email ID - info@didm.in
                                </Highlight>
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button rounded={'full'} bg='#be1e2d' px={10} color='white'>Get Direction</Button>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                <Card py={10}>
                        <CardHeader py={1}>
                            <Heading size='md' color={'#be1e2d'}> Dwarka</Heading>
                        </CardHeader>
                        <CardBody py={3}>
                            <Text>E-557, 2nd Floor, Opp, Goyal sons, Near Ramphal Chawk, West Delhi, Dwarka, Sector-7, New Delhi-110077</Text>
                            <Text py={1}>
                                <Highlight query='Call @' styles={{ px: '1', py: '1', color: 'black.500',fontWeight:"bold" }}>
                                Call @ 08383883621
                                </Highlight>
                            </Text>
                            <Text py={3}>
                                <Highlight query='Helpline No - ' styles={{ px: '1', py: '1', color: 'black.500',fontWeight:"bold" }}>
                                Helpline No - +91 - 08800505151
                                </Highlight>
                            </Text>
                            <Text py={3}>
                                <Highlight query='Email ID - ' styles={{ px: '1', py: '1', color: 'black.500',fontWeight:"bold" }}>
                                Email ID - info@didm.in
                                </Highlight>
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button rounded={'full'} bg='#be1e2d' px={10} color='white'>Get Direction</Button>
                        </CardFooter>
                    </Card>
                </Box>
            </SimpleGrid>
        </Container>
    )
}