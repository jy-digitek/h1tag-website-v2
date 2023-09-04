import { Box, Card, CardBody, Container, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import * as Yup from "yup";
import Carousel from "../../components/Carousel";
//import { SectionTitle } from "../../../components/SectionTitle";
import axios from "axios";
import { SectionTitle } from "../../components/SectionTitle";
import ContactForm from "../../components/contactform";

const Feedback = () => {
    const [success, successSet] = useState(false);
    const [loading, loadingSet] = useState(false);
    const submitHandle = async (values, { resetForm }) => {
        console.log(values);
        loadingSet(true);
        const name = values.name;
        const email = values.email;
        const phone = values.phone;
        const branch = values.branch;
        const terms_accepted = values.terms_accepted;
        console.log("success", success);
        successSet(true);

        try {
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

            //console.log("Res=>", res.data);
            // console.log("Loading=>", loading);
            console.log("Success=>", success);
            if (res.data == "Mail Sent") {
                successSet(true);
                //onClose();
                resetForm();
                // values = "";
                // window.open("/uploads/broucher/Broucher.pdf");
            } else successSet(false);
            loadingSet(false);
        } catch (error) {
            console.log(error);
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
    return (
        <>
            <Container maxW={"full"} px={[5, 10]} id={"review"} pb={10}>
                {" "}
                <SectionTitle as="h3" py={10}>
                    Students’ Feedback
                </SectionTitle>
                <SimpleGrid
                    columns={[1, 1, 2]}
                    textAlign={"center"}
                    alignItems={"center"}
                >
                    <Box>
                        <Carousel />
                    </Box>
                    <Box>
                        <Card mx={[0, 20]}>
                            <CardBody>
                                {" "}
                                {
                                    <ContactForm
                                        success={success}
                                        successSet={successSet}
                                        loading={loading}
                                        validationSchema={validationSchema}
                                        initialValues={initialValues}
                                        submitHandle={submitHandle}
                                    />
                                }
                            </CardBody>
                        </Card>{" "}
                    </Box>
                </SimpleGrid>
            </Container>{" "}
        </>
    );
};

export default Feedback;
