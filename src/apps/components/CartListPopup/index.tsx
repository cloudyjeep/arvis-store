import {
  Box,
  Button,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const CartListPopup = (props: { show: boolean; data: any[] }): JSX.Element => {
  return (
    <Box
      display={props.show ? "flex" : "none"}
      position="fixed"
      zIndex={10}
      right={20}
      bg="white"
      boxShadow="2xl"
      p={3}
      borderWidth={1}
      borderRadius={2}
      minW={"300px"}
      minH={"200px"}
      flexDirection='column'
    >
        <Text>Item on cart</Text>
        <Table variant="simple" size="sm" style={{ flexGrow: 1 }}>
          <Tbody>
            {props.data.slice(0, 5).map((item, i) => (
              <Tr key={i}>
                <Td>
                  <Image src={item.imageUrl[0]} height={50} />
                </Td>
                <Td fontSize="md">{item.title}</Td>
                <Td isNumeric fontSize="lg">{`$${item.price}`}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justifyContent="space-between">
          <Text>{props.data.length} product</Text>
          <Button>More</Button>
        </Flex>
    </Box>
  );
};

export default CartListPopup;
