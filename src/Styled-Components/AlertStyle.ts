import styled from "styled-components";

export interface StyleProps {
  action?: string;
}

export const AlertStyle = styled.div`
  min-height: 30px;
  height: 30px;
  border-radius: 2rem;
  color: ${({ action }: StyleProps) =>
    action === "add" ? "green" : action === "remove" ? "red" : ""};
  width: 50vw;
  max-width: 70%;
  min-width: 40vw;
  margin: 1rem 0 0.5rem;
  animation: fade 2.5s linear;
  h5 {
    font-style: italic;
    text-align: center;
    margin: auto;
    line-height: 30px;
    font-size: 1.2rem;
  }

  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
  }
`;
