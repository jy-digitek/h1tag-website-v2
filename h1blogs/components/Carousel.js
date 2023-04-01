import React from "react";
import { Box } from "@chakra-ui/react";
// import { IconButton, useBreakpointValue, Card } from "@chakra-ui/react";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { vdoFeedback } from "./DATA";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // className: "center",
  // centerMode: true,
  // centerPadding: "60px",
  autoplay: true,
  pauseOnHover: true,
};

export default function Carousel() {
  return (
    <Slider {...settings}>
      {vdoFeedback.map((item, key) => (
        <Box px={[0, 3]} key={key}>
          <Box
            as="iframe"
            sx={{
              rounded: 8,
              border: 0,
              shadow: "lg",
              my: 8,
            }}
            //margin="10px"
            overflow="hidden"
            width="100%"
            height="350"
            src={item}
            style={{ background: "red" }}
            title="My experience at H1 Tags - A Digital Marketing Training Institute: SABEENA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </Box>
      ))}
    </Slider>
  );
}
