import React from 'react';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonsCard = ({url}) => {
    const [ pokemons, setPokemons  ] = useState({})
    console.log(pokemons)

    useEffect(() =>{
        axios.get(url)
            .then(res => setPokemons(res.data))
            
    }, [url])
    return (
        <li  key={pokemons.id} className="pokemon-card">
            <Link to={`/pokemons/${pokemons.id}`} >
            <img src={pokemons.sprites?.front_default} alt="" />
            <h4 className='pokemon-card__name'>{pokemons.name}</h4>
            <div className='pokemon-wrapper'>
                <div>
                    <p>Hp</p>
                    <p>{pokemons?.stats?.[0].base_stat}</p>
                </div>
                <div>
                    <p>Attack</p>
                    <p>{pokemons?.stats?.[1].base_stat}</p>
                </div>
            </div>
            <div className='pokemon-wrapper'>
                <div>
                    <p>Defense</p>
                    <p>{pokemons?.stats?.[2].base_stat}</p>
                </div>
                <div>
                    <p>Speed</p>
                    <p>{pokemons?.stats?.[5].base_stat}</p>
                </div>
            </div>    
                

            
            </Link>
        </li>
    );
};

export default PokemonsCard;