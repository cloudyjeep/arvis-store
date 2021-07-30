import React from "react";
import { Box, Image, LinkBox, LinkOverlay, useBoolean } from "@chakra-ui/react";
import CarouselImages from "../Carousel";
import { FaStar } from "react-icons/fa";
import { ProductItem } from "../../store/Reducers/Product";
import ButtonAction from "../ButtonAction";
import { Link } from "react-router-dom";
import { URI } from "../../ui/Router";

const Product = React.memo(
  (props: ProductItem & { width: any, onAddToCart: any }): JSX.Element => {
    const [hover, setHover] = useBoolean();

    return (
      <Box px={3} py={6} width={props.width} borderTopWidth="1px">
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          onMouseEnter={setHover.on}
          onMouseLeave={setHover.off}
          transform={"auto"}
          translateY={hover ? "-5px" : undefined}
          boxShadow={hover ? "2xl" : "lg"}
        >
          <Link to={URI.Cart}>
            <Image src={(props.imageUrl as any)[0]} alt={props.title} />
          </Link>

          <Box p="6" bg="gray.100">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {props.title}
            </Box>
            <Box>{`$ ${props.price}`}</Box>
            <ButtonAction
              text="Add to Cart"
              gradient="linear(to-r, red.400,pink.400)"
              onClick={props.onAddToCart}
            />
            {/* <Box d="flex" mt="2" alignItems="center"></Box> */}
          </Box>
        </Box>
      </Box>
    );
  }
);

export default Product;
