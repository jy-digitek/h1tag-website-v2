import {
  Container,
  Wrap,
  WrapItem,
  Center,
  Card,
  CardBody,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";

import { SectionTitle } from "../../../components/SectionTitle";
import { PlacementPartner } from "../../../components/DATA";
import { AdvertisingPartner } from "../../../components/DATA";

export const TrustedPartner = () => {
  return (
    <Container maxW={"full"} px={[5, 10]}>
      <SectionTitle
        desc={
          "  Our Digital Marketing Institute in Delhi is trusted by the following partners"
        }
        mb={10}
      >
        Our Trusted Partners
      </SectionTitle>

      <Heading as={"h3"} px={[0, 10]} mb={[5, 10]} size="md">
        Our Placement Partners
      </Heading>
      <Wrap bg={"white"} p={3} spacing={["10px", "20px"]} px={[0, 10]}>
        {PlacementPartner.map((item, i) => {
          return (
            <WrapItem key={i}>
              <Card align="center">
                <CardBody>
                  <Image src={item} boxSize={40} />
                </CardBody>
              </Card>
            </WrapItem>
          );
        })}

        {/* <WrapItem>
          <Card align="center">
            <CardBody>
              <Image src={"/TrustedPartner/2.png"} boxSize={["25px", "70px"]} />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image src={"/TrustedPartner/3.png"} boxSize={["25px", "70px"]} />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image src={"/TrustedPartner/4.png"} boxSize={["25px", "70px"]} />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image src={"/TrustedPartner/5.png"} boxSize={["25px", "70px"]} />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image src={"/TrustedPartner/6.png"} boxSize={["25px", "70px"]} />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image src={"/TrustedPartner/7.png"} boxSize={["25px", "70px"]} />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image src={"/TrustedPartner/8.png"} boxSize={["25px", "70px"]} />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image src={"/TrustedPartner/9.png"} boxSize={["25px", "70px"]} />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image
                src={"/TrustedPartner/10.png"}
                boxSize={["25px", "70px"]}
              />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image
                src={"/TrustedPartner/11.png"}
                boxSize={["25px", "70px"]}
              />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image
                src={"/TrustedPartner/12.png"}
                boxSize={["25px", "70px"]}
              />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image
                src={"/TrustedPartner/13.png"}
                boxSize={["25px", "70px"]}
              />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image
                src={"/TrustedPartner/14.png"}
                boxSize={["25px", "70px"]}
              />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image
                src={"/TrustedPartner/15.png"}
                boxSize={["25px", "70px"]}
              />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image
                src={"/TrustedPartner/16.png"}
                boxSize={["25px", "70px"]}
              />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image
                src={"/TrustedPartner/17.png"}
                boxSize={["25px", "70px"]}
              />
            </CardBody>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card align="center">
            <CardBody>
              <Image
                src={"/TrustedPartner/18.png"}
                boxSize={["25px", "70px"]}
              />
            </CardBody>
          </Card>
        </WrapItem> */}
      </Wrap>

      <Heading as={"h3"} px={[0, 10]} my={[5, 10]} size="md">
        Our Advertising Partners
      </Heading>
      <Wrap bg={"white"} p={3} spacing={["10px", "20px"]} px={[0, 10]}>
        {AdvertisingPartner.map((item, i) => {
          return (
            <WrapItem key={i}>
              <Card align="center">
                <CardBody>
                  <Image src={item} boxSize={40} />
                </CardBody>
              </Card>
            </WrapItem>
          );
        })}
      </Wrap>
    </Container>
  );
};
