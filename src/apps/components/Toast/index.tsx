import { Button } from "@chakra-ui/button";
import { useToast, ToastOptions, UseToastOptions } from "@chakra-ui/toast";
import React from "react";

// toast link
let linkToast: any;
type ToastProps = Partial<Omit<ToastOptions, "status"> & UseToastOptions>

export default function Message(
  props: ToastProps
) {
  linkToast({
    title: "An error occurred.",

    status: "success",
    duration: 5000,
    isClosable: true,
    ...props,
  });
}

export function ToastManager(): JSX.Element {
  let toast = useToast();
  linkToast = (props: ToastProps) => toast(props);

  return <div></div>;
}
