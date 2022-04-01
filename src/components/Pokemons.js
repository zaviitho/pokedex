import React from 'react';
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonsCard from './PokemonsCard';
import HeaderPokedex from './HeaderPokedex';
import Pagination from './Pagination';

const Pokemons = () => {
    const userName= useSelector(state => state.userName)
    const navigate= useNavigate()

    const [pokemons, setPokemons] = useState([])
    const [pokemonsType, setPokemonsType]= useState([])
    const [ pokemonName, setpokemonName ] = useState("");
    
    
    // const [currentOffset,setCurrentOffset] = useState(0)

    const [page,setPage] = useState(1)

    useEffect(() =>{        
        getPokemons()
        getPokemonsTypes()
    },[])
    
    const getPokemons = () =>{
        axios
        .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
        .then((response) =>{
            const {results} = response.data
            setPokemons(results)
        })
    }
    console.log("Hello world")

    const itemsPerPage = 20
    const lastIndex = itemsPerPage * page
    const firstIndex = lastIndex - itemsPerPage
    const paginatedPokemons = pokemons.slice(firstIndex, lastIndex);

   
    
    
    const getPokemonsTypes = () =>{
        axios
        .get('https://pokeapi.co/api/v2/type')
        .then((response) =>setPokemonsType(response.data.results))
      }

    
    const submit = (e) =>{
        e.preventDefault()
        navigate(`/pokemons/${pokemonName}`)
    }
    const handleType= (e) =>{
        axios.get(e.target.value)
        .then(response=> setPokemons(response.data.pokemon))
    }
    
    const increment = ()=>{        
        setPage(page+1)

    }   
    const decrement = ()=>{
        setPage(page-1)
    }

    return (
        <div className="pokemons">
            <HeaderPokedex/>
            
            <h3>Welcome <b>{userName},</b> here can you find your favorite pokemon</h3>

            

            <div className='pokemons__search'>
            <select className='select-input' onChange={handleType}>
                <option >Select an Type </option>                     
                    {
                        pokemonsType.map(types => (
                        <option key={types.url} value={types.url} >
                            {types.name} 
                        </option>
                            ))
                        }
            </select>
            <form  onSubmit={submit} >
                    <div className='container-form'>                 
                    <label htmlFor="pokemons-name" ></label>
                    <input  className='name-pokemon'
                    type="text" 
                    placeholder='write a pokemon name'
                    id="pokemons-name"
                    value={pokemonName}
                    onChange={e => setpokemonName(e.target.value)}
                    />
                    <button className='button' >
                    <i className="fas fa-search"></i>  Search
                    </button>
                    </div>
            </form>
                         </div>

            <ul className='list-pokemons'>
                {
                    paginatedPokemons.map(pokemon=>(
                        <PokemonsCard
                            url={pokemon.url? pokemon.url: pokemon.pokemon.url}
                            key={pokemon.url}
                        />
                    ))
                }
            </ul>

            <Pagination increment={increment} decrement={decrement} totalItems={pokemons.length} itemsPerPage={itemsPerPage} setPage={setPage}/>
        </div>
    );
};

export default Pokemons;