import Link from "next/link";
import { Box, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { Formik } from "formik";

import {
  CheckboxSingleControl,
  InputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";

export default function ContactForm({
  submitHandle,
  validationSchema,
  initialValues,
}) {
  return (
    <>
      <Flex
        align={"center"}
        justify="center"
        style={{ width: "100%" }}
        width={"100%"}
      >
        <Box sx={{ background: "#fff" }} rounded="md">
          <Text
            fontSize={["1.5rem", "2rem"]}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Take a free session today!!
          </Text>

          <Text
            fontSize={["0.9rem", "1rem"]}
            p={2}
            mb={2}
            fontWeight="bold"
            textAlign={"center"}
          >
            Speak To Our Specialist - +91 77700-07683
          </Text>

          <Formik
            initialValues={initialValues}
            onSubmit={submitHandle}
            validationSchema={validationSchema}
            bg={"blue"}
          >
            {({ handleSubmit, values }) => (
              <Box bg={""} rounded="lg" p={6} as="form" onSubmit={handleSubmit}>
                <InputControl name="name" label="Enter Name" />
                <InputControl name="email" label="Enter Email" />
                <InputControl name="phone" label="Enter Phone" />

                <SelectControl
                  name="branch"
                  selectProps={{ placeholder: "Select Branch" }}
                  mt={5}
                >
                  <option value="Netaji Subhash Place">
                    Netaji Subhash Place
                  </option>
                  <option value="Budh Vihar">Budh Vihar</option>
                </SelectControl>
                <CheckboxSingleControl name="terms_accepted" my={5}>
                  I agree to the h1tags{" "}
                  <Link href="/" style={{ color: "#06113a" }}>
                    Privacy Policy
                  </Link>
                </CheckboxSingleControl>
                <ButtonGroup width={"100%"}>
                  <SubmitButton bg={"#06113a"} w={"full"} color={"white"}>
                    Submit
                  </SubmitButton>
                </ButtonGroup>
              </Box>
            )}
          </Formik>
        </Box>
      </Flex>

      {/* {success && <Toast />} */}

      {/* {console.log(success)} */}
    </>
  );
}
