import React, { useState } from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import FieldInput, {
  FieldInputProps,
  InputProps,
} from "../../components/FieldInput";
import ButtonAction from "../../components/ButtonAction";
import LineDivider from "../../components/LineDivider";
import SignInWithGoogle from "./SignInWithGoogle";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidUsername,
} from "../../utils";
import { UserKey } from "../../store/Reducers/User";
import { URI } from "../../ui/Router";
import Message from "../../components/Toast";

enum InputKey {
  passwordConfirm = "passwordConfirm",
}
type FormInputProps = Pick<FieldInputProps, "onChange">;

const FormInput = ({ onChange }: FormInputProps): JSX.Element => {
  return (
    <Stack spacing={4} mb="8">
      <FieldInput
        id={UserKey.name}
        onChange={onChange}
        validator={isValidName}
        input={{ placeholder: "Full name" }}
      />
      <FieldInput
        id={UserKey.username}
        onChange={onChange}
        validator={isValidUsername}
        input={{ placeholder: "Username" }}
      />
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
      <FieldInput
        id={InputKey.passwordConfirm}
        onChange={onChange}
        validator={isValidPassword}
        input={{ placeholder: "Confirm password", type: "password" }}
      />
    </Stack>
  );
};

const FormRegister = (): JSX.Element => {
  const formDataInput: any = {};

  const onSubmit = () => {
    const inputs = Reflect.ownKeys(formDataInput);
    let error = [];
    inputs.map((i) => {
      const input: InputProps = formDataInput[i];
      if (input.error || (!input.error && input.value=='')) error.push(input);
    });
    console.log('>>', inputs)
    if(error.length){
      Message({
        // status: "warning",
        description: "Not complete, please fill in the form",
      })
    }
    // handleRegister(formDataInput);
  };

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
        Register
      </Heading>
      <Box as={"form"} mt={10}>
        <FormInput
          onChange={(id, value) => {
            formDataInput[id] = value;
            console.log("onChange", id, value);
          }}
        />

        <ButtonAction
          text="REGISTER"
          gradient="linear(to-r, blue.400,cyan.400)"
          onClick={onSubmit}
        />
        <LineDivider />
        <SignInWithGoogle />
        <Link to={URI.Login}>
          <Text display="flex" mt="4" size="sm">
            <u>Login</u>
          </Text>
        </Link>
      </Box>
    </Stack>
  );
};

const handleRegister = () => {};

export default FormRegister;
