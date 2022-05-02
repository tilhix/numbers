import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ValueProvider } from "./ValueProvider";
import { Input } from "./components";
import { Output } from "./components";
import { Title } from "./components";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Title />
          <ValueProvider>
            <Input />
            <Output />
          </ValueProvider>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
