"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cuisineTypes, sampleRecipes } from "@/constants/recipe";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter()
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const filteredRecipes = sampleRecipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCuisine =
      selectedCuisine === "All" || recipe.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });
  const handleSelectRecipe = (recipeId: number) => {
    router.push(`/recipe/${recipeId}`)
  }
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Finder</h1>
      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Search recipes or ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-2">
            {cuisineTypes.map((cuisine) => (
              <Button
                key={cuisine}
                variant={selectedCuisine === cuisine ? "default" : "outline"}
                onClick={() => setSelectedCuisine(cuisine)}
                className="whitespace-nowrap"
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleSelectRecipe(recipe.id)}
          >
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.cuisine} Cuisine</CardDescription>
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
    </>
  );
}
