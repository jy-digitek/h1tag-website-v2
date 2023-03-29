import Link from "next/link";
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
  Heading,
  Text,
} from "@chakra-ui/react";

// import { useFormik } from "formik";

export default function ContactForm() {
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     email: "",
  //     rememberMe: false,
  //   },
  //   onSubmit: (valuse) => {
  //     alert(JSON.stringify(values, 0, null));
  //   },
  // });
  // const handleSubmit = (data) => {
  //   alert("hello");
  // };

  return (
    <Flex
      align={"center"}
      textAlign={"center"}
      justify="center"
      // h="100vh"
      style={{ width: "100%" }}
      width={"100%"}
    >
      <Box sx={{ background: "#fff", shadow: "2xl" }} rounded="md" p={10}>
        <Text fontSize={["1.5rem", "2rem"]} fontWeight={"bold"}>
          Take a free session today!!
        </Text>
        {/* <Text fontSize={["1rem", "1.5rem"]} p={2}>
          Go Digital | Go Global
        </Text> */}
        <Text fontSize={["0.9rem", "1rem"]} p={2} mb={2} fontWeight="bold">
          Speak To Our Specialist - +91 - 8800505151
        </Text>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            rememberMe: false,
            place: "",
          }}
          onSubmit={(values, error) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    bg={"#607d8b29"}
                    Placeholder="Full Name"
                    validate={(value) => {
                      let error;

                      value.length < 6
                        ? (error =
                            "Password must contain at least 6 characters")
                        : "";

                      return error;
                    }}
                  />
                </FormControl>
                <FormControl>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    bg={"#607d8b29"}
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
                    bg={"#607d8b29"}
                    validate={(value) => {
                      let error;

                      value.length < 6
                        ? (error =
                            "Password must contain at least 6 characters")
                        : (error = "");

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <Select
                    placeholder="Choose your Center"
                    color={"gray"}
                    bg={"#607d8b29"}
                    name="place"
                  >
                    <option variant="filled" value={"Neta ji subhas palace"}>
                      Neta ji subhas palace
                    </option>
                    <option variant="filled" value={"Nigeria"}>
                      Nigeria
                    </option>
                  </Select>
                </FormControl>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  I agree to the DIDM{" "}
                  <Link
                    href="/"
                    style={{ color: "#ffb4b3", fontWeight: "bold" }}
                  >
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/"
                    style={{ color: "#ffb4b3", fontWeight: "bold" }}
                  >
                    Privacy Policy
                  </Link>
                </Field>
                <Button
                  type="submit"
                  bg={"#b52828"}
                  width="full"
                  onClick={() => handleSubmit}
                >
                  Submit
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
