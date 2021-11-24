import React, { useEffect } from "react";
import { AlertStyle } from "../Styled-Components/AlertStyle";
import { Flex } from "../Styled-Components/Flex";

export interface AlertProps {
  act: Action;
  setAction: (action: Action) => void;
}

export interface Action {
  action: string;
  show: boolean;
}

const alertTime = 2480;

export const Alert: React.FC<AlertProps> = ({ act, setAction }) => {
  const { action, show } = act;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAction({ action: "", show: false });
    }, alertTime);
    return () => clearTimeout(timeout);
  }, [show, setAction]);

  if (show) {
    if (action === "add") {
      return (
        <Flex>
          <AlertStyle action={action}>
            <h5>Item added to the list!</h5>
          </AlertStyle>
        </Flex>
      );
    } else if (action === "remove") {
      return (
        <Flex>
          <AlertStyle action={action}>
            <h5>Item removed!</h5>
          </AlertStyle>
        </Flex>
      );
    }
  }
  return <AlertStyle></AlertStyle>;
};
