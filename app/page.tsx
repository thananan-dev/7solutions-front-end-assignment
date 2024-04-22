"use client";
import ItemList from "@/common/components/item-list";
import RenderItemList from "@/common/components/render-item-list";
import { EXAMPLE_DATA } from "@/common/constants/example-data";
import { EnumDataType, IExampleData } from "@/common/types/example-data.type";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<IExampleData[]>(EXAMPLE_DATA);
  const [selectedData, setSelectedData] = useState<IExampleData[]>([]);

  const handlerClickItem = (item: IExampleData) => {
    setData((prev) => prev.filter(({ name }) => name !== item.name));
    setSelectedData((prev) => [...prev, item]);
  };

  const handlerPopItem = () => {
    const itemFromShifted = selectedData.shift();
    if (itemFromShifted) {
      setData((prev) => [...prev, itemFromShifted]);
      setSelectedData((prev) =>
        prev.filter(({ name }) => name !== itemFromShifted.name)
      );
    }
  };

  return (
    <main className="grid gap-4 grid-cols-3 p-4 min-h-screen">
      <ItemList items={data} onSelectItem={handlerClickItem} />
      <RenderItemList
        items={selectedData}
        itemType={EnumDataType.FRUIT}
        handlerPopItem={handlerPopItem}
      />
      <RenderItemList
        items={selectedData}
        itemType={EnumDataType.VEGETBLE}
        handlerPopItem={handlerPopItem}
      />
    </main>
  );
}
