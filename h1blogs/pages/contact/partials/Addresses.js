import React from "react";
import * as Yup from "yup";
import {
    Container,
    Box,
    SimpleGrid,
    Card,
    CardBody,
    Text,
    Flex,
    Heading,
    // CardHeader,
    // CardFooter,
    // Button,
    // Highlight,
} from "@chakra-ui/react";

import {
    SiGooglemaps,
    SiYoutube,
    SiInstagram,
    SiFacebook,
    SiLinkedin,
} from "react-icons/si";
import axios from "axios";
import ContactForm from "../../../components/contactform";
import { AddressesData } from "../../../components/DATA";
// import {  } from "@react-icons/md";
import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md";

export default function Addresses() {
    const [success, successSet] = React.useState(false);
    const [loading, loadingSet] = React.useState(false);

    const submitHandle = async (values) => {
        // console.log(values);
        loadingSet(true);
        const name = values.name;
        const email = values.email;
        const phone = values.phone;
        const branch = values.branch;
        const terms_accepted = values.terms_accepted;
        try {
            // console.log(1);
            const res = await axios({
                method: "POST",
                url: "/mail.php",
                data: {
                    name,
                    email,
                    branch,
                    phone,
                    terms_accepted,
                },
            });

            // console.log("Res=>", res.data);

            // console.log("Success=>", success);
            if (res.data == "Mail Sent") {
                successSet(true);
                openModalSet(false);
            } else successSet(false);
            loadingSet(false);
        } catch (error) {
            // console.log(error);
        }
    };
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        terms_accepted: false,
        branch: "",
    };
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email address!")
            .required("Email is required!"),
        phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid!")
            .min(10, "Phone number can not be less than 10 digits!")
            .max(10, "Phone number can not exceed 10 digits!")
            .required("Phone Number is required!"),
        branch: Yup.string().required(),
        terms_accepted: Yup.boolean().required(
            "Please agree to Privacy Policy!"
        ),
    });
    // React.useEffect(() => {
    //   setTimeout(() => {
    //     console.log("a");
    //   }, 0);
    // }, [success]);
    return (
        <Container
            maxW={"full"}
            px={[0, 16]}
            // style={{
            //   background: "rgb(2,0,36)",
            //   background:
            //     "linear-gradient(342deg, #101C32 61%, rgba(255,255,255,1) 61%)",
            // }}
        >
            <SimpleGrid
                columns={[1, 1, 2]}
                spacing={[0, 10]}
                alignItems="flex-start"
                py={[12]}
            >
                <Box>
                    {AddressesData.map((i, k) => (
                        <Card sx={{ mb: 10 }} key={k}>
                            <CardBody>
                                <>
                                    <Text
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            mb: 1,
                                        }}
                                    >
                                        {i.branch_location}
                                    </Text>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            // alignItems: "center",
                                        }}
                                    >
                                        <MdLocationOn
                                            style={{
                                                marginRight: "10px",
                                                marginTop: "5px",
                                            }}
                                        />{" "}
                                        {i.address}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            // alignItems: "center",
                                        }}
                                    >
                                        <MdPhone
                                            style={{
                                                marginRight: "10px",
                                                marginTop: "5px",
                                            }}
                                        />{" "}
                                        {i.conatct_No}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            // alignItems: "center",
                                        }}
                                    >
                                        <MdAttachEmail
                                            style={{
                                                marginRight: "10px",
                                                marginTop: "5px",
                                            }}
                                        />{" "}
                                        {i.email}
                                    </Box>

                                    <Box
                                        as="iframe"
                                        sx={{ mt: 5 }}
                                        src={i.map_url}
                                        width={`100%`}
                                        // height="450"
                                        // style="border:0;"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></Box>
                                </>
                            </CardBody>
                        </Card>
                    ))}
                </Box>
                <Box>
                    <ContactForm
                        success={success}
                        successSet={successSet}
                        loading={loading}
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        submitHandle={submitHandle}
                    />
                    <Heading
                        as={"h2"}
                        fontSize="20px"
                        pt={4}
                        textAlign={"center"}
                    >
                        Subscribe & Follow us :
                    </Heading>
                    <Flex pt={3} sx={{ justifyContent: "center" }}>
                        <Box mr={5}>
                            <SiYoutube fontSize={"20px"} />
                        </Box>
                        <Box mr={5}>
                            <SiInstagram fontSize={"20px"} />
                        </Box>
                        <Box mr={5}>
                            <SiFacebook fontSize={"20px"} />
                        </Box>
                        <Box mr={5}>
                            <SiLinkedin fontSize={"20px"} />
                        </Box>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Container>
    );
}
