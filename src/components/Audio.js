import React, { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Checkbox,
  Flex,
  Text,
  Select,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";

import { MdVolumeDown, MdVolumeOff, MdVolumeUp } from "react-icons/md";

const CrLib = window.CrComLib;

const sources = ["Source 1", "Source 2", "Source 3"];

const MuteButton = ({ muted, ...props }) => (
  <Button variantColor={muted ? "red" : "gray"} {...props}>
    {muted ? <MdVolumeOff /> : <MdVolumeUp />}
  </Button>
);

const SliderGroup = () => {
  const [value, setValue] = useState(30);

  // useEffect(() => {
  //   CrLib.subscribeState("n", receiveStateValue, (value) => setValue(value));
  // }, [receiveStateValue]);

  // useEffect(() => {
  //   console.log("publishing", sendEventOnChange, value);
  //   CrLib.publishEvent("n", sendEventOnChange, value);
  // }, [value, sendEventOnChange]);

  return (
    <Flex>
      <Box mr="1rem">
        <Button onClick={() => setValue((prev) => prev - 10)}>
          <MdVolumeDown />
        </Button>
      </Box>
      <Box mr="1rem" width="200px">
        <Slider value={value} onChange={setValue}>
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb />
        </Slider>
      </Box>
      <Box>
        <Button onClick={() => setValue((prev) => prev + 10)}>
          <MdVolumeUp />
        </Button>
      </Box>
    </Flex>
  );
};

const config = {
  range: 5,
  roomName: {
    first: 41,
    type: "s",
  },
  sourceName: {
    first: 141,
    type: "s",
  },
  roomVisible: {
    first: 201,
    type: "b",
  },
  roomSelectable: {
    first: 231,
    type: "b",
  },
  roomVolMute: {
    first: 261,
    type: "b",
  },
  roomVolDown: {
    first: 281,
    type: "b",
  },
  roomVolUp: {
    first: 301,
    type: "b",
  },
  roomVolAbs: {
    first: 101,
    type: "n",
  },
};

export default () => {
  const [rooms, setRooms] = useState({});

  const setRoomById = (id, values) => {
    const diff = Object.keys(values).filter(
      (key) => rooms[id] && rooms[id][key] !== values[key]
    );

    diff.map((key) => {
      if (key === "volumeMute") {
        // todo: send to crlib
        console.log(
          parseInt(id) + config.roomVolMute.first,
          config.roomVolMute.type,
          key,
          values[key]
        );
      }
    });

    setRooms((prevState) => {
      prevState[id] = {
        ...prevState[id],
        ...values,
      };
      return { ...prevState };
    });
  };

  useEffect(() => {
    for (let i = 0; i < config.range; i++) {
      // todo: this will be done by crlib subscribe
      setRoomById(i, {
        label: "Room " + i,
        source: 0,
        checked: false,
        visible: true,
        selectable: true,
        volumeUp: i + config.roomVolUp.first,
        volumeDown: i + config.roomVolDown.first,
        volumeMute: false,
      });
    }
  }, []);

  const checkChanged = (key) => {
    setRooms((prevState) => {
      prevState[key].checked = !prevState[key].checked;
      return { ...prevState };
    });
  };

  const onSourceChange = (key, selectedIndex) => {
    setRooms((prevState) => {
      prevState[key].source = selectedIndex;
      return { ...prevState };
    });
  };

  const onMultiSourceChange = (e) => {
    const newSourceId = e.target.selectedIndex;

    setRooms((prevState) => {
      Object.keys(prevState).map((key) => {
        if (prevState[key].checked) {
          prevState[key].source = newSourceId;
        }
      });
      return { ...prevState };
    });
  };

  const checkedCount = Object.keys(rooms).filter((key) => rooms[key].checked)
    .length;

  return (
    <Box p="2rem">
      <Heading>Global Audio</Heading>

      <form>
        {Object.keys(rooms).map((key) => (
          <Flex
            key={`room-${key}`}
            style={{ borderBottom: "1px solid lightgray" }}
            p="1rem"
          >
            <Checkbox
              checked={rooms[key].checked}
              onChange={() => checkChanged(key)}
            />
            <Flex flexDirection="row">
              <Text width="10rem" p="10px" mx="2rem">
                {rooms[key].label}
              </Text>
              <Box mx="2rem">
                <Select
                  placeholder="Source"
                  onChange={(e) => onSourceChange(key, e.target.selectedIndex)}
                  value={rooms[key].source - 1}
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
                  <MuteButton
                    muted={rooms[key].volumeMute}
                    onClick={() =>
                      setRoomById(key, { volumeMute: !rooms[key].volumeMute })
                    }
                  />
                </Box>
                <Box>
                  <SliderGroup />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        ))}

        {checkedCount > 0 && (
          <Flex style={{ border: "1px solid lightgray" }} mt="4rem" p="1rem">
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
                  <Button mr="1rem">
                    <MdVolumeOff />
                  </Button>
                  <Button mr="1rem">
                    <MdVolumeDown />
                  </Button>
                  <Button>
                    <MdVolumeUp />
                  </Button>
                </Box>
                <Box></Box>
              </Flex>
            </Flex>
          </Flex>
        )}
      </form>
    </Box>
  );
};
