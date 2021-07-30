import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps as IP,
} from "@chakra-ui/react";
import React, { FormEventHandler, memo, useState } from "react";

export interface FieldInputProps {
  id: string | number;
  validator?: validatorInput;
  onChange?: (id: any, state: InputProps) => void;
  control?: FormControlProps;
  label?: FormLabelProps;
  input?: IP;
}

export type validatorInput = (
  newValue?: string,
  state?: InputProps
) => Partial<InputProps>;

export interface InputProps {
  value?: string | any;
  error?: boolean | any;
  message?: any;
}

const FieldInput = memo((props: FieldInputProps): JSX.Element => {
  const { validator, onChange, id } = props;
  const [state, setState] = useState<InputProps>({ value: "" });

  const onInput = (e: any) => {
    const { value } = e.target;
    const newState = { value, ...(validator && validator(value, state)) };
    setState(newState);
    if (onChange) onChange(id, newState);
  };

  return (
    <FormControl {...props.control} isInvalid={state.error === true}>
      <FormLabel htmlFor={id as any} {...props.label} />
      <Input
        id={id as any}
        // bg={"gray.100"}
        // border={0}
        // color={"gray.500"}
        // _placeholder={{ color: "gray.500" }}
        {...props.input}
        onChange={onInput}
        value={state.value}
      />
      <FormErrorMessage mb={-4} mt={0.5}>
        {state.message}
      </FormErrorMessage>
    </FormControl>
  );
});

export default FieldInput;
