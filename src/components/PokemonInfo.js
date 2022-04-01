import React from 'react';
import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import ValidateColor from './ValidateColor';
import HeaderPokedex from './HeaderPokedex';
const PokemonInfo = () => {

    const {id}=useParams()
    const [pokemon, setPokemon]= useState({})
    const [type, setType] = useState("");

    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            setPokemon(response.data)
            setType(response.data.types[0].type.name)
        })
    },[id])
    console.log(pokemon)
    document.body.style = `background: white;`;
// ${ValidateColor(type)}
    return (
        <div className="pokemon-info">
            <HeaderPokedex/>
            <div className='pokemon-info__container'>
            <div className='pokemon-info__header' style={{backgroundColor:ValidateColor(type)}}></div>

            <img src={pokemon.sprites?.front_default} alt=""  />
            <h1>#{pokemon.id}</h1>
            <h1>{pokemon.name}</h1>
            <div className="info-wrapper">
                <div>
                <p>Weight</p>
                <p>{pokemon.weight}</p>
                </div>
                <div>
                    <p>Height</p>
                    <p>{pokemon.height}</p>
                </div>
            </div>
            <div className='info-skills'>
                <div>
                    <p>Type</p>
                    {pokemon.types?.map((value) => {
                        return(
                        <span className='info-skills__type' key={value.slot}>{value.type?.name}  </span>
                            )
                    })}
                </div>
                <div className='info-abilities'>
                    <p>Abilities</p>
                    {pokemon.abilities?.map((a)=>(
                        <span key={a.slot}>{a.ability?.name}</span>
                    ))
                    }
                </div>
                
            </div>
            <h3>Stats</h3>
            <div className='stats'>
                <ProgressBar label="Hp"value={pokemon.stats?.[0].base_stat} / >
                <ProgressBar label="Attack"value={pokemon.stats?.[1].base_stat}/>
                <ProgressBar label="Defense"value={pokemon.stats?.[2].base_stat}/>
                <ProgressBar label="Speed"value={pokemon.stats?.[5].base_stat}/>
            </div>

            <div className="movements">
                
  
            </div>
            </div>
        </div> 
    );
};

export default PokemonInfo;