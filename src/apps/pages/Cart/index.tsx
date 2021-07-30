import React from "react";
import { Badge, Box, Container, Image } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const Cart = () => {

  return (
    <Box bg="blackAlpha.100" py={6}>
      <Container maxW="container.xl" p={0} textAlign="center" fontSize="xl">
        <h2>Cart</h2>
      </Container>
    </Box>
  );
};

export default Cart;
