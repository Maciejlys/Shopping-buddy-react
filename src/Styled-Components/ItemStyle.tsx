import styled from "styled-components";

export const ItemStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70%;
  min-width: 10rem;
  background-color: #2e3642;
  border-radius: 2rem;
  box-shadow: 0 0 0.5rem gray;
  transition: box-shadow 0.3s ease-in-out;

  :hover {
    box-shadow: 0 0 0.8rem white;
  }
  p {
    min-width: 10rem;
    width: 80%;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  .svg {
    color: red;
  }
`;
