import { Link } from "react-router-dom"
import {Menu, X} from "lucide-react"
import { useState, useContext } from "react"
import Searchbar from "./Searchbar";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
    const {color} = useContext(ThemeContext)

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    };

  return (
            <nav className=" py-3 border-b border-purple-500 bg-purple-700 text-white" style={{background:color}}>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center flex-shrink-0">
                    <div className="flex items-center flex-shrink-0">
                    <span className="text-3xl tracking-wider text-white">
                        <Link to="/">RecipeHut</Link>
                    </span>
                </div>
                

                <ul className="hidden lg:flex ml-14 space-x-12 text-2xl">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        Other Link
                    </li>
                </ul>


                <div className="hidden lg:flex justify-center space-x-12 items-center text-2xl">
                    <span className="py-2 px-3 border rounded-md">
                       <Searchbar/>
                    </span>
                    <span className=" py-2 px-3 border rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition duration-500 tracking-widest">
                        <Link to="/create">Create Recipe</Link>
                    </span>

                </div>

                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>


                </div>

                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-purple-800 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            <li className="py-4">
                                <Link to ="/">Home</Link>
                            </li>

                            <li>
                                Other Links
                            </li>
                        </ul>

                        <div className="flex space-x-6 mt-10">
                        <span className="py-2 px-3 border rounded-md">
                        <Searchbar/>
                    </span>
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-3 rounded-md">
                        <Link to="/create">Create Recipe</Link>
                    </span>

                        </div>

                    </div>
                )}

            </div>

            
            
        </nav>
    
  )
}
