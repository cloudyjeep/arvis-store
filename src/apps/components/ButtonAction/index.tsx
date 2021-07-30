import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const ButtonAction = (
  props: { text?: string; gradient: string } & ButtonProps
): JSX.Element => {
  const { gradient } = props;
  return (
    <Button
      {...props}
      fontFamily={"heading"}
      w={"full"}
      bgGradient={gradient}
      color={"white"}
      _hover={{
        bgGradient: gradient,
        boxShadow: "xl",
      }}
    >
      {props.text}
    </Button>
  );
};

export default ButtonAction