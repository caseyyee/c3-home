import React, { useState } from "react";
import { Heading, Box, Checkbox, Flex, Text, Select } from "@chakra-ui/core";

const sources = ["Source 1", "Source 2", "Source 3"];

const initialState = [
  {
    label: "Room 1",
    source: 0,
    checked: false,
    value: parseInt(Math.random() * 10)
  },
  {
    label: "Room 2",
    source: 1,
    checked: false,
    value: parseInt(Math.random() * 10)
  },
  {
    label: "Room 3",
    source: 2,
    checked: false,
    value: parseInt(Math.random() * 10)
  },
  {
    label: "Room 4",
    source: 0,
    checked: false,
    value: parseInt(Math.random() * 10)
  },
  {
    label: "Room 5",
    source: 0,
    checked: false,
    value: parseInt(Math.random() * 10)
  }
];

export default () => {
  const [rooms, setRooms] = useState(initialState);

  const checkChanged = index => {
    setRooms(prevState => {
      prevState[index].checked = !prevState[index].checked;
      return [...prevState];
    });
  };

  const onSourceChange = (index, selectedIndex) => {
    setRooms(prevState => {
      prevState[index].source = selectedIndex;
      return [...prevState];
    });
  };

  const onMultiSourceChange = e => {
    const newSourceId = e.target.selectedIndex;

    setRooms(prevState => {
      const newState = prevState.map(room => {
        if (room.checked) {
          room.source = newSourceId;
        }
        return { ...room };
      });
      return [...newState];
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
              checked={rooms.checked}
              onChange={() => checkChanged(index)}
            />
            <Flex flexDirection="row">
              <Text width="10rem" p="10px" mx="2rem">
                {room.label}
              </Text>
              <Box mx="2rem">
                <Select
                  placeholder="Source"
                  onChange={e => onSourceChange(index, e.target.selectedIndex)}
                  value={room.source - 1}
                >
                  {sources.map((source, index) => {
                    return (
                      <option key={`source-${index}`} value={index}>
                        {source}
                      </option>
                    );
                  })}
                </Select>
              </Box>
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
                    value={room.value}
                    min="0"
                    max="10"
                  />
                </Box>
                <Box>
                  <ch5-button label="On" sendEventOnClick="21" />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        ))}

        {checkedCount > 0 && (
          <Flex
            style={{ borderBottom: "1px solid lightgray" }}
            background="#efefef"
            mt="4rem"
            p="1rem"
          >
            <Flex flexDirection="row">
              <Text p="10px" mx="2rem" width="11rem">
                {checkedCount} rooms selected.
              </Text>

              <Box>
                <Select placeholder="Source" onChange={onMultiSourceChange}>
                  {sources.map((source, index) => {
                    return (
                      <option key={`source-${index}`} value={index}>
                        {source}
                      </option>
                    );
                  })}
                </Select>
              </Box>
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
            </Flex>
          </Flex>
        )}
      </form>
    </Box>
  );
};
