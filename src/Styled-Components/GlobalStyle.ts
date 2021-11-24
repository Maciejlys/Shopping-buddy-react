import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #010409;
  color: #fff;
}

body {
    background: linear-gradient(-45deg, #010409,#010409,#2c3e50, #2c3e50);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
}


@keyframes gradient {
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
