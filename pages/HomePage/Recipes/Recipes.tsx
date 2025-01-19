import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IRecipe } from "@/interfaces/recipeInterface";
import { useRouter } from "next/navigation";

interface IRecipesComponentProps {
  filteredRecipes: IRecipe[];
}
function Recipes(props: IRecipesComponentProps) {
  const { filteredRecipes } = props;
  const router = useRouter();
  const handleSelectRecipe = (recipeId: number) => {
    router.push(`/recipe/${recipeId}`);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRecipes?.map((recipe) => (
        <Card
          key={recipe.id}
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleSelectRecipe(recipe.id)}
        >
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <CardHeader>
            <CardTitle>{recipe.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              {recipe.ingredients.slice(0, 3).join(", ")}
              {recipe.ingredients.length > 3 ? "..." : ""}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Recipes;
