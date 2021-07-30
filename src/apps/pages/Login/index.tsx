import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { Link } from "react-router-dom";
import { URI } from "../../ui/Router";

interface LoginProps {
  isSignUp?: boolean;
}

export default function Login(props: LoginProps): JSX.Element {
  const { isSignUp } = props;
  return (
    <Box
      position={"relative"}
      bgGradient={`linear(to-r, blue.50,white,red.50)`}
    >
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <HeaderLogin />
        {isSignUp ? <FormRegister /> : <FormLogin />}
      </Container>
    </Box>
  );
}

const HeaderLogin = (): JSX.Element => (
  <Stack spacing={{ base: 10, md: 20 }} zIndex="2">
    <Link to={URI.Default}>
      <Heading
        textShadow="outline"
        lineHeight={1.1}
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
      >
        Arvi
        <Text
          as={"em"}
          bgClip="text"
          bgGradient="linear(to-r, red.400,pink.400)"
        >
          shop
        </Text>
      </Heading>
    </Link>
  </Stack>
);
