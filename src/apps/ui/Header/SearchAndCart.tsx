import * as React from "react";
import {
  Box,
  Text,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBoolean,
  Flex,
} from "@chakra-ui/react";
import { FaCartPlus, FaSearch, FaCheck } from "react-icons/fa";
import CartListPopup from "../../components/CartListPopup";
import { Link } from "react-router-dom";
import { URI } from "../Router";
import { useStoreCart } from "../../store/hook";

let timeOut: any;

const CartOnHeader = (): JSX.Element => {
  const [hover, h] = useBoolean();
  const onMouseEnter = () => (timeOut = setTimeout(h.on, 200));
  const onMouseLeave = () => (h.off(), clearTimeout(timeOut));

  const cart = useStoreCart();

  return (
    <Link to={URI.Cart} {...{ onMouseEnter, onMouseLeave }}>
      <Flex flexDirection="row" color="blackAlpha.700" alignItems="center">
        <FaCartPlus size="50px" />
        <Text color="GrayText" fontSize="30px" ml="3">
          {cart.length}
        </Text>
      </Flex>
      <CartListPopup show={hover} data={cart} />
    </Link>
  );
};

const SearchAndCart = (props: {}): JSX.Element => {
  return (
    <VStack px={4} flexDirection="row">
      <Link to={URI.Default}>
        <Text fontSize="40px" color="teal.700">
          Arvi<em>shop</em>
        </Text>
      </Link>
      <Box px={4} flex={1}>
        <InputGroup size="lg">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<FaSearch />}
          />
          <Input variant="filled" placeholder="Search item" />
          {/* <InputRightElement color="gray.500" children={<FaCheck />} /> */}
        </InputGroup>
      </Box>
      <CartOnHeader />
    </VStack>
  );
};

export default SearchAndCart;
