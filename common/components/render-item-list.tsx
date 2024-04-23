"use client";
import React, { memo, useEffect, useMemo } from "react";
import { EnumDataType, IExampleData } from "@/common/types/example-data.type";
import Card from "@/common/components/card";

interface IRenderItemList {
  items: IExampleData[];
  itemType: EnumDataType;
  handlerPopItem: () => void;
}

const RenderItemList = ({
  items,
  itemType,
  handlerPopItem,
}: IRenderItemList) => {
  const filterItemByItemType = useMemo(() => {
    return items.filter(({ type }) => type === itemType);
  }, [itemType, items]);

  return (
    <div className="border-2" onClick={handlerPopItem}>
      <div className="bg-slate-200 p-3">
        <p className="text-center font-semibold">{itemType}</p>
      </div>
      <div className="flex flex-col p-2 gap-2">
        {filterItemByItemType.map(({ name, type }) => {
          return <Card key={`${type}-${name}`}>{name}</Card>;
        })}
      </div>
    </div>
  );
};

export default memo(RenderItemList);
