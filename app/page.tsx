"use client";
import ItemList from "@/common/components/item-list";
import RenderItemList from "@/common/components/render-item-list";
import { EXAMPLE_DATA } from "@/common/constants/example-data";
import { EnumDataType, IExampleData } from "@/common/types/example-data.type";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Home() {
  const [data, setData] = useState<IExampleData[]>(EXAMPLE_DATA);
  const [selectedData, setSelectedData] = useState<IExampleData[]>([]);

  const handlerPopItem = useCallback((item: IExampleData) => {
    setData((prev) => [...prev, item]);
    setSelectedData((prev) => prev.filter(({ name }) => name !== item.name));
  }, []);

  const handlerClickItem = useCallback((item: IExampleData) => {
    setData((prev) => prev.filter(({ name }) => name !== item.name));
    setSelectedData((prev) => [...prev, item]);

    setTimeout(() => {
      setSelectedData((prev) => prev.filter(({ name }) => name !== item.name));

      setData((prev) => {
        // NOTE: handler this when user click on the right column, the set state will don't set duplicated item
        const findExistingData = prev.find(({ name }) => name === item.name);
        if (findExistingData) {
          return prev;
        }
        return [...prev, item];
      });
    }, 5000);
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
