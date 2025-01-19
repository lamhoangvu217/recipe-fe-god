"use client";
import { Button } from "@/components/ui/button";
import { IRecipe } from "@/interfaces/recipeInterface";
import { useRouter } from "next/navigation";
import React from "react";

function RecipePage({ recipe }: { recipe: IRecipe }) {
  const router = useRouter();
  const handleBackToHome = () => {
    router.push("/");
  };
  return (
    <div>
      <Button variant="outline" className="mb-6" onClick={handleBackToHome}>
        Back to Recipes
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={recipe?.imageUrl}
          alt={"recipe title"}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">{recipe?.name}</h2>

          <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
          <ul className="list-disc pl-5 mb-6">
            {recipe?.ingredients?.length > 0 && (
              <>
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="mb-1">
                    {ingredient}
                  </li>
                ))}
              </>
            )}
          </ul>

          <h3 className="text-xl font-semibold mb-3">Instructions</h3>
          <ol className="list-decimal pl-5">
            {recipe?.instructions?.map((step: string, index: number) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
