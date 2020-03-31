import React, { useState } from "react";
import {
  Heading,
  Box,
  Checkbox,
  MenuList,
  MenuItem,
  Flex,
  Menu,
  Button,
  MenuButton,
  Text
} from "@chakra-ui/core";

export default () => {
  const [rooms, setRooms] = useState([
    { label: "Room 1", checked: false },
    { label: "Room 2", checked: false },
    { label: "Room 3", checked: false },
    { label: "Room 4", checked: false }
  ]);

  const checkChanged = index => {
    setRooms(prevState => {
      prevState[index].checked = !prevState[index].checked;
      return [...prevState];
    });
  };

  const checkedCount = rooms.filter(props => props.checked).length;

  return (
    <Box p="2rem">
      <Heading>Global Audio</Heading>

      <form>
        {rooms.map((room, index) => (
          <Flex
            key={`room-${index}`}
            style={{ borderBottom: "1px solid lightgray" }}
            p="1rem"
          >
            <Checkbox
              value="room-1"
              checked={rooms.checked}
              onChange={() => checkChanged(index)}
            />
            <Flex flexDirection="row">
              <Text width="10rem" p="10px" mx="2rem">
                {room.label}
              </Text>
              <Menu mx="2rem">
                <MenuButton as={Button} rightIcon="chevron-down">
                  Select Source
                </MenuButton>
                <MenuList>
                  <MenuItem>Source 1</MenuItem>
                  <MenuItem>Source 2</MenuItem>
                  <MenuItem>Source 3</MenuItem>
                </MenuList>
                <Flex>
                  <Box mx="2rem">
                    <ch5-button label="Mute" sendEventOnClick="22" />
                  </Box>
                  <Box mr="1rem">
                    <ch5-button label="Off" sendEventOnClick="22" />
                  </Box>
                  <Box mr="1rem">
                    <ch5-slider
                      handleShape="circle"
                      sendEventOnChange="24"
                      receiveStateValue="23"
                    />
                  </Box>
                  <Box>
                    <ch5-button label="On" sendEventOnClick="21" />
                  </Box>
                </Flex>
              </Menu>
            </Flex>
          </Flex>
        ))}

        {checkedCount > 0 && (
          <Flex
            style={{ borderBottom: "1px solid lightgray" }}
            background="lightgray"
            mt="4rem"
            p="1rem"
          >
            <Flex flexDirection="row">
              <Text p="10px" mx="2rem" width="11rem">
                {checkedCount} rooms selected.
              </Text>
              <Menu mx="2rem">
                <MenuButton as={Button} rightIcon="chevron-down">
                  Select Source
                </MenuButton>
                <MenuList>
                  <MenuItem>Source 1</MenuItem>
                  <MenuItem>Source 2</MenuItem>
                  <MenuItem>Source 3</MenuItem>
                </MenuList>
                <Flex>
                  <Box mx="2rem">
                    <ch5-button label="Mute" sendEventOnClick="22" />
                  </Box>
                  <Box mr="1rem">
                    <ch5-button label="Off" sendEventOnClick="22" />
                  </Box>
                  <Box mr="1rem">
                    <ch5-slider
                      handleShape="circle"
                      sendEventOnChange="24"
                      receiveStateValue="23"
                    />
                  </Box>
                  <Box>
                    <ch5-button label="On" sendEventOnClick="21" />
                  </Box>
                </Flex>
              </Menu>
            </Flex>
          </Flex>
        )}
      </form>
    </Box>
  );
};
