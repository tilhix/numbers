import * as React from "react";
import { Heading, Text, Stack } from "@chakra-ui/react";
import { VALUE_MIN, VALUE_MAX } from "../App.consts";

export const Title = () => {
  return (
    <Stack spacing={3}>
      <Heading as="h1" size="2xl">
        Number to string
      </Heading>
      <Text>
        for positive numbers between {VALUE_MIN} and {VALUE_MAX}
      </Text>
    </Stack>
  );
};
