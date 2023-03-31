import Link from "next/link";
// import { Formik, Field } from "formik";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormErrorMessage,
//   Input,
//   VStack,
//   Select,
//   option,
//   Heading,
//   Text,
// } from "@chakra-ui/react";
// import { useState } from "react";

// import { useFormik } from "formik";
import { Box, ButtonGroup, Radio, Flex, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from "formik-chakra-ui";
import * as React from "react";
import * as Yup from "yup";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values) => {
  // sleep(300).then(() => {
  //   window.alert(JSON.stringify(values, null, 2));
  // });
  console.log(JSON.stringify(values));
  alert(JSON.stringify(values));
  initialValues;
};

const submitHandle = (values) => {
  alert(JSON.stringify(values));
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const initialValues = {
  name: "",
  email: "",
  phone: "",
  employed: false,
  place: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long")
    .required("Phone Number is required"),
  place: Yup.string().required(),
  employed: Yup.boolean().equals([true]),
});

export default function ContactForm() {
  return (
    <Flex
      align={"center"}
      textAlign={"center"}
      justify="center"
      // h="100vh"
      style={{ width: "100%" }}
      width={"100%"}
    >
      <Box sx={{ background: "#fff" }} rounded="md">
        <Text fontSize={["1.5rem", "2rem"]} fontWeight={"bold"}>
          Take a free session today!!
        </Text>

        <Text fontSize={["0.9rem", "1rem"]} p={2} mb={2} fontWeight="bold">
          Speak To Our Specialist - +91 77700-07683
        </Text>

        <Formik
          initialValues={initialValues}
          onSubmit={submitHandle}
          validationSchema={validationSchema}
          bg={"blue"}
        >
          {({ handleSubmit, values, errors }) => (
            <Box bg={""} rounded="lg" p={6} as="form" onSubmit={handleSubmit}>
              <InputControl name="name" label="Enter Name" />
              <InputControl name="email" label="Enter Email" />
              <InputControl name="phone" label="Enter Phone" />

              <SelectControl
                name="place"
                selectProps={{ placeholder: "Select Place" }}
                mt={5}
              >
                <option value="Neta ji subhas palace">
                  Neta ji subhas palace
                </option>
                <option value="Budh Vihar">Budh Vihar</option>
              </SelectControl>
              <CheckboxSingleControl name="employed" my={5}>
                I agree to the h1tags{" "}
                <Link href="/" style={{ color: "#ffb4b3", fontWeight: "bold" }}>
                  Terms of Use
                </Link>
                and
                <Link href="/" style={{ color: "#ffb4b3", fontWeight: "bold" }}>
                  Privacy Policy
                </Link>
              </CheckboxSingleControl>

              <SubmitButton bg={"#b52828"} w={"full"}>
                Submit
              </SubmitButton>
            </Box>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
