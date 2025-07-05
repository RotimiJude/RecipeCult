import {useParams} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'


export default function Recipe() {
  const { id } = useParams()
  const[recipe, setRecipe] = useState(null)
  const[isPending, setIsPending] = useState(false)
  const[error, setError]=useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then((doc) => 
    {
      
      if (doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      } else{
        setIsPending(false)
        setError('could not find the recipe')
      }
    })
  }, [id])
  const handleClick = (id) =>{
    projectFirestore.collection('recipes').doc(id).update({
      title: 'something completely different'
    })
  }
  return (
    <>
     <div className="max-w-lg mx-auto mt-2 p-6 bg-white shadow-lg rounded-lg border mb-5">
     {error && <p className="text-red-500 font-medium">{error}</p>}

     {isPending && <p className="text-gray-500 font-medium">Loading...</p>}

     {recipe && (
       <>
         <h1 className="text-2xl font-bold text-gray-800 mb-2">{recipe.title}</h1>
         <p className="text-gray-600 mb-4">
           ⏳ Takes <span className="font-semibold">{recipe.cookingTime}</span> to cook.
         </p>

         <h2 className="text-lg font-semibold text-gray-700">Ingredients:</h2>
         <ul className="list-disc list-inside text-gray-600 mb-4">
           {recipe.ingredients.map((ing) => (
             <li key={ing} className="ml-4">{ing}</li>
           ))}
         </ul>

         <h2 className="text-lg font-semibold text-gray-700">Method:</h2>
         <p className="text-gray-600 leading-relaxed">{recipe.method}</p>
       </>
     )}
   </div>
   </>
  )
}
