import React from "react";
import { Box, Checkbox, CheckboxGroup } from "@chakra-ui/core";

export default () => (
  <Box p="2rem">
    <h2>Global Audio</h2>

    <CheckboxGroup>
      <Checkbox value="room-1">Room 1</Checkbox>
      <Checkbox value="room-2">Room 2</Checkbox>
      <Checkbox value="room-3">Room 3</Checkbox>
    </CheckboxGroup>
  </Box>
);
