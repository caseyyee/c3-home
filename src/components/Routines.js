import React from "react";
import { routines } from "../data";
import settings from "../settings";
import { Flex, Button } from "rebass";

export default () => (
  <Flex p="2rem" width={settings.sidebarWidth} flexDirection="column">
    <h2>Routines</h2>
    {routines.map((routine, index) => (
      <Button
        key={"routine" + index}
        p="2rem"
        bg="darkgray"
        color="white"
        mb="1rem"
      >
        {routine.label}
      </Button>
    ))}
  </Flex>
);
