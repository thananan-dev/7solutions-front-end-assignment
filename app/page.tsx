"use client";
import ItemList from "@/common/components/item-list";
import RenderItemList from "@/common/components/render-item-list";
import { EXAMPLE_DATA } from "@/common/constants/example-data";
import { EnumDataType, IExampleData } from "@/common/types/example-data.type";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<IExampleData[]>(EXAMPLE_DATA);
  const [selectedData, setSelectedData] = useState<IExampleData[]>([]);

  const handlerPopItem = useCallback(() => {
    const itemFromShifted = selectedData.shift();
    if (itemFromShifted) {
      setData((prev) => [...prev, itemFromShifted]);
      setSelectedData((prev) =>
        prev.filter(({ name }) => name !== itemFromShifted.name)
      );
    }
  }, [selectedData]);

  const handlerClickItem = useCallback((item: IExampleData) => {
    setData((prev) => prev.filter(({ name }) => name !== item.name));
    setSelectedData((prev) => [...prev, item]);
  }, []);

  return (
    <main className="grid gap-4 grid-cols-3 p-4 min-h-screen">
      <ItemList
        items={data}
        onSelectItem={(item) => {
          handlerClickItem(item);

          setTimeout(() => {
            setSelectedData((prev) => {
              return prev.slice(1);
            });

            setData((prev) => {
              // NOTE: handler this when user click on the right column, the set state will don't set duplicated item
              const findExistingData = prev.find(
                ({ name }) => name === item.name
              );
              if (findExistingData) {
                return prev;
              }
              return [...prev, item];
            });
          }, 5000);
        }}
      />
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
