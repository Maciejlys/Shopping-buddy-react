import React from "react";
import { Flex } from "../Styled-Components/Flex";
import { TitleStyle } from "../Styled-Components/TitleStyle";

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Flex>
      <TitleStyle>{title}</TitleStyle>
    </Flex>
  );
};
