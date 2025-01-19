/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ICuisine } from "@/interfaces/cuisineInterface";
import { IRecipe } from "@/interfaces/recipeInterface";
import API from "@/services/API";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Recipes from "./Recipes/Recipes";
const formSchema = z.object({
  search: z.string().max(10, "Maximum of search keyword is 10 characters"),
});

function HomePage() {
  const [isCuisineLoading, setIsCuisineLoading] = useState(false);
  const [isRecipeLoading, setIsRecipeLoading] = useState(false);

  const { toast } = useToast();
  const [cuisines, setCuisines] = useState<ICuisine[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });
  const handleCuisineChange = (value: string) => {
    setSelectedCuisine(value);
    // Only include search term if we previously had a search
    const currentSearch = form.getValues().search;
    if (currentSearch.trim()) {
      fetchRecipes(currentSearch, value);
    } else {
      fetchRecipesByCuisine(value);
    }
  };

  const fetchAllCuisine = async () => {
    setIsCuisineLoading(true);
    const res = await API.Cuisine.getAllCuisines();
    if (res?.cuisines) {
      setCuisines(res?.cuisines);
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
    setIsCuisineLoading(false);
  };
  const fetchRecipesByCuisine = async (cuisineId: string) => {
    setIsRecipeLoading(true);
    try {
      const params: { cuisineId?: string } = {};
      if (cuisineId !== "all") {
        params.cuisineId = cuisineId;
      }
      const responseData = await API.Recipe.getRecipes(params);
      setFilteredRecipes(responseData?.recipes || []);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error fetching recipes",
        description: "There was a problem with your request.",
      });
    } finally {
      setIsRecipeLoading(false);
    }
  };

  const fetchRecipes = async (searchTerm: string, cuisineId = selectedCuisine) => {
    setIsRecipeLoading(true);
    try {
      const params: { cuisineId?: string; search: string } = {
        search: searchTerm.trim()
      };
      
      if (cuisineId !== "all") {
        params.cuisineId = cuisineId;
      }

      const responseData = await API.Recipe.getRecipes(params);
      setFilteredRecipes(responseData?.recipes || []);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error fetching recipes",
        description: "There was a problem with your request.",
      });
    } finally {
      setIsRecipeLoading(false);
    }
  };
  const onSearch = async (values: { search: string }) => {
    fetchRecipes(values.search, selectedCuisine);
  };
  useEffect(() => {
    fetchAllCuisine();
    // Initial fetch of all recipes
    fetchRecipesByCuisine('all');
  }, []);
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Finder</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <Select defaultValue={"all"} onValueChange={handleCuisineChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a cuisine" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={"all"}>All</SelectItem>
                {cuisines?.map((item) => {
                  return (
                    <SelectItem value={item.id.toString()} key={item.id}>
                      {item.name}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSearch)} className="flex gap-4 w-full">
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="flex-1 relative">
                        <Input
                          type="text"
                          placeholder="Search recipes or ingredients..."
                          className="pl-10 w-full"
                          {...field}
                        />
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Search</Button>
            </form>
          </Form>
        </div>
      </div>
      {isCuisineLoading || isRecipeLoading ? (
        "Loading"
      ) : (
        <Recipes filteredRecipes={filteredRecipes} />
      )}
    </>
  );
}

export default HomePage;
