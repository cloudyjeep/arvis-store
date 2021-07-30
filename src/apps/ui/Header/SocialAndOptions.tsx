import * as React from "react";
import { VStack, Button, Spacer, LinkOverlay, LinkBox, Stack } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import ColorModeSwitcher from "../ColorModeSwitcher";
import { URI } from "../Router";

interface Props {
  hasLogin?: boolean;
};

const SocialAndOptions = (props: Props): JSX.Element => {
  return (
    <VStack px={2} pb={3} flexDirection="row">
      <LinkBox maxW="sm" display="flex">
        <LinkOverlay mr={3} href="#">
          <FaInstagram />
        </LinkOverlay>
        <LinkOverlay mr={3} href="#">
          <FaTwitter />
        </LinkOverlay>
        <LinkOverlay mr={3} href="#">
          <FaFacebookSquare />
        </LinkOverlay>
      </LinkBox>
      <Spacer />
      <Stack direction="row" spacing={2}>
        <Link to={URI.Login}>
          <Button size="sm" colorScheme="teal" variant="solid">
            Login
          </Button>
        </Link>
        <Link to={URI.SignUp}>
          <Button size="sm" colorScheme="teal" variant="ghost">
            Sign Up
          </Button>
        </Link>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      </Stack>
    </VStack>
  );
};

export default SocialAndOptions;
