import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
// import { Logo } from "./Logo";
// import { OAuthButtonGroup } from "./OAuthButtonGroup";
// import { PasswordField } from "./PasswordField";
import Link from "next/link";

export default function LoginForm({ props }) {
  const [data, setData] = useState({});
  const [token, setToken] = useState("");
  // const [role, setRole] = useState("");
  const router = useRouter();
  const submitHandle = async () => {
    // console.log(data)
    await axios
      .post("http://localhost:5000/api/vi/user/login", {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        //setRole(response.data.data.role);
        setToken(response.data.token);
        localStorage.setItem("token", token);
        console.log(localStorage.getItem("token"));
        if (localStorage.getItem("token")) {
          router.push("/admin/dashboard");
        } else {
          router.push("/admin");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const changeHandle = (e) => {
    //console.log(data);
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(data);
  };

  return (
    <ChakraProvider>
      {/* <FormControl style={{ border: "1px solid black", padding: "20px 50px" }}>
        <Stack
          spacing={2}
          direction="column"
          align="center"
          mb={5}
          pb={10}
          gap={10}
        >
          <Heading>Login</Heading>

          <Input
            type="email"
            py={10}
            mt={5}
            placeholder="Enter Email"
            style={{ width: "90%", borderRadius: "10px" }}
            ml={10}
            rboxShadow="dark-lg"
            rounded="lg"
            bg="white"
            pl={10}
            onChange={changeHandle}
            name="email"
          />

          <Input
            type="password"
            mt={5}
            py={10}
            style={{ width: "90%", borderRadius: "10px" }}
            placeholder="Enter Password"
            pl={10}
            onChange={changeHandle}
            name="password"
          />

          <Text fontSize="lg">
            New User?
            <Link fontSize="lg" href="/admin/register">
              Register
            </Link>
          </Text>

          <Button
            colorScheme="teal"
            size="lg"
            px={20}
            py={10}
            style={{ border: "1px solid black", borderRadius: "10px" }}
            onClick={submitHandle}
          >
            Sign In
          </Button>
        </Stack>
      </FormControl> */}
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
        bg={"#4299e199"}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            {/* <Logo /> */}
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg-surface" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={changeHandle}
                  />
                </FormControl>
                <Input
                  id="email"
                  name="password"
                  type="password"
                  onChange={changeHandle}
                />
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button variant="primary" bg={"#2b6cb0"} onClick={submitHandle}>
                  Sign in
                </Button>
                <HStack>
                  <Divider />
                  <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                    or continue with
                  </Text>
                  <Divider />
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
