import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignInWithGoogle = () => {
  return (
    <Button
      w={"full"}
      maxW={"md"}
      variant={"outline"}
      textAlign="center"
      leftIcon={<FcGoogle />}
    >
      <Text>Sign in with Google</Text>
    </Button>
  );
};

export default SignInWithGoogle;
