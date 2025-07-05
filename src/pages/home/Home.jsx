import { useEffect, useState } from "react"
import RecipeList from "../../components/RecipeList"
import { projectFirestore } from "../../firebase/config"

export default function Home() {
  const[data, setData] = useState(null)
  const[isPending, setIsPending] = useState(false)
  const[error, setError]=useState(false)
    useEffect(()=>{
      setIsPending(true)
      const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
       if(snapshot.empty){
        setError('no recipes to load')
        setIsPending(false)
       } else {
        let results =[]
        snapshot.docs.forEach(doc =>{
          results.push({id:doc.id, ...doc.data()})
        })
        setData(results)
        setIsPending(false)
       }
      }, (err) => {
        setError(err.message)
        setIsPending(false)
      })
      return () => unsub()

    }, [])
  return (
    <div>
        {error && <p>{error}</p>}
        {isPending && <p className="text-center text-white">Loading...</p>}
        {data && <RecipeList recipes={data}/>}

    </div>
  )
}
