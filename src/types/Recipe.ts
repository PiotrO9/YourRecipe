export type Recipe = {
  id: number;
  title: string;
  difficulty: number;
  prepareTime: number;
  description: string;
  ingredients: Array<Array<string>>;
  ImagePath: string;
};
