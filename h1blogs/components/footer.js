import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Container, SimpleGrid, Box, Heading, Text, List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";



export default function Footer() {
    return (
        <Container bg={'#dc3545'} maxW='full'>
            <SimpleGrid columns={[1, 2, 4]} spacing={10} pt={20} color={'white'} px={[0, 20]}>
                <Box >
                    <Heading as={'h2'} fontSize='20px'>Training Centers :</Heading>
                    <Text fontSize={'12px'} py={3}>
                        Dwarka | Gurugram | Kalkaji | Pitampura |  Preet Vihar | Rajouri Garden | South Campus | Noida | Meerut | Mumbai | GOA | Varanasi | Jaipur | Srinagar J&K
                    </Text>
                    <Heading as={'h2'} fontSize='20px' py={3}>Business Hours</Heading>
                    <Text fontSize={'12px'}>
                        Monday – Friday : 9am to 9pm
                    </Text>
                    <Text fontSize={'12px'}>
                        Saturday & Sunday : 9am to 7pm
                    </Text>
                </Box>
                <Box >
                    <Heading as={'h2'} fontSize='20px'>About DIDM</Heading>
                    <Text fontSize={'12px'} py={3}>
                        Delhi Institute of Digital Marketing makes our candidates gratifying when it comes to infusing skills with practical knowledge and recent trends in the industry. We are a reputed and the best digital marketing institute in Delhi/NCR & across India. By MSME | ISO Certified.
                    </Text>
                </Box>
                <Box>
                    <Heading as={'h2'} fontSize='20px'>Important Links</Heading>

                    <List spacing={3} fontSize='14px' py={3}>
                        <ListItem p={0}>
                            <ListIcon as={ChevronRightIcon} color='white' />
                            Digital Marketing Course
                        </ListItem>
                        <ListItem p={0}>
                            <ListIcon as={ChevronRightIcon} color='white' />
                            DIDM Trainee Review
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ChevronRightIcon} color='white' />
                            DIDM Placement
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={ChevronRightIcon} color='white' />
                            Batch Images
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ChevronRightIcon} color='white' />
                            Enrollments
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ChevronRightIcon} color='white' />
                            Who we are
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ChevronRightIcon} color='white' />
                            Terms & Conditions
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ChevronRightIcon} color='white' />
                            Privacy Policy
                        </ListItem>
                        <ListItem>
                            <ListIcon as={ChevronRightIcon} color='white' />
                            Refund & Cancellation
                        </ListItem>
                    </List>

                </Box>
                <Box>
                    <Heading as={'h2'} fontSize='20px'>Corporate Office :</Heading>
                    <Text pt={3}>Plot No-12, 3rd Floor, Satya Niketan, Near Moti Bagh - South Delhi, Opp. Venketeshwar College, New Delhi-110021</Text>
                    <Text pt={3}>	+91 8800505151</Text>
                    <Text pt={3}>		info@didm.in</Text>
                    <Heading as={'h2'} fontSize='20px' pt={4}>Subscribe & Follow us :</Heading>
                    
                </Box>

            </SimpleGrid>
            <Text fontSize={'14px'} color='white' textAlign={'center'} py={10}>Copyright ©2023 All rights reserved | Website Design and Developed by Online Strikers</Text>
        </Container>
    )
}