import { transformDataFromAPI } from "@/common/utils/dto/transform-data";
import React from "react";

const page = async () => {
  const fetchData = await fetch("https://dummyjson.com/users").then(
    (response) => response.json()
  );
  const data = await transformDataFromAPI(fetchData.users);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default page;
