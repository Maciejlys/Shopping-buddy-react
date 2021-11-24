import React from "react";
import { ItemStyle } from "../Styled-Components/ItemStyle";
import { ItemType } from "./Items";
import { BsFillTrashFill } from "react-icons/bs";

interface ItemProps extends ItemType {
  removeItem: (id: string) => void;
}

export const Item: React.FC<ItemProps> = ({ id, name, removeItem }) => {
  return (
    <ItemStyle>
      <p>{name}</p>
      <button onClick={() => removeItem(id)}>
        <BsFillTrashFill className="svg" />
      </button>
    </ItemStyle>
  );
};
