import React from "react";
import { Box, IconButton, useBreakpointValue, Card } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  autoplay: true,
  pauseOnHover: true,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const data = [
    "https://www.youtube.com/embed/d2lWQSFCiCo",
    "https://www.youtube.com/embed/Em6Z1LMSQIA",
    "https://www.youtube.com/embed/RXMIi5QblN8",
    "https://www.youtube.com/embed/hS5-F7w6xDk",
  ];

  return (
    <Slider {...settings}>
      {data.map((item, key) => (
        <Box px={[0, 3]}>
          <Card>
            <iframe
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
          </Card>
        </Box>
      ))}
    </Slider>
  );
}
