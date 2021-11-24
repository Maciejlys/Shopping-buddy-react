import styled from "styled-components";
import { StyleProps } from "./AlertStyle";

export const ItemsStyle = styled.div`
  margin: 2rem 0;
  div {
    animation: ${({ action }: StyleProps) =>
        action === "add" ? "fadeOut" : "fadeIn"}
      1s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
