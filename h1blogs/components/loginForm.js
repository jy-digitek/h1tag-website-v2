import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Input,
  Text,
  Container,
  Button,
  Stack,
} from "@chakra-ui/react";
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
  };

  return (
    <>
      <FormControl style={{ border: "1px solid black", padding: "20px 50px" }}>
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
      </FormControl>
    </>
  );
}
