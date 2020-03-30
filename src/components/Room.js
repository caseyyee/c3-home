import React, { useState, useContext } from "react";
import { Box, Flex, Button, Link } from "rebass";
import Widget from "./Widget";
import { rooms } from "../data";
import { Context } from "./Container";
import settings from "../settings";

export default ({ match }) => {
  const { room, setRoom } = useContext(Context);
  const [open, setOpen] = useState(false);
  const roomName = match.params.name || room || rooms[0].name;
  const currentRoom = rooms.filter(room => room.name === roomName)[0];
  const transform = open ? "none" : `translateX(-${settings.sidebarWidth}px)`;
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
        width={settings.sidebarWidth + "px"}
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
