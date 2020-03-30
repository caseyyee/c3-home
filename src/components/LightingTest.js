import React, { useRef, useEffect } from "react";
import { Box, Flex, Button } from "rebass";
const CrLib = window.CrComLib;

export default () => {
  const logEl = useRef(null);

  const publishN = ({ type, id, value }) => {
    console.log("publishing", { type, id, value });
    CrLib.publishEvent(type, id, value);
  };

  useEffect(() => {
    CrLib.subscribeState("s", "35", value => {
      logEl.current.value += value + "\n";
    });
  }, []);

  return (
    <Box p="4">
      <Flex>
        <Box>
          <p>
            Off - n22
            <br />
            On - n21
            <br />
            Slider on change - n24
            <br />
            Slider receive state - n23
          </p>
        </Box>
        <Box>
          <Flex>
            <Box>
              <ch5-button shape="circle" sendEventOnClick="22">
                Off
              </ch5-button>
            </Box>
            <Box width="15rem">
              <ch5-slider
                class="lighting-slider"
                stretch="width"
                handleShape="circle"
                toolTipShowType="auto"
                sendEventOnChange="24"
                receiveStateValue="23"
                orientation="horizontal"
              />
            </Box>
            <Box>
              <ch5-button shape="circle" sendEventOnClick="21">
                On
              </ch5-button>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <hr />

      <p>
        Ramp up - n31, sends true on button down, false on button up.
        <br />
        Ramp down - n32, sends true on button down, false on button up.
      </p>

      <Flex>
        <Button
          onMouseDown={() => publishN({ type: "b", id: "31", value: true })}
          onMouseUp={() => publishN({ type: "b", id: "31", value: false })}
          onTouchStart={() => publishN({ type: "b", id: "31", value: true })}
          onTouchEnd={() => publishN({ type: "b", id: "31", value: false })}
          p="2rem"
          bg="darkgray"
          color="white"
          mb="1rem"
          mr="1rem"
        >
          Ramp lights up
        </Button>
        <Button
          onMouseDown={() => publishN({ type: "b", id: "32", value: true })}
          onMouseUp={() => publishN({ type: "b", id: "32", value: false })}
          onTouchStart={() => publishN({ type: "b", id: "32", value: true })}
          onTouchEnd={() => publishN({ type: "b", id: "32", value: false })}
          p="2rem"
          bg="darkgray"
          color="white"
          mb="1rem"
          mr="1rem"
        >
          Ramp lights down
        </Button>
      </Flex>

      <hr />

      <Flex>
        <Box>
          <p>Receives state value - n25</p>
        </Box>

        <Box width="15rem">
          <ch5-slider
            class="lighting-slider"
            stretch="width"
            handleShape="circle"
            toolTipShowType="auto"
            receiveStateValue="25"
            orientation="horizontal"
          ></ch5-slider>
        </Box>
      </Flex>

      <hr />

      <p>Send strings</p>

      <Flex>
        <Button
          onClick={() => {
            publishN({ type: "s", id: "25", value: "lights_on" });
          }}
          p="2rem"
          bg="darkgray"
          color="white"
          mb="1rem"
          mr="1rem"
        >
          s25 - lights_on
        </Button>
        <Button
          onClick={() => {
            publishN({ type: "s", id: "25", value: "lights_off" });
          }}
          p="2rem"
          bg="darkgray"
          color="white"
          mb="1rem"
          mr="1rem"
        >
          s25 - lights_off
        </Button>
      </Flex>

      <hr />

      <p>Receive s35</p>

      <p>
        <textarea ref={logEl} cols="40" rows="10"></textarea>
      </p>
    </Box>
  );
};
