import { urlParseParams } from "@/helpers/helpFunctions";
import { axiosGET } from "@/helpers/TypeAxios";
import { GetRecipeByCuisineParams } from "@/types/recipeParams";

export default class Recipe {
  getRecipes(params: GetRecipeByCuisineParams) {
    const stringUrl = urlParseParams(params)
    return axiosGET({ url: `/recipes?${stringUrl}` });
  }
  getRecipeDetail(recipeId: number) {
    return axiosGET({ url: `/recipe/${recipeId}` });
  }
}