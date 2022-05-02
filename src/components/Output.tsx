import * as React from "react";
import { Text } from "@chakra-ui/react";
import { ValueContext } from "../ValueProvider";
import { integerToWords } from "../functions/numbers";

export const Output = () => {
  const { value } = React.useContext(ValueContext);
  const text = typeof value === "number" ? integerToWords(value) : "";
  return (
    <Text lineHeight="1.5em" minHeight="1.5em">
      {text}
    </Text>
  );
};
