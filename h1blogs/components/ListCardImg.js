import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  IoSchoolOutline,
  IoSchool,
  IoSchoolSharp,
} from "react-icons/io5";
//   import { ReactElement } from 'react';
import Link from "next/link";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function ListCardImg({
  courseTitle,
  description,
  item_1,
  item_2,
  item_3,
  item_4,
  href,
}) {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>{courseTitle}</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            {description}
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            {item_1 && (
              <Feature
                icon={<Icon as={IoSchool} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={item_1}
              />
            )}

            {item_2 && (
              <Feature
                icon={<Icon as={IoSchool} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={item_2}
              />
            )}
            {item_3 && (
              <Feature
                icon={
                  <Icon as={IoSchoolOutline} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={item_3}
              />
            )}

            {item_4 && (
              <Feature
                icon={
                  <Icon as={IoSchoolSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={item_4}
              />
            )}
          </Stack>
          <Box sx={{ mb: 3, mx: 3 }}>
            <Link href={href}>
              <Button bg={"#04113c"} width={"full"} color="#fff">
                Learn More
              </Button>
            </Link>
          </Box>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
