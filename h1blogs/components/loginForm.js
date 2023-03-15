import { useEffect, useState } from "react";

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

import { userLogin } from "../pages/redux/featured/actions";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

export default function LoginForm({ props }) {
  const [data, setData] = useState({});
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state) => state.auth);

  if (state.isLogin) {
    router.push("/admin/dashboard");
  } else {
  }

  const submitHandle = async () => {
    dispatch(userLogin(data));
  };

  const changeHandle = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  return (
    <ChakraProvider>
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
