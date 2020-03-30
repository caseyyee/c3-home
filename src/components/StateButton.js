import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Button } from "rebass";
const CrLib = window.CrComLib;

const ButtonStyled = styled(Button)`
  :active {
    background: yellow;
  }
`;

export default ({ sendEvent, receiveState, children, ...props }) => {
  const eventType = "b";
  const [isOn, setState] = useState(false);
  const button = useRef(null);

  const publishN = (type, id, value) => {
    console.log("publishing", { type, id, value });
    CrLib.publishEvent(type, id, value);
  };

  useEffect(() => {
    console.log("listening for", eventType, receiveState);
    CrLib.subscribeState(eventType, receiveState, value => {
      setState(value);
    });
  }, [receiveState, eventType]);

  return (
    <ButtonStyled
      p="2rem"
      bg={isOn ? "orange" : "darkgray"}
      color="white"
      mb="1rem"
      mr="1rem"
      ref={button}
      onMouseDown={() => publishN(eventType, sendEvent, true)}
      onMouseUp={() => publishN(eventType, sendEvent, false)}
      onTouchStart={() => publishN(eventType, sendEvent, true)}
      onTouchEnd={() => publishN(eventType, sendEvent, false)}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};
