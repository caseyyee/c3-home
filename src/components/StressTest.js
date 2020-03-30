import React from "react";
import { Box, Flex } from "rebass";
import StateButton from "./StateButton";

export default () => {
  let slider = [];
  const sliders = () => {
    for (let i = 31; i < 41; i++) {
      slider.push(
        <Flex key={`slider-${i}`} flexDirection="column">
          <Box>{i}</Box>
          <Box>
            <ch5-slider
              class="lighting-slider"
              stretch="width"
              handleShape="circle"
              toolTipShowType="auto"
              sendEventOnChange={i}
              receiveStateValue={i}
              orientation="horizontal"
              style={{ padding: 0 }}
            />
          </Box>
        </Flex>
      );
    }
    return slider;
  };
  return (
    <Box p="4">
      <p>Stress test page</p>

      <StateButton sendEvent={20} receiveState={20}>
        b20 Boolean state Button
      </StateButton>

      {sliders()}
    </Box>
  );
};
