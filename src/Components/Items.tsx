import React from "react";
import { Flex } from "../Styled-Components/Flex";
import { ItemsStyle } from "../Styled-Components/ItemsStyle";
import { Item } from "./Item";

interface ItemsProps {
  items: ItemType[];
  removeItem: (id: string) => void;
  action: string;
}

export interface ItemType {
  id: string;
  name: string;
}

export const Items: React.FC<ItemsProps> = ({ items, removeItem }) => {
  return (
    <ItemsStyle>
      <Flex dir="column" gap="1rem">
        {items.map((item) => {
          return <Item key={item.id} {...item} removeItem={removeItem} />;
        })}
      </Flex>
    </ItemsStyle>
  );
};
