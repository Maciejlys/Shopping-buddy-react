import React, { useState, useRef } from "react";
import { Flex } from "../Styled-Components/Flex";
import { InputStyles } from "../Styled-Components/InputStyles";
import { ItemType } from "./Items";
const { v4: uuidv4 } = require("uuid");

interface InputProps {
  addItem: (item: ItemType) => void;
}

export const Input: React.FC<InputProps> = ({ addItem }) => {
  const inputField = useRef(document.createElement("input"));
  const [item, setItem] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item === "") return;
    addItem({ name: item, id: uuidv4() });
    setItem("");
    inputField.current.focus();
  };

  return (
    <InputStyles>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex dir="row">
          <input
            maxLength={30}
            type="text"
            value={item}
            ref={inputField}
            placeholder="e.g. eggs"
            onChange={(e) => setItem(e.target.value)}
            autoFocus
          />
          <button type="submit">Add</button>
        </Flex>
      </form>
    </InputStyles>
  );
};
