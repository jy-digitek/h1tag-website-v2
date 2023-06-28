import { Container, Image } from "@chakra-ui/react";

export default function ContactBanner() {
  return (
    <Container maxW={"full"} p={0}>
      <Image src="/contactBanner.jpg" alt="Dan Abramov" w={"100%"} />
    </Container>
  );
}
