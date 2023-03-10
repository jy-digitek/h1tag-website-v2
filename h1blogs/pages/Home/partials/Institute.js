
import { Box, Image, Heading, SimpleGrid, Highlight, Text,  Stack, Card, CardBody, Container,} from "@chakra-ui/react";

export const  Instutute=()=>{
    return(
        <Container maxW={'full'} p={0} bg={'#f7f7f7'}>
        <Heading size='xl' px={{ base: '0', sm: '10', md: '20' }} py={50} textAlign={'center'}>

            <Text> "Digital Marketing Course | Best Digital Marketing Institute in Delhi & across India"</Text>


        </Heading>



        <SimpleGrid columns={[1, null, 3]} spacing='40px' px={10}>
            <Box pl={5}>
                <Heading as='h3'>Choose Your Interest</Heading>
                <Text mt={5}><Highlight query='Digital Marketing Course' styles={{ px: '1', py: '1', color: "#dc3545", fontWeight: 'bold', }}w >Let's talk about your interest in Digital  Marketing Course.</Highlight></Text>

                <Text mt={5}> <Highlight query='India' styles={{ px: '1', py: '1', color: "#dc3545", fontWeight: 'bold', }}  >We are a pioneer company in the digital marketing industry that provides the best digital marketing course in India..</Highlight></Text>

                <Text as='i' mt={10}><Highlight query='Have a look' py={10} styles={{ px: '1', py: '1', color: "#dc3545", fontWeight: 'bold', fontSize: "25px" }}>Have a look</Highlight></Text>
            </Box>
            <Box >
                <Card maxW='sm'>
                    <CardBody textAlign={'center'}>
                        <Image
                            src='master-course1.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Master in Digital Marketing</Heading>
                            <Text>
                                In Class / Online
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
            <Box >
                <Card maxW='sm'>
                    <CardBody textAlign={'center'}>
                        <Image
                            src='professional-certificate-course.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Professional Certificate in Digital Marketing</Heading>
                            <Text>
                                In Class / Online
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </SimpleGrid>
    </Container>


    )
}
