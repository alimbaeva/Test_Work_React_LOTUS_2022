export interface IUser {
  id: string;
  authentication: boolean;
  person: string;
  surname: string;
  firstName: string;
  patronymic: string;
  key: string;
  activities: string;
  term: number;
  warranty: number;
  pay: number;
  priceAll: number;
  percent: number;
}

export interface IForm {
  firstName: string;
  surname: string;
  key: string;
}

export interface ITimer {
  id: string;
  minute: number;
  second: number;
  millisecond: number;
  boolean: boolean;
}
