import RecipeList from "../../components/RecipeList"
import { useFetch } from "../../hooks/useFetch"

export default function Home() {
    const{data, isPending, error} = useFetch('https://json-server-production-cc88.up.railway.app')
  return (
    <div>
        {error && <p>{error}</p>}
        {isPending && <p>{isPending}</p>}
        {data && <RecipeList recipes={data}/>}

    </div>
  )
}
