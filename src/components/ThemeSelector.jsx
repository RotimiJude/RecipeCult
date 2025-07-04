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
        <svg onClick={toggleMode} style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}} className="size-10 text-gray-400 peer-focus:text-gray-600 duration-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
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
