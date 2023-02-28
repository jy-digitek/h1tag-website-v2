import { SimpleGrid, Flex, Box, ListItem, List, Center, Hide } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons";

const Topbar = () => {
    return (
        <SimpleGrid columns={[1, null, 2]} spacing={2} bg="#dc3545" color="white" py={2}>
            
            <Box py={"auto"} >
                <List spacing={3}> 
                    <Flex justify={'center'}>
                        <ListItem px={4} >
                            Blogs
                        </ListItem >
                        <ListItem px={4}>
                            News & Events
                        </ListItem>
                        <ListItem px={4}>
                            Franchise
                        </ListItem>
                        <ListItem px={4}>
                            Careers
                        </ListItem>
                    </Flex>
                </List>
            </Box>

            <Hide below='md'>
                <Box>
                    <List spacing={2} fontSize={''}>
                    <Center>        
                        <Flex>
                            <ListItem px={10} >
                            <EmailIcon/>  test@gmail.com
                            </ListItem >
                            <ListItem px={10}>
                                News & Events
                            </ListItem>
                        </Flex>
                        </Center>
                    </List>
                </Box>
            </Hide>

        </SimpleGrid>
    )
}

export default Topbar;