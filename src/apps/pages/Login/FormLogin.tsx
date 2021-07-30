import React, { useState } from "react";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import FieldInput, { FieldInputProps } from "../../components/FieldInput";
import ButtonAction from "../../components/ButtonAction";
import LineDivider from "../../components/LineDivider";
import SignInWithGoogle from "./SignInWithGoogle";
import { Link } from "react-router-dom";
import { URI } from "../../ui/Router";
import { UserKey } from "../../store/Reducers/User";
import { isValidEmail, isValidPassword } from "../../utils";


type FormInputProps = Pick<FieldInputProps, "onChange">;

const FormInput = ({ onChange }: FormInputProps): JSX.Element => {
  return (
    <Stack spacing={4} mb="8">
      <FieldInput
        id={UserKey.email}
        onChange={onChange}
        validator={isValidEmail}
        input={{ placeholder: "Email" }}
      />
      <FieldInput
        id={UserKey.password}
        onChange={onChange}
        validator={isValidPassword}
        input={{ placeholder: "Password", type: "password" }}
      />
    </Stack>
  );
};

const FormLogin = (): JSX.Element => {
  let formDataInput: any = {};

  return (
    <Stack
      bg={"gray.50"}
      rounded={"xl"}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: "lg" }}
      boxShadow="2xl"
    >
      <Heading
        color={"gray.800"}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Login
      </Heading>
      <Box as={"form"} mt={10}>
        <SignInWithGoogle />
        <LineDivider />

        <FormInput
          onChange={(id, s) => {
            formDataInput[id] = s.value;
            console.log("onChange", id, s);
          }}
        />

        <ButtonAction text="LOGIN" gradient="linear(to-r, red.400,pink.400)" />
        <LineDivider />
        <Link to={URI.SignUp}>
          <ButtonAction
            text="REGISTER"
            gradient="linear(to-r, blue.400,cyan.400)"
          />
        </Link>
      </Box>
    </Stack>
  );
};

export default FormLogin;
