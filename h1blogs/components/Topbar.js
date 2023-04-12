import {
  SimpleGrid,
  Flex,
  Box,
  ListItem,
  List,
  Center,
  Text,
  Hide,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { SlPhone } from "react-icons/sl";
import Link from "next/link";

const Topbar = () => {
  return (
    <SimpleGrid
      columns={[1, null, 2]}
      spacing={2}
      bg="#101C32"
      color="white"
      py={2}
    >
      <Box py={"auto"} px={40}>
        <List spacing={3}>
          <Flex>
            <ListItem px={4}>
              <Link href={"/contact"}>Branches</Link>
            </ListItem>
            {/* <ListItem px={4}>Careers</ListItem> */}
          </Flex>
        </List>
      </Box>

      <Hide below="md">
        <Box>
          <List spacing={2} fontSize={""}>
            <Center>
              <Flex>
                <ListItem px={10}>
                  <EmailIcon fontSize={"25px"} /> info@h1tags.com
                </ListItem>

                <ListItem px={10}>
                  <Flex>
                    <SlPhone fontSize={"25px"} /> <Text>+91 77700-07683</Text>
                  </Flex>
                </ListItem>
              </Flex>
            </Center>
          </List>
        </Box>
      </Hide>
    </SimpleGrid>
  );
};

export default Topbar;
