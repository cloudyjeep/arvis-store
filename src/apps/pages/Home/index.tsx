import React from "react";
import { Badge, Box, Container, Divider, Image, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import Carousel from "../../components/Carousel";
import { FaStar } from "react-icons/fa";
import Product from "../../components/Product";
import { useStoreProduct } from "../../store/hook";
import { useDispatch } from "react-redux";
import type from "../../store/type";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  const product = useStoreProduct()
  const dispatch = useDispatch()

  const width = isMobile ? '50%' : '33.33%'

  const onAddToCart = (i: number) => () => {
    dispatch({ type: type.cartUpdate, payload: product[i] })
  }

  return (
    <Box bg="blackAlpha.100" py={6}>
      <Container maxW="container.xl" p={0} textAlign="center" fontSize="xl">
        <Carousel />
        <Box pt="8" pb="4">
          <Text fontSize="2xl" color='gray.400'>New Arrival</Text>
        </Box>
        <Box display="inline-flex" flexWrap="wrap" justifyContent="space-evenly">
          {product.length && product.map((item, i) => (
            <Product key={i} {...item} width={width} onAddToCart={onAddToCart(i)} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
