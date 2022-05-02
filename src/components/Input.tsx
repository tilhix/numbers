import * as React from "react";
import {
  HStack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ValueContext } from "../ValueProvider";
import { VALUE_MIN, VALUE_MAX } from "../App.consts";

export const Input = () => {
  const { value, setValue } = React.useContext(ValueContext);

  function handleInputChange(
    valueAsString: string,
    valueAsNumber: number
  ): void {
    if (valueAsString === "") {
      setValue(undefined);
      return;
    }
    if (valueAsNumber > VALUE_MAX) {
      setValue(VALUE_MAX);
      return;
    }
    if (valueAsNumber < VALUE_MIN) {
      setValue(VALUE_MIN);
      return;
    }

    setValue(valueAsNumber);
  }

  function handleButtonClick(): void {
    const randomInteger = Math.floor(Math.random() * VALUE_MAX) + VALUE_MIN;
    setValue(randomInteger);
  }

  return (
    <HStack>
      <NumberInput
        step={5}
        value={value !== undefined ? value : ""}
        min={VALUE_MIN}
        max={VALUE_MAX}
        onChange={handleInputChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button onClick={handleButtonClick}>Random</Button>
    </HStack>
  );
};
