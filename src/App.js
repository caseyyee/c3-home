import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect
} from "react";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import { Box, Flex, Button, Text } from "rebass";
import Slider from "@material-ui/core/Slider";
import { FaLightbulb, FaWindowMaximize } from "react-icons/fa";
import { menu, rooms, routines } from "./data";

const sidebarWidth = 300;

const CrLib = window.CrComLib;

const Routines = () => (
  <Flex p="2rem" width={sidebarWidth} flexDirection="column">
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

const Nav = () => (
  <Flex bg="lightgray" p="2rem">
    {menu.map((item, index) => (
      <Button key={"nav" + index} mr="1rem" p="2rem" color="black">
        <Link to={item.location}>{item.label}</Link>
      </Button>
    ))}
  </Flex>
);

const Widget = ({ label, type }) => (
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

const Room = ({ match }) => {
  const { room, setRoom } = useContext(Context);
  const [open, setOpen] = useState(false);
  const roomName = match.params.name || room || rooms[0].name;
  const currentRoom = rooms.filter(room => room.name === roomName)[0];
  const transform = open ? "none" : `translateX(-${sidebarWidth}px)`;
  const transition = "all 0.2s";

  const onRoomClick = ({ name }) => {
    setRoom(name);
    setOpen(false);
  };

  return (
    <Flex css={{ transform, transition }}>
      <Flex
        flexDirection="column"
        p="2rem"
        width={sidebarWidth + "px"}
        bg="#efefef"
      >
        {rooms.map((room, index) => (
          <Button bg="darkgray" mb="1rem" p="0.5rem" key={"room" + index}>
            <Link onClick={() => onRoomClick(room)} to={"/room/" + room.name}>
              {room.label}
            </Link>
          </Button>
        ))}
      </Flex>

      <Box flex="1" p="2rem">
        <Button bg="darkgray" onClick={() => setOpen(!open)}>
          Rooms
        </Button>

        <h2>{currentRoom.label}</h2>

        <Flex>
          <Widget label="lights" type="slider" />
          <Widget label="blinds" type="slider" />
          <Widget label="music" type="slider" />
        </Flex>
      </Box>
    </Flex>
  );
};

const widgets = [
  {
    name: "lights",
    label: "Lights",
    type: "slider"
  },
  { name: "blinds", label: "Window Shades", type: "slider" }
];

const Floorplan = ({ match }) => {
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

const Context = createContext();

const Container = ({ children }) => {
  const [room, setRoom] = useState(undefined);
  return (
    <Context.Provider value={{ room, setRoom }}>{children}</Context.Provider>
  );
};

const LightingTest = () => {
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

const Test = () => {
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

const App = () => {
  return (
    <Container>
      <Flex flexDirection="column" height="100%">
        <Router>
          <Box flex="1">
            <Route path="/test" component={Test} />
            <Route path="/test2" component={LightingTest} />
            <Route path="/room/:name?" component={Room} />
            <Route path="/routines" component={Routines} />
            <Route path="/floorplan/:widget" component={Floorplan} />
          </Box>
          <Nav />
        </Router>
      </Flex>
    </Container>
  );
};

export default App;
