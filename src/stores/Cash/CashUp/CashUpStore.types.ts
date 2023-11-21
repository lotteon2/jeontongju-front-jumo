export interface CashUpState {
  searchMonth: string;
  searchYear: string;
}

export interface CashUpDispatcher extends CashUpState {
  dispatchSearchMonth: (value: string) => void;
  dispatchSearchYear: (value: string) => void;
}
