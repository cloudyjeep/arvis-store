import * as React from "react"
import {
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaOpencart } from "react-icons/fa"

type ButtonIconProps = Omit<IconButtonProps, "aria-label">

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  
  return (
    <IconButton
      fontSize="large"
      variant="ghost"
      color="current"
      marginLeft="2"
      icon={<FaOpencart />}
      aria-label=""
      {...props}
    />
  )
}
