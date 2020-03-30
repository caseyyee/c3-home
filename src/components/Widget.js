import React from "react";
import { Flex, Box, Text } from "rebass";
import Slider from "@material-ui/core/Slider";

export default ({ label, type }) => (
  <Flex
    flexDirection="column"
    height="20rem"
    width="8rem"
    mr="2rem"
    p="2rem"
    css={{ border: "1px solid lightgray", borderRadius: "10px" }}
  >
    <Text textAlign="center" pb="2rem">
      {label}
    </Text>
    <Box flex="1" textAlign="center">
      {type === "slider" && <Slider orientation="vertical" defaultValue={30} />}
    </Box>
  </Flex>
);
