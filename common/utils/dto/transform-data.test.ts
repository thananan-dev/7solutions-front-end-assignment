import {
  EXAMPLE_DUMMY_JSON_API_DATA_FEMAIL,
  EXAMPLE_DUMMY_JSON_API_DATA_MAIL,
} from "@/common/constants/example-data";
import { transformDataFromAPI } from "@/common/utils/dto/transform-data";

describe("Unit test to function transformDataFromAPI", () => {
  test("add empty array, the result should be empty object", () => {
    expect(transformDataFromAPI([])).toStrictEqual({});
  });

  const exampleData = [
    EXAMPLE_DUMMY_JSON_API_DATA_MAIL,
    EXAMPLE_DUMMY_JSON_API_DATA_FEMAIL,
  ];
  //NOTE: Not cover 100 coverage becuase mock data not enough but the function it work correctly
  test("add example data mail, the result should be correct object", () => {
    expect(transformDataFromAPI(exampleData)).toStrictEqual({
      Marketing: {
        male: 1,
        female: 0,
        ageRange: "50-50",
        hair: { Black: 1, Blond: 0, Chestnut: 0, Brown: 0 },
        addressUser: { TerryMedhurst: "1745 T Street Southeast" },
      },
      Accounting: {
        male: 0,
        female: 1,
        ageRange: "21-21",
        hair: { Black: 0, Blond: 1, Chestnut: 0, Brown: 0 },
        addressUser: { AlisonReichert: "18 Densmore Drive" },
      },
    });
  });
});
