import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import RecipeList from "../../components/RecipeList"


export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url ='http://localhost:3000/recipes?q=' + query
  const {error, isPending, data} = useFetch(url)

  return (
    <div>
<h2>Recipes including '{query}'</h2>
{error && <p>error</p>}
{isPending && <p>Loading...</p>}
{data && <RecipeList recipes={data}/>}
    </div>
  )
}
