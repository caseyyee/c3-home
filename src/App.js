import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, Flex, Button, Text } from "rebass";

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
      <Button key={"routine" + index} bg="darkgray" color="white" mb="1rem">
        {routine.label}
      </Button>
    ))}
  </Flex>
);

const Nav = () => (
  <Flex bg="lightgray" p="2rem">
    {menu.map((item, index) => (
      <Button key={"nav" + index} mr="1rem" color="black">
        <Link to={item.location}>{item.label}</Link>
      </Button>
    ))}
  </Flex>
);

const Widget = ({ label }) => (
  <Box height="100%" width="20rem" mr="2rem" css={{ border: "1px solid gray" }}>
    {label}
  </Box>
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
          <Button bg="darkgray" mb="1rem" key={"room" + index}>
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
          <Widget label="Lights" />
          <Widget label="Blinds" />
          <Widget label="Music" />
        </Flex>
      </Box>
    </Flex>
  );
};
const Floorplan = ({ match }) => {
  console.log("->", match);
  return (
    <Flex p="2rem">
      <Box flex="1">
        <h2>Floorplan</h2>
      </Box>
      <Box>
        <Widget label={match.params.widget} />
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
