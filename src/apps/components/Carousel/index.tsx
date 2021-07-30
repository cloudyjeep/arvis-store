import React from "react";
import Slider from "infinite-react-carousel";
import { Image } from "@chakra-ui/image";

const uris = [
  "/assets/images/slide-1-md.png",
  "/assets/images/slide-2-md.png",
  "/assets/images/slide-3-md.png",
  "/assets/images/slide-4-md.png",
  // "https://cf.shopee.co.id/file/2bb9bf1bda4818e17046fa2ee7985c37",
];

const settings = {
  adaptiveHeight: true,
  arrows: true,
  arrowsBlock: true,
  autoplay: true,
  autoplaySpeed: 6000,
  centerMode: true,
  centerPadding: 0,
  dots: true,
  duration: 300,
  gutter: 10,
  swipe: true,
  virtualList: true,
  wheel: false,
};

/**
 * link for options: https://g787543.github.io/infinite-react-carousel/
 */
const Carousel = () => {
  return (
    <Slider {...settings}>
      {uris.map(
        (uri, i) => uri && <Image key={i} borderRadius={4} src={uri} />
      )}
    </Slider>
  );
};
export default Carousel;
