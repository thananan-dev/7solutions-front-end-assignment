import {
  IAPIResponse,
  ITransformedResponse,
} from "@/common/types/transform-data.type";

export const transformDataFromAPI = (
  data: IAPIResponse[]
): ITransformedResponse => {
  let response: ITransformedResponse = {};
  data.forEach(
    ({ company, gender, hair, firstName, lastName, address, age }) => {
      const { department } = company;
      if (response.hasOwnProperty(company.department)) {
        let makeAgeRange = response[department].ageRange.split("-");

        if (age < Number(makeAgeRange[0])) makeAgeRange[0] = age.toString();
        if (age > Number(makeAgeRange[1])) makeAgeRange[1] = age.toString();

        response[department] = {
          male:
            gender === "male"
              ? (response[department].male += 1)
              : response[department].male,
          female:
            gender === "female"
              ? (response[department].female += 1)
              : response[department].female,
          ageRange: makeAgeRange.join("-"),
          hair: {
            Black:
              hair.color === "Black"
                ? (response[department].hair.Black += 1)
                : response[department].hair.Black,
            Blond:
              hair.color === "Blond"
                ? (response[department].hair.Blond += 1)
                : response[department].hair.Blond,
            Chestnut:
              hair.color === "Chestnut"
                ? (response[department].hair.Chestnut += 1)
                : response[department].hair.Chestnut,
            Brown:
              hair.color === "Brown"
                ? (response[department].hair.Brown += 1)
                : response[department].hair.Brown,
          },
          addressUser: {
            ...response[department].addressUser,
            [`${firstName}${lastName}`]: address.address,
          },
        };
      } else {
        response[department] = {
          male: gender === "male" ? 1 : 0,
          female: gender === "female" ? 1 : 0,
          ageRange: `${age}-${age}`,
          hair: {
            Black: hair.color === "Black" ? 1 : 0,
            Blond: hair.color === "Blond" ? 1 : 0,
            Chestnut: hair.color === "Chestnut" ? 1 : 0,
            Brown: hair.color === "Brown" ? 1 : 0,
          },
          addressUser: {
            [`${firstName}${lastName}`]: address.address,
          },
        };
      }
    }
  );
  return response;
};
