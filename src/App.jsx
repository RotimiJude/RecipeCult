import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';
import './App.css'

function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode} min-h-screen`}>
      <Navbar />
      <ThemeSelector/>
      <div className='max-w-7xl px-6'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
