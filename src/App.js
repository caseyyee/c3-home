import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, Flex, Button, Text } from "rebass";
import Slider from "@material-ui/core/Slider";
import { FaLightbulb, FaWindowMaximize } from "react-icons/fa";

const sidebarWidth = 300;

const menu = [
  { label: "Room", location: "/room" },
  { label: "Routines", location: "/routines" },
  { label: "Lighting", location: "/floorplan/lights" },
  { label: "Blinds", location: "/floorplan/blinds" }
];

const rooms = [
  {
    label: "Master Bedroom",
    name: "master",
    widgets: ["Lights", "Blinds", "HVAC"]
  },
  {
    label: "Childrens Bedroom",
    name: "children",
    widgets: ["Lights", "Blinds", "HVAC"]
  },
  {
    label: "Guest Bedroom",
    name: "guest",
    widgets: ["Lights", "Blinds", "HVAC"]
  },
  {
    label: "Kitchen",
    name: "kitchen",
    widgets: ["Lights", "Blinds", "HVAC"]
  },
  {
    label: "Library",
    name: "library",
    widgets: ["Lights", "Blinds", "HVAC"]
  },
  {
    label: "Pool",
    name: "pool",
    widgets: ["Lights", "Blinds", "HVAC"]
  }
];

const routines = [{ label: "Away" }, { label: "Bedtime" }];

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
    height="30rem"
    width="10rem"
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
      <Flex flexDirection="column" p="2rem" width={sidebarWidth + "px"}>
        {rooms.map((room, index) => (
          <Button bg="darkgray" mb="1rem" p="2rem" key={"room" + index}>
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

        <Flex height="100%">
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
  const useWidget = widgets.filter(
    widget => widget.name === match.params.widget
  )[0];

  const numCords = 4;

  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

  const cords = [];
  for (let i = 0; i < numCords; i++) {
    cords.push({
      top: getRandomArbitrary(0, 400),
      left: getRandomArbitrary(0, 400)
    });
  }

  return (
    <Flex p="2rem">
      <Box flex="1">
        <h2>{useWidget.label}</h2>

        <Box
          bg="lightgray"
          width="30rem"
          height="30rem"
          css={{ position: "relative" }}
        >
          {cords.map(cord => (
            <Box
              css={{
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

const App = () => {
  return (
    <Container>
      <Flex flexDirection="column" height="100%">
        <Router>
          <Box flex="1">
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
