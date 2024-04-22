import React from "react";
import { IExampleData } from "@/common/types/example-data.type";
import Card from "@/common/components/card";

interface IItemList {
  items: IExampleData[];
  onSelectItem: (item: IExampleData) => void;
}

const ItemList = ({ items, onSelectItem }: IItemList) => {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => {
        const { name } = item;
        return (
          <Card key={name} onClick={() => onSelectItem(item)}>
            {name}
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
