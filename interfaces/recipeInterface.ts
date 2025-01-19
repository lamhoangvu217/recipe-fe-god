interface IRecipe {
  id: number,
  title: string,
  cuisine: string,
  ingredients: string[],
  instructions: string[],
  imageUrl: string
}

export type { IRecipe }