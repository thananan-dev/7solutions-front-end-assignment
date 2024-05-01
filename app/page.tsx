"use client";
import ItemList from "@/common/components/item-list";
import RenderItemList from "@/common/components/render-item-list";
import { EXAMPLE_DATA } from "@/common/constants/example-data";
import {
  EnumDataType,
  IExampleData,
  IQue,
} from "@/common/types/example-data.type";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Home() {
  const [data, setData] = useState<IExampleData[]>(EXAMPLE_DATA);
  const [selectedData, setSelectedData] = useState<IExampleData[]>([]);
  const [que, setQue] = useState<IQue[]>([]);

  const handlerPopItem = useCallback((item: IExampleData) => {
    setData((prev) => [...prev, item]);
    setSelectedData((prev) => prev.filter(({ name }) => name !== item.name));
    setQue((prev) => {
      const findExistingQue = prev.find(({ name }) => name === item.name);
      if (findExistingQue) {
        clearTimeout(findExistingQue.timer);
      }
      return prev.filter(({ name }) => name !== item.name);
    });
  }, []);

  const handlerClickItem = useCallback((item: IExampleData) => {
    const timer = setTimeout(() => {
      setSelectedData((prev) => prev.filter(({ name }) => name !== item.name));
      setData((prev) => [...prev, item]);
    }, 5000);

    const addQue = {
      name: item.name,
      timer: timer,
    };

    setData((prev) => prev.filter(({ name }) => name !== item.name));
    setSelectedData((prev) => [...prev, item]);
    setQue((prev) => [...prev, addQue]);
  }, []);

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
