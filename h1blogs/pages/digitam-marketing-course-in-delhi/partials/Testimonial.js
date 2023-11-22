import { ReactNode } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Reviews } from "../../../components/DATA";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Highlight,
} from "@chakra-ui/react";
import { SectionTitle } from "../../../components/SectionTitle";

const Testimonial = ({ children }) => {
  return <Box maxW={"6xl"}>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const WithSpeechBubbles = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} spacing={12}>
        <Stack spacing={0} py={12} align={"center"}>
          <SectionTitle
            as="h2"
            desc="Thousands of students’ trust makes us - the Best Digital Marketing Training Institute in Delhi"
          >
            <Highlight
              query="H1 Tags"
              styles={{
                px: "2",
                py: "1",
                rounded: "full",
                color: "#FF5733",
              }}
            >
              1,000+ Students Trust H1 Tags
            </Highlight>
          </SectionTitle>
        </Stack>
        {/* <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        > */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={100}
          // slidesPerView={"4"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 20,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {Reviews.map((item, key) => {
            return (
              <SwiperSlide>
                <Testimonial>
                  <TestimonialContent>
                    <TestimonialHeading>{item.name}</TestimonialHeading>
                    <TestimonialText>{item.review}</TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                    src={item.img}
                    name={item.name}
                    //title={"CEO at ABC Corporation"}
                  />
                </Testimonial>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default WithSpeechBubbles;
