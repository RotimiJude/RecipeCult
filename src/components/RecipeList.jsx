import { Link } from "react-router-dom"
import { CookingPot } from "lucide-react"

export default function RecipeList({recipes}) {
  return (
    <div className="relative  border-b border-purple-700 min-h-[800px]">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-purple-800">Recipe List</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
  {recipes.map(recipe => (
    <div 
      key={recipe.id} 
      className="text-center items-center bg-zinc-400 rounded-lg border border-gray-300 p-6 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 hover:scale-110"
    >
      <div className="flex justify-center">
        <div className="mx-6 h-10 w-10 p-2 text-purple-600 justify-center items-center rounded-full">
          <CookingPot />
        </div>
        <h3 className="text-2xl text-center">{recipe.title}</h3>
      </div>
      <p className="mt-1 mb-6 text-xl">{recipe.cookingTime} to make</p>
      <div className="text-md p-2 mb-2">{recipe.method.substring(0, 100)}...</div>
      <Link to={`/recipes/${recipe.id}`} className="text-purple-600 font-semibold">Cook This</Link>
    </div>
  ))}
</div>

        

    </div>
  )
}
