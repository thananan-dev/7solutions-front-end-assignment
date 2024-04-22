import { IExampleData } from "@/common/types/example-data.type";
import { IAPIResponse } from "../types/transform-data.type";

export const EXAMPLE_DATA: IExampleData[] = [
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Vegetable",
    name: "Broccoli",
  },
  {
    type: "Vegetable",
    name: "Mushroom",
  },
  {
    type: "Fruit",
    name: "Banana",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Mango",
  },
  {
    type: "Fruit",
    name: "Pineapple",
  },
  {
    type: "Vegetable",
    name: "Cucumber",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
  {
    type: "Vegetable",
    name: "Carrot",
  },
];

export const EXAMPLE_DUMMY_JSON_API_DATA_MAIL: IAPIResponse = {
  id: 1,
  firstName: "Terry",
  lastName: "Medhurst",
  maidenName: "Smitham",
  age: 50,
  gender: "male",
  email: "atuny0@sohu.com",
  phone: "+63 791 675 8914",
  username: "atuny0",
  password: "9uQFF1Lh",
  birthDate: "2000-12-25",
  image: "https://robohash.org/Terry.png?set=set4",
  bloodGroup: "A-",
  height: 189,
  weight: 75.4,
  eyeColor: "Green",
  hair: {
    color: "Black",
    type: "Strands",
  },
  domain: "slashdot.org",
  ip: "117.29.86.254",
  address: {
    address: "1745 T Street Southeast",
    city: "Washington",
    coordinates: {
      lat: 38.867033,
      lng: -76.979235,
    },
    postalCode: "20020",
    state: "DC",
  },
  macAddress: "13:69:BA:56:A3:74",
  university: "Capitol University",
  bank: {
    cardExpire: "06/22",
    cardNumber: "50380955204220685",
    cardType: "maestro",
    currency: "Peso",
    iban: "NO17 0695 2754 967",
  },
  company: {
    address: {
      address: "629 Debbie Drive",
      city: "Nashville",
      coordinates: {
        lat: 36.208114,
        lng: -86.586212,
      },
      postalCode: "37076",
      state: "TN",
    },
    department: "Marketing",
    name: "Blanda-O'Keefe",
    title: "Help Desk Operator",
  },
  ein: "20-9487066",
  ssn: "661-64-2976",
  userAgent:
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
  crypto: {
    coin: "Bitcoin",
    wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: "Ethereum (ERC20)",
  },
};

export const EXAMPLE_DUMMY_JSON_API_DATA_FEMAIL: IAPIResponse = {
  id: 6,
  firstName: "Alison",
  lastName: "Reichert",
  maidenName: "Franecki",
  age: 21,
  gender: "female",
  email: "jtreleven5@nhs.uk",
  phone: "+351 527 735 3642",
  username: "jtreleven5",
  password: "zY1nE46Zm",
  birthDate: "1969-07-21",
  image: "https://robohash.org/Alison.png?set=set4",
  bloodGroup: "A+",
  height: 149,
  weight: 105.7,
  eyeColor: "Amber",
  hair: {
    color: "Blond",
    type: "Straight",
  },
  domain: "bandcamp.com",
  ip: "49.201.206.36",
  address: {
    address: "18 Densmore Drive",
    city: "Essex",
    coordinates: {
      lat: 44.492953,
      lng: -73.101883,
    },
    postalCode: "05452",
    state: "VT",
  },
  macAddress: "6C:34:D0:4B:4E:81",
  university: "Universidade da Beira Interior",
  bank: {
    cardExpire: "03/22",
    cardNumber: "345675888286047",
    cardType: "americanexpress",
    currency: "Euro",
    iban: "LB69 1062 QCY5 XS5T VOKU KJFG XP4S",
  },
  company: {
    address: {
      address: "6231 North 67th Avenue",
      city: "Glendale",
      coordinates: {
        lat: 33.5279666,
        lng: -112.2022551,
      },
      postalCode: "85301",
      state: "AZ",
    },
    department: "Accounting",
    name: "D'Amore and Sons",
    title: "Civil Engineer",
  },
  ein: "78-3192791",
  ssn: "158-68-0184",
  userAgent:
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; nb-NO) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
  crypto: {
    coin: "Bitcoin",
    wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: "Ethereum (ERC20)",
  },
};
