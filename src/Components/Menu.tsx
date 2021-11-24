import React, { useState, useEffect } from "react";
import { Flex } from "../Styled-Components/Flex";
import { MenuStyle } from "../Styled-Components/MenuStyles";
import { Action, Alert } from "./Alert";
import { Input } from "./Input";
import { Items, ItemType } from "./Items";
import { Title } from "./Title";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  const [action, setAction] = useState<Action>({ action: "", show: false });
  const [items, setItems] = useState<ItemType[]>([]);
  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("items") || "[]");
  };

  const updateLocalStorage = (items: ItemType[]) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const addItem = (item: ItemType) => {
    setItems([...items, item]);
    updateLocalStorage([...items, item]);
    setAction({ action: "add", show: true });
  };

  const removeItem = (id: string) => {
    setAction({ action: "remove", show: true });
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    updateLocalStorage(newItems);
  };

  useEffect(() => {
    setItems(getLocalStorage());
  }, []);

  return (
    <Flex dir="column">
      <MenuStyle>
        <Title title="Shopping list" />
        <Alert act={action} setAction={setAction} />
        <Input addItem={addItem} />
        <Items items={items} removeItem={removeItem} action={action.action} />
      </MenuStyle>
    </Flex>
  );
};
