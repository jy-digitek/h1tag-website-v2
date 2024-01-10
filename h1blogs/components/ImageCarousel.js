import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { vdoFeedback } from "./DATA";
import { imgFeedback } from "./DATA";
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

const ImageCarousel = () => {
  return (
    <Slider {...settings}>
      {imgFeedback.map((item, key) => (
        <Box px={[0, 3]} key={key}>
          <Box
            as={Image}
            sx={{
              rounded: 8,
              border: 0,
              shadow: "lg",
              my: 8,
            }}
            objectFit="cover"
            //margin="10px"
            overflow="hidden"
            width="100%"
            height="400"
            src={item}
            style={{ background: "red" }}
            title="My experience at H1 Tags - A Digital Marketing Training Institute: SABEENA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Box>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
