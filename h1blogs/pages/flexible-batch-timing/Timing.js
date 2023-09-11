import { Container, Box, Text, Card } from "@chakra-ui/react";
import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import ReturnFocus from "../../components/Modal";
import ContactForm from "../../components/contactform";

function Timing() {
    const [openModal, openModalSet] = React.useState(false);
    return (
        <>
            <Container maxW={"7xl"}>
                <Box style={{ textAlign: "center" }} py={5}>
                    <SectionTitle as="h3">Flexible Batch Timing</SectionTitle>
                </Box>
                <Card p={5}>
                    <Text fontSize={"3xl"}>
                        Select a class time that works for you, then finish the
                        course.
                    </Text>
                    <Text pt={5}>
                        Are you curious to learn about "Digital Marketing"? But
                        are you occupied with your current job or assignment? No
                        need to worry; we recognize your difficulty. Because of
                        this, we provide special classes to students and working
                        professionals who cannot enroll in the regular day
                        batch.
                    </Text>
                    <br />
                    <Text>
                        Are you outside the city and find it uncomfortable to
                        commute to class every day? Don't worry; we provide
                        Saturday and Sunday classes to ensure your learning
                        success. We seek career skill development training while
                        seeking work but are not too busy throughout the week.
                        Join one of our regularly scheduled classes Monday
                        through Friday to quickly finish your education. And
                        particular batch on Saturday and Sunday
                    </Text>
                    <br />
                    <Text fontSize={"2xl"}>
                        You can select a time that works for you and inform us
                        so that
                    </Text>
                    <Box py={5} pl={5}>
                        <Text>
                            <strong>Morning Batch 1 : </strong> 8 am to 9:30 am
                            PM
                        </Text>
                        <Text>
                            <strong>Morning Batch 2 : </strong> 10 am to 11:30
                            am
                        </Text>
                        <Text>
                            <strong>Afternoon Batch : </strong> 3 pm to 4:30 pm
                        </Text>
                        <Text>
                            <strong>Evening Batch 1 : </strong> 5 pm to 6:30 pm
                        </Text>
                        <Text>
                            <strong>Evening Batch 2 : </strong> 7 pm to 8:30 pm
                        </Text>
                    </Box>
                    <Box textAlign={"center"} pt={5}>
                        <ReturnFocus
                            btnText={`REGISTER`}
                            children={<ContactForm />}
                            openModalSet={openModalSet}
                            label="REGISTER"
                            color="white"
                            rounded={"full"}
                        />
                    </Box>
                </Card>
            </Container>
        </>
    );
}

export default Timing;
