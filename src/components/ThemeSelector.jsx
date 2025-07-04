import { useTheme } from "../hooks/useTheme"

const themeColors = ['#58249c', '#249c6b', '#b70233']
export default function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme()
    const toggleMode =() =>{
        changeMode(mode === 'dark' ? 'light' : 'dark')
        
    }
    
  return (
    <div className="flex justify-evenly items-center space-x-7 py-3">
        <div>
         <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleMode} style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun-icon lucide-sun size-10 text-gray-400 peer-focus:text-gray-600 duration-500 cursor-pointer"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        </div>       
        {themeColors.map(color => (
            <div key={color}
            onClick={() => changeColor(color)}
            style={{background:color}}
            className="size-4 rounded-full animate-bounce cursor-pointer"/>
        ))}
                    
    </div>
  )
}
