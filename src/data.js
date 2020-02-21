const menu = [
  { label: "Test", location: "/test" },
  { label: "Test 2", location: "/test2" },
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

export { menu, rooms, routines };
