export class Item {
  constructor(
      public id: number,
      public text: string,
      public isDone: boolean
  ) {}
}

export interface TodoItem {
  id: number;
  text: string;
  isDone: boolean;
}

export interface PayloadItem {
  type: string;
  item: TodoItem;
}