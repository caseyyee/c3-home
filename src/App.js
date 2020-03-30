import React from "react";
import { Box, Button, Flex } from "rebass";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import StressTest from "./components/StressTest";
import Test from "./components/Test";
import LightingTest from "./components/LightingTest";
import Floorplan from "./components/Floorplan";
import Room from "./components/Room";
import Container from "./components/Container";
import Routines from "./components/Routines";

const menu = [
  { label: "Test", location: "/test" },
  { label: "Test 2", location: "/test2" },
  { label: "Test 3", location: "/test3" },
  { label: "Room", location: "/room" },
  { label: "Routines", location: "/routines" },
  { label: "Lighting", location: "/floorplan/lights" },
  { label: "Blinds", location: "/floorplan/blinds" }
];

const Nav = () => (
  <Flex bg="lightgray" p="2rem">
    {menu.map((item, index) => (
      <Button key={"nav" + index} mr="1rem" p="2rem" color="black">
        <Link to={item.location}>{item.label}</Link>
      </Button>
    ))}
  </Flex>
);

const Home = () => (
  <Box p="2rem">
    <h2>C3 Home</h2>
  </Box>
);

const App = () => {
  return (
    <Container>
      <Flex flexDirection="column" height="100%">
        <Router>
          <Box flex="1">
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
            <Route path="/test2" component={LightingTest} />
            <Route path="/test3" component={StressTest} />
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
