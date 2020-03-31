import React from "react";
import {
  ThemeProvider,
  CSSReset,
  theme,
  Box,
  ButtonGroup,
  Button,
  Flex
} from "@chakra-ui/core";
import { MemoryRouter as Router, Route, Link } from "react-router-dom";
import StressTest from "./components/StressTest";
import Test from "./components/Test";
import LightingTest from "./components/LightingTest";
import Floorplan from "./components/Floorplan";
import Room from "./components/Room";
import Container from "./components/Container";
import Routines from "./components/Routines";
import Audio from "./components/Audio";

const menu = [
  { label: "Test", location: "/test" },
  { label: "Test 2", location: "/test2" },
  { label: "Test 3", location: "/test3" },
  { label: "Global Audio", location: "/audio" },
  { label: "Room", location: "/room" },
  { label: "Routines", location: "/routines" },
  { label: "Lighting", location: "/floorplan/lights" },
  { label: "Blinds", location: "/floorplan/blinds" }
];

const Nav = () => (
  <Flex bg="lightgray" p="2rem">
    <ButtonGroup spacing={4}>
      {menu.map((item, index) => (
        <Button key={"nav" + index} size="lg" color="black">
          <Link to={item.location}>{item.label}</Link>
        </Button>
      ))}
    </ButtonGroup>
  </Flex>
);

const Home = () => (
  <Box p="2rem">
    <h2>C3 Home</h2>
  </Box>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Container>
        <Flex flexDirection="column" height="100%">
          <Router>
            <Box flex="1">
              <Route exact path="/" component={Home} />
              <Route path="/test" component={Test} />
              <Route path="/test2" component={LightingTest} />
              <Route path="/test3" component={StressTest} />
              <Route path="/audio" component={Audio} />
              <Route path="/room/:name?" component={Room} />
              <Route path="/routines" component={Routines} />
              <Route path="/floorplan/:widget" component={Floorplan} />
            </Box>
            <Nav />
          </Router>
        </Flex>
      </Container>
    </ThemeProvider>
  );
};

export default App;
