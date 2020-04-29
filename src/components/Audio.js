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

const initialState = [
  {
    id: 0,
    label: "Room 1",
    source: 0,
    checked: false,
    visible: true,
    selectable: true,
    value: parseInt(Math.random() * 100),
    volumeUp: 1,
    volumeDown: 2,
    volumeMute: 3,
  },
  {
    id: 1,
    label: "Room 2",
    source: 1,
    checked: false,
    visible: true,
    selectable: true,
    value: parseInt(Math.random() * 100),
    volumeUp: 4,
    volumeDown: 5,
    volumeMute: 6,
  },
  {
    id: 2,
    label: "Room 3",
    source: 2,
    checked: false,
    visible: true,
    selectable: true,
    value: parseInt(Math.random() * 100),
    volumeUp: 7,
    volumeDown: 8,
    volumeMute: 9,
  },
  {
    id: 3,
    label: "Room 4",
    source: 0,
    checked: false,
    visible: true,
    selectable: true,
    value: parseInt(Math.random() * 100),
    volumeUp: 10,
    volumeDown: 11,
    volumeMute: 12,
  },
  {
    id: 4,
    label: "Room 5",
    source: 0,
    checked: false,
    visible: true,
    selectable: false,
    value: parseInt(Math.random() * 100),
    volumeUp: 13,
    volumeDown: 14,
    volumeMute: 15,
  },
];

const MuteButton = ({ sendEventOnClick, receiveStateValue }) => {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    CrLib.subscribeState("b", receiveStateValue, (value) => {
      setMuted(value);
    });
  }, [receiveStateValue]);

  useEffect(() => {
    CrLib.publishEvent("b", sendEventOnClick, muted);
  }, [muted, sendEventOnClick]);

  return (
    <Button
      onClick={() => setMuted(!muted)}
      variantColor={muted ? "red" : "gray"}
    >
      {muted ? <MdVolumeOff /> : <MdVolumeUp />}
    </Button>
  );
};

const SliderGroup = ({ sendEventOnChange, receiveStateValue }) => {
  const [value, setValue] = useState(30);

  useEffect(() => {
    CrLib.subscribeState("n", receiveStateValue, (value) => setValue(value));
  }, [receiveStateValue]);

  useEffect(() => {
    console.log("publishing", sendEventOnChange, value);
    CrLib.publishEvent("n", sendEventOnChange, value);
  }, [value, sendEventOnChange]);

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
  range: 20,
  roomName: {
    first: 41,
    last: 60,
    type: "s",
  },
  sourceName: {
    first: 141,
    last: 160,
    type: "s",
  },
  roomVisible: {
    first: 201,
    last: 220,
    type: "b",
  },
  roomSelectable: {
    first: 231,
    last: 250,
    type: "b",
  },
  roomVolMute: {
    first: 261,
    last: 280,
    type: "b",
  },
  roomVolDown: {
    first: 281,
    last: 300,
    type: "b",
  },
  roomVolUp: {
    first: 301,
    last: 320,
    type: "b",
  },
  roomVolAbs: {
    first: 101,
    last: 120,
    type: "n",
  },
};

export default () => {
  const [rooms, setRooms] = useState(initialState);

  const setRoomById = (id, values) => {
    setRooms((prevState) => {
      prevState[id] = values;
      return prevState;
    });
  };

  useEffect(() => {
    // id: [crestron id]
    // label: "Room 1",
    // source: 0,
    // checked: false,
    // value: parseInt(Math.random() * 10),
    // room names
    // current sources
    // room visibility
    // room selectability
    // room names
    // for (let i = 0; i < config.range; i++) {
    //   const index = i + config.roomName.start;
    //   CrLib.subscribeState("s", index, (value) => {
    //     setRoomById(index, {
    //       label: value,
    //     });
    //   });
    // }
    // room source
    // todo: current source name? need list of all possibilities.
    // for (let i = 0; i < config.range; i++) {
    //   const index = i + config.sourceName.start;
    //   CrLib.subscribeState("s", index, (value) => {
    //     setRoomById(index, {
    //       source: value
    //     })
    //   });
    // }
    // room source visibility
    // for (let i = 0; i < config.range; i++) {
    //   const index = i + config.roomVisible.start;
    //   CrLib.subscribeState("b", index, (value) => {
    //     setRoomById(index, {
    //       visible: value,
    //     });
    //   });
    // }
    // room selectability
    // for (let i = 0; i < config.range; i++) {
    //   const index = i + config.roomSelectable.start;
    //   CrLib.subscribeState("b", index, (value) => {
    //     setRoomById(index, {
    //       selectable: value,
    //     });
    //   });
    // }
    // room volume
    // for (let i = 0; i < config.range; i++) {
    //   const index = i + config.roomVolAbs.start;
    //   CrLib.subscribeState("n", index, (value) => {
    //     const volumeUp = i + config.roomVolUp.start;
    //     const volumeDown = i + config.roomVolDown.start;
    //     const volumeMute = i + config.volumeMute.start;
    //     const volumeAbs = i + config.volumeAbs.start;
    //     setRoomById(index, {
    //       value,
    //       volumeUp,
    //       volumeDown,
    //       volumeMute,
    //       volumeAbs,
    //     });
    //   });
    // }
  }, []);

  const checkChanged = (index) => {
    setRooms((prevState) => {
      prevState[index].checked = !prevState[index].checked;
      return [...prevState];
    });
  };

  const onSourceChange = (index, selectedIndex) => {
    setRooms((prevState) => {
      prevState[index].source = selectedIndex;
      return [...prevState];
    });
  };

  const onMultiSourceChange = (e) => {
    const newSourceId = e.target.selectedIndex;

    setRooms((prevState) => {
      const newState = prevState.map((room) => {
        if (room.checked) {
          room.source = newSourceId;
        }
        return { ...room };
      });
      return [...newState];
    });
  };

  const checkedCount = rooms.filter((props) => props.checked).length;

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
                  onChange={(e) =>
                    onSourceChange(index, e.target.selectedIndex)
                  }
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
                  <MuteButton sendEventOnClick={21} receiveStateValue={22} />
                </Box>
                <Box>
                  <SliderGroup sendEventOnChange={21} receiveStateValue={22} />
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
