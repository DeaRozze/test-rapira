export type Category =
  | "Город"
  | "Природа"
  | "Люди"
  | "Животные"
  | "Еда"
  | "Напитки"
  | "Архитектура"
  | "Искусство";

export interface ImageItem {
  id: string;
  title: string;
  description: string;
  categories: Category[];
  date: string;
  readTimeMin: number;
  comments: number;
  imageUrl: string;
}
