interface IRecipe {
  id: number,
  name: string,
  ingredients: string[],
  instructions: string[],
  imageUrl: string,
  cuisineID: number
}
export type { IRecipe }