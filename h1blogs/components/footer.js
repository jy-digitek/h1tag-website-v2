import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Flex,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  SiGooglemaps,
  SiYoutube,
  SiInstagram,
  SiFacebook,
  SiLinkedin,
} from "react-icons/si";
import { SlPhone } from "react-icons/sl";
// import CTA from "../pages/Home/partials/CTA";
import CTA from "../components/CTA";

export default function Footer() {
  return (
    <>
      <CTA
        title={"Struggling to Choose a Career?"}
        label={"Get instant Career Counselling"}
        color="white"
        mt={10}
        backgroundImage={
          "linear-gradient(45deg, rgb(3 10 46), rgb(0 0 0 / 75%))"
        }
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      />

      <Container
        maxW="full"
        // background={"#101C32 url(/world-map.png)"}
        background={"#0b285c url(/world-map.png)"}
        backgroundSize={"contain"}
        backgroundPosition={"center center"}
        backgroundRepeat={"no-repeat"}
        py={10}
      >
        <SimpleGrid
          columns={[1, 2, 4]}
          spacing={10}
          pt={20}
          color={"white"}
          px={[0, 20]}
        >
          <Box>
            {/* <Heading as={"h2"} fontSize="20px">
              About H1 Tags
            </Heading> */}
            <Box
              sx={{
                bg: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                w: "200px",
                rounded: 8,
                pb: 1,
              }}
            >
              <Image src="/h1logo.png" w={"full"} />
            </Box>
            <Text fontSize={"12px"} py={3}>
              <strong> H1 Tags:</strong> A School of Digital Marketing provides
              the Best Digital Marketing Course in Delhi with training programs
              allowing students to learn the most current methods in the field
              of Digital Marketing. With over a decade of experience in Digital
              Marketing.
            </Text>
          </Box>
          <Box>
            <Heading as={"h2"} fontSize="20px">
              Important Links:
            </Heading>

            <List spacing={3} fontSize="14px" py={3}>
              <ListItem p={0}>
                <Link href={"digitalmarketing"}>
                  <ListIcon as={ChevronRightIcon} color="white" />
                  Digital marketing Course
                </Link>
              </ListItem>
              <ListItem p={0}>
                <Link href="/graphicdesign">
                  <ListIcon as={ChevronRightIcon} color="white" />
                  Graphic Design Course
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#review">
                  <ListIcon as={ChevronRightIcon} color="white" />
                  Student Reviews
                </Link>
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <Link href={"/about"}>
                  <ListIcon as={ChevronRightIcon} color="white" /> About Us
                </Link>
              </ListItem>
              <ListItem>
                <Link href={"/contact"}>
                  <ListIcon as={ChevronRightIcon} color="white" />
                  Contact Us
                </Link>
              </ListItem>
              <ListItem>
                <Link href={"/privacy-policy"}>
                  <ListIcon as={ChevronRightIcon} color="white" />
                  Privacy Policy
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Heading as={"h2"} fontSize="20px">
              Training Centers :
            </Heading>
            {/* <Text fontSize={"12px"} py={3}>
            Dwarka | Gurugram | Kalkaji | Pitampura | Preet Vihar | Rajouri
            Garden | South Campus | Noida | Meerut | Mumbai | GOA | Varanasi |
            Jaipur | Srinagar J&K
          </Text> */}
            <UnorderedList>
              <ListItem>Netaji Subhash Place</ListItem>
              <ListItem>Budh Vihar</ListItem>
            </UnorderedList>
            <Heading as={"h2"} fontSize="20px" py={3}>
              Business Hours
            </Heading>
            <Text fontSize={"12px"}>Monday – Friday : 10am to 7pm</Text>
            <Text fontSize={"12px"}>Saturday & Sunday : 10am to 2pm</Text>
          </Box>

          <Box>
            <Heading as={"h2"} fontSize="20px">
              Corporate Office :
            </Heading>
            <Flex pt={3}>
              <Box>
                <SiGooglemaps fontSize={"25px"} />
              </Box>
              <Box>
                <Text ml={2}>
                  FF 18, First Floor, Pearls Omaxe Tower Netaji Subhash Place,
                  Delhi-110034
                </Text>
              </Box>
            </Flex>
            {/* <Text pt={3}>
            
          </Text> */}
            <Flex pt={3}>
              <Box>
                <SlPhone fontSize={"25px"} />
              </Box>
              <Box>
                <Link href="tel:+91 77700-07683">+91 77700-07683</Link>
              </Box>
            </Flex>

            <Flex pt={3}>
              <Box>
                <EmailIcon fontSize={"25px"} />
              </Box>
              <Box>
                <Text ml={2}>info@h1tags.com</Text>
              </Box>
            </Flex>
            <Heading as={"h2"} fontSize="20px" pt={4}>
              Subscribe & Follow us :
            </Heading>
            <Flex pt={3}>
              <Box mr={5}>
                <Link href={"https://www.youtube.com/@h1tags"}>
                  <SiYoutube fontSize={"20px"} />
                </Link>
              </Box>
              <Box mr={5}>
                <Link href={"https://www.instagram.com/h1tags/"}>
                  <SiInstagram fontSize={"20px"} />
                </Link>
              </Box>
              <Box mr={5}>
                <Link href={"https://www.facebook.com/h1tags/"}>
                  <SiFacebook fontSize={"20px"} />
                </Link>
              </Box>
              <Box mr={5}>
                <Link href={"https://www.linkedin.com/company/h1tags/"}>
                  <SiLinkedin fontSize={"20px"} />
                </Link>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
        <Text
          fontSize={"12px"}
          color="white"
          textAlign={"center"}
          py={5}
          mt={5}
          // border={"1px solid red"}
        >
          Copyright ©2023, All rights reserved.
        </Text>
      </Container>
    </>
  );
}
