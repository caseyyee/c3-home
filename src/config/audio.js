export default {
  range: 5,
  roomName: {
    first: 41,
    type: "s",
    subscribe: true,
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
    publish: true,
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
    publish: true,
    subscribe: true,
  },
};
