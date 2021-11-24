import styled from "styled-components";

export const InputStyles = styled.div`
  input {
    width: 50vw;
    max-width: 70%;
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 40px;
    padding: 6px 16px;
    position: relative;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
  }
  input:focus {
    outline: none;
  }
  /* CSS */
  button {
    border-radius: 0 0.5rem 0.5rem 0;
    appearance: none;
    background-color: #2ea44f;
    border: none;
    box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 40px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
  }

  button:focus:not(:focus-visible):not(.focus-visible) {
    box-shadow: none;
    outline: none;
  }

  button:hover {
    background-color: #2c974b;
  }

  button:focus {
    box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
    outline: none;
  }

  button:disabled {
    background-color: #94d3a2;
    border-color: rgba(27, 31, 35, 0.1);
    color: rgba(255, 255, 255, 0.8);
    cursor: default;
  }

  button:active {
    background-color: #298e46;
    box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
  }
`;
