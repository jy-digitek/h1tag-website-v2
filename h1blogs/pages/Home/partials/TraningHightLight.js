import { Box, Heading, SimpleGrid, Highlight, Text, List, ListIcon, ListItem, Container } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ContactForm from "../../../components/contactform";
export const TraningHightLight=()=>{
    return(
        <Container maxW={'full'}>
        <SimpleGrid columns={[1, 1,2]} spacing={2} mt={59} px={[2, 10]}>
        <Box >
            <Heading fontSize={30} textAlign={'center'}><Highlight query='Digital Marketing Course' styles={{ px: '1', py: '1', color: "#dc3545", fontWeight: 'bold', }}  > Digital Marketing Course</Highlight>/Training Highlights</Heading>
            <Text fontSize='2xl'>Master in Digital Marketing Course | Online & Offline Mode</Text>
            <Text>We are prime and the best institute for a digital marketing course in Delhi/NCR & across India. This course makes you capable of grabbing a good package as a fresher. Furthermore, it will enhance your skill if you are a working professional and also provide you with ample opportunities to work as a freelancer after completion of the digital marketing course.</Text>
            <Text fontSize='2xl' mt={[2, 5]}>Features Of The Course</Text>
            <List spacing={3} pl={[3, null, 5]} pt={[3, 7]}>
                <ListItem display={'flex'}>
                    <ListIcon as={CheckCircleIcon} mt={2} color='#dc3545' />
                    Enroll in our digital marketing course curriculum and learn through our LMS with dedicated mentorship and expert career guidance.
                </ListItem>
                <ListItem display={'flex'}>
                    <ListIcon as={CheckCircleIcon} mt={2} color='#dc3545' />
                    In-depth practical digital marketing training sessions will make you job-ready with an excellent salary package
                </ListItem>
                <ListItem display={'flex'}>
                    <ListIcon as={CheckCircleIcon} mt={2} color='#dc3545' />
                    Taking up our digital marketing course with 50+ Modules can help working professionals to have an edge over the competition.
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem display={'flex'}>
                    <ListIcon as={CheckCircleIcon} mt={2} color='#dc3545' />
                    Digital Marketing can help you shine to stand out by becoming a successful entrepreneur.
                </ListItem>
                <ListItem display={'flex'}>
                    <ListIcon as={CheckCircleIcon} mt={2} color='#dc3545' />
                    Think Big and Earn Big/ Make Money Online.
                </ListItem>
                <ListItem display={'flex'}>
                    <ListIcon as={CheckCircleIcon} mt={2} color='#dc3545' />
                    Special session on Black Hat SEO & Drop Shipping.
                </ListItem>
            </List>


        </Box>

        <Box >
            <ContactForm/>
        </Box>
    </SimpleGrid>
    </Container>
        
    )
}