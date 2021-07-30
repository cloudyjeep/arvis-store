import * as React from "react";
import { Box, Container, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box pt={20} bg="blackAlpha.100">
      <Box pt={8} pb={6} textAlign="center" fontSize="lg" bg={"gray.300"}>
        <br />
        <Text color="gray.600">
          © 2021 <b>Razif</b> | <em>test for arvis</em>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
