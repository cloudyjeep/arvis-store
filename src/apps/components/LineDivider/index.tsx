import { Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const LineDivider = (props: { text?: string; space?: number }): JSX.Element => (
  <Flex my={props.space || 5} alignItems="center">
    <Divider />
    <Text opacity={0.15} pt={-2} mx={2.5} fontSize="sm">
      {props.text || "OR"}
    </Text>
    <Divider />
  </Flex>
);

export default LineDivider
