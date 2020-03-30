import React, { useRef, useEffect } from "react";
import { Box, Flex, Button } from "rebass";
const CrLib = window.CrComLib;

export default () => {
  const logEl = useRef(null);
  const publishN = ({ type, id, value }) => {
    CrLib.publishEvent(type, id, value);
    logEl.current.value += `Publish ${type}, ${id}, ${value}\n`;
  };

  useEffect(() => {
    CrLib.subscribeState("n", "24", value => {
      logEl.current.value += "Received state n, 24, " + value + "\n";
    });

    CrLib.subscribeState("b", "25", value => {
      logEl.current.value += "Received state b, 25, " + value + "\n";
    });

    CrLib.subscribeState("s", "26", value => {
      logEl.current.value += "Received state s, 26, " + value + "\n";
    });
  }, []);

  return (
    <Box p="2rem">
      <Box mb="2rem">
        CH-5 web component button
        <br />
        <ch5-button sendEventOnClick="22" label="Send event 22" />
      </Box>

      <Box mb="2rem">
        CH-5 web component slider
        <Box my="2">
          b27: off
          <br />
          s28: change
          <br />
          s28: receive change state
          <br />
          b29: on
          <br />
        </Box>
        <Flex>
          <ch5-button shape="circle" sendEventOnClick="27">
            Off
          </ch5-button>
          <ch5-slider
            class="lighting-slider"
            stretch="width"
            handleShape="circle"
            toolTipShowType="auto"
            sendEventOnChange="28"
            receiveStateValue="28"
            orientation="horizontal"
          ></ch5-slider>
          <ch5-button shape="circle" sendEventOnClick="29">
            On
          </ch5-button>
        </Flex>
      </Box>

      <Box>
        React button
        <br />
        <Button
          onClick={() => {
            publishN({ type: "n", id: "24", value: 1337 });
          }}
          p="2rem"
          bg="darkgray"
          color="white"
          mb="1rem"
          mr="1rem"
        >
          publish n, 24, 1337
        </Button>
        <Button
          onClick={() => {
            publishN({ type: "b", id: "25", value: true });
          }}
          p="2rem"
          bg="darkgray"
          color="white"
          mb="1rem"
          mr="1rem"
        >
          publish b, 25, true
        </Button>
        <Button
          onClick={() => {
            publishN({ type: "s", id: "26", value: "Test String" });
          }}
          p="2rem"
          bg="darkgray"
          color="white"
          mb="1rem"
        >
          publish s, 26, "Test String"
        </Button>
      </Box>

      <Box>
        <textarea ref={logEl} cols="40" rows="10"></textarea>
      </Box>
    </Box>
  );
};
