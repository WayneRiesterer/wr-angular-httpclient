export interface JokeDto {
  type: string;
  value: {
    categories: Array<string>,
    id: number,
    joke: string
  }
}