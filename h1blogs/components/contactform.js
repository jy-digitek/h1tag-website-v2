

import Link from 'next/link'
import { Formik, Field } from "formik";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormErrorMessage,
    Input,
    VStack,
    Select,
    option,
    Heading, Text
} from "@chakra-ui/react";

export default function ContactForm() {
    return (
        <Flex align={'center'} textAlign={'center'} justify='center' h="100vh" style={{ width: "100%" }} width={'100%'} color={'white'}>
            <Box bg="#dc3545" rounded="md" p={10}>
                <Text fontSize={['1.5rem', '2rem']} fontWeight={'bold'} color={'white'}>Take a free session today!!</Text>
                <Text fontSize={['1rem', '1.5rem']} p={2}>Go Digital | Go Global</Text>
                <Text fontSize={['0.9rem', '1rem']} p={2}>Speak To Our Specialist - +91 - 8800505151</Text>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        rememberMe: false
                    }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="flex-start">
                                <FormControl >

                                    <Field
                                        as={Input}
                                        id="name"
                                        name="name"
                                        type="text"
                                        variant="filled"
                                        bg={'white'}
                                        Placeholder="Full Name"
                                    />
                                </FormControl>
                                <FormControl >

                                    <Field
                                        as={Input}
                                        id="email"
                                        name="email"
                                        type="email"
                                        variant="filled"
                                        bg={'white'}
                                        Placeholder="Email Address"
                                    />
                                </FormControl>

                                <FormControl isInvalid={!!errors.password && touched.password}>

                                    <Field
                                        as={Input}
                                        id="phone"
                                        name="phone"
                                        type="phone"
                                        variant="filled"
                                        Placeholder="Enter Phone"
                                        bg={'white'}
                                        validate={(value) => {
                                            let error;

                                            if (value.length < 6) {
                                                error = "Password must contain at least 6 characters";
                                            }

                                            return error;
                                        }}
                                    />
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                </FormControl>
                                <FormControl>

                                    <Select placeholder='Choose your Center' color={'gray'} bg={'white'}>
                                        <option variant="filled" >Neta ji subhas palace</option>
                                        <option variant="filled" >Nigeria</option>
                                    </Select>
                                </FormControl>
                                <Field
                                    as={Checkbox}
                                    id="rememberMe"
                                    name="rememberMe"
                                    colorScheme="purple"
                                >
                                    I agree to the DIDM <Link href='/' style={{ color: "#ffb4b3", fontWeight: "bold" }}>Terms of Use</Link> and <Link href='/' style={{ color: "#ffb4b3", fontWeight: "bold" }}>Privacy Policy</Link>
                                </Field>
                                <Button type="submit" bg={'#b52828'} width="full">
                                    Login
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}