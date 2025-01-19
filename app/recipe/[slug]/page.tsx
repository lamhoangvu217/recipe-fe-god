"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function RecipeDetail() {
  const router = useRouter()
  const handleBackToHome = () => {
    router.push("/")
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
            <Button
              variant="outline"
              className="mb-6"
              onClick={handleBackToHome}
            >
              Back to Recipes
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Image
                src={""}
                alt={"recipe title"}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div>
                <h2 className="text-3xl font-bold mb-4">Recipe Title</h2>
                <p className="text-gray-600 mb-6">Cuisine</p>
                
                <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
                <ul className="list-disc pl-5 mb-6">
                  {/* {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-1">{ingredient}</li>
                  ))} */}
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Instructions</h3>
                <ol className="list-decimal pl-5">
                  {/* {selectedRecipe.instructions.map((step, index) => (
                    <li key={index} className="mb-2">{step}</li>
                  ))} */}
                </ol>
              </div>
            </div>
          </div>
  )
}

export default RecipeDetail