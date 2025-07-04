import { useState, useRef, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import {useNavigate} from "react-router-dom"


export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod]= useState('')
  const [cookingTime, setCookingTime]=useState('')
  const [newIngredient, setNewIngredient]= useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title, ingredients, method, cookingTime:cookingTime + ' minutes'} );
   
  }

  const handleAdd = (e) =>{
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus() 
  }
  // redirect user when we have a data response
  useEffect(()=>{
    if(data){
      setTitle('');
  setMethod('');
  setCookingTime('');
  setNewIngredient('');
  setIngredients([]);
      navigate('/')
    }
  },[data, navigate])
  return (
    <div className="min-h-screen bg-cover flex justify-center items-center">
      <div className="w-[400px] md:w-[500px] duration-500 rounded-xl p-7 border border-slate-600  bg-slate-600">
        <h3 className="text-3xl font-semibold my-3 text-center text-slate-200">Create Your Own Recipe </h3>

        <form className="flex flex-col my-5 space-y-7" onSubmit={handleSubmit}>

          <div className="flex items-center border border-white rounded-lg p-1">
            {/* input */}
            <input type="text" className="w-full border-0 outline-0 bg-transparent focus:placeholder-transparent peer tracking-widest font-bold text-white" placeholder="Recipe Name"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            />
            {/* svg */}
            <svg className="size-10 text-gray-400 peer-focus:text-gray-600 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
          </div>


          <div className="flex items-center border border-white rounded-lg p-1">
            
            <input type="text" className="w-full border-0 outline-0 bg-transparent focus:placeholder-transparent peer tracking-widest font-bold text-white" placeholder="Ingredients"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
            required/>
            <button className="rounded-lg bg-purple-400 px-2 py-1 text-white font-semibold tracking-widest cursor-pointer" 
            onClick={handleAdd}>Add</button>
          </div>

          <p className="text-white font-bold">Current Ingredients: {ingredients.map(i => <em key= {i}>{i},</em>)}</p>


          <div className="flex items-center border border-white rounded-lg p-1">
            {/* input */}
            <input type="text" className="w-full border-0 outline-0 bg-transparent focus:placeholder-transparent peer tracking-widest font-bold text-white" placeholder="Recipe Method"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required/>
            {/* svg */}
            <svg className="size-10 text-gray-400 peer-focus:text-gray-600 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
          </div>


          <div className="flex items-center border border-white rounded-lg p-1">
            {/* input */}
            <input type="number" className="w-full border-0 outline-0 bg-transparent focus:placeholder-transparent peer tracking-widest font-bold text-white" placeholder="Cooking Time (minutes)"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required/>
            {/* svg */}
            <svg className="size-10 text-gray-400 peer-focus:text-gray-600 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
          </div>


          <button className="bg-purple-500 text-white rounded-lg py-2 px-3 font-semibold cursor-pointer">Submit</button>
          
        </form>
      </div>


      <div>

      </div>
     
    </div>
  )
}