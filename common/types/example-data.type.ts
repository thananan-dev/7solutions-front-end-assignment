export interface IExampleData {
  type: EnumDataType | string;
  name: string;
}

export interface IQue {
  name: string;
  timer: NodeJS.Timeout
}

export enum EnumDataType {
  VEGETBLE = 'Vegetable',
  FRUIT = 'Fruit'
}
