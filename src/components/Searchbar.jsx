import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        //query parameter
        navigate(`/search?q=${term}`)
    }
  return (
    <div className="">

        <form onSubmit={handleSubmit}>
            <div>
            <input type="text"
            placeholder="Search"
            onChange={(e) => setTerm(e.target.value)}
            required/>

            </div>
           
        </form>

    </div>
  )
}
