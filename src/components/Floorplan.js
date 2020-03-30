import React from "react";
import { Flex, Box } from "rebass";
import { FaLightbulb, FaWindowMaximize } from "react-icons/fa";
import Widget from "./Widget";

const widgets = [
  {
    name: "lights",
    label: "Lights",
    type: "slider"
  },
  { name: "blinds", label: "Window Shades", type: "slider" }
];

export default ({ match }) => {
  const useWidget = widgets
    .filter(widget => widget.name === match.params.widget)
    .shift();

  // arbitrary floorplan
  const numCords = 4;
  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
  const cords = [];
  for (let i = 0; i < numCords; i++) {
    cords.push({
      top: getRandomArbitrary(0, 200),
      left: getRandomArbitrary(0, 400)
    });
  }

  return (
    <Flex p="2rem">
      <Box flex="1">
        <h2>{useWidget.label}</h2>

        <Box
          bg="#efefef"
          width="30rem"
          height="20rem"
          css={{ position: "relative" }}
        >
          {cords.map(cord => (
            <Box
              key={`cords-${cord.top}-${cord.left}`}
              sx={{
                position: "absolute",
                top: `${cord.top}px`,
                left: `${cord.left}px`
              }}
            >
              {useWidget.name === "lights" && <FaLightbulb />}
              {useWidget.name === "blinds" && <FaWindowMaximize />}
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Widget label={useWidget.label} type={useWidget.type} />
      </Box>
    </Flex>
  );
};
