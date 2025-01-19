
import { IRecipe } from "@/interfaces/recipeInterface";
import RecipePage from "@/pages/RecipePage/RecipePage";

export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const slug = (await params).slug;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_RECIPE_BE}/recipe/${slug}`
  );
  const resDataJson = await data.json();
  const recipe: IRecipe = resDataJson.recipe;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <RecipePage recipe={recipe} />
    </div>
  );
}
