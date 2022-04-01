import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Pokemons from './components/Pokemons';
import PokemonInfo from './components/PokemonInfo';
import ProtectedRoutes from './components/ProtectedRoutes';
function App() {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokemons' element={<Pokemons/>}/>
            <Route path='/pokemons/:id' element={<PokemonInfo/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
    
    
  );
}

export default App;
