import styled from "styled-components";

export const MenuStyle = styled.main`
  width: 90%;
  max-width: 800px;
  border: 1px black solid;
  margin-top: 2rem;
  background: linear-gradient(-45deg, #010409, #010409, #2c3e50, #2c3e50);
  background-size: 400% 400%;
  border: none;
  animation: anim 20s ease infinite;
  border-radius: 5%;
  min-height: 40rem;
  box-shadow: 0 0 0.5rem gray;
  transition: box-shadow 0.3s ease-in-out;

  :hover {
    box-shadow: 0 0 0.8rem white;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes anim {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
