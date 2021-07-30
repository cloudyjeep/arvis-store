import * as React from "react";
import { Box, Container } from "@chakra-ui/react";

import SocialAndOptions from "./SocialAndOptions";
import SearchAndCart from "./SearchAndCart";
import { useStoreUser } from "../../store/hook";

interface Props {
  
}

const Header = (props: Props): JSX.Element => {
  const { hasLogin } = useStoreUser();

  return (
    <Box pb={8} pt={2}>
      <Container maxW="container.xl" p={0} textAlign="center" fontSize="xl">
        <SocialAndOptions hasLogin={hasLogin} />
        <SearchAndCart />
      </Container>
    </Box>
  );
};

export default Header;
