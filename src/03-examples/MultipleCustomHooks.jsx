
import React from 'react';
import { useFetch, useCounter} from '../hooks';
import { LoadingMessage } from './loadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

  const { counter, decrement, increment, reset } = useCounter (1);
  const { data, hasError, isLoading  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  const { author, quote} = !!data && data[0];

  return (
    <>
      <h1> Información de Pokemons</h1>
      <hr/>

      { isLoading
       ? <LoadingMessage />
       : <PokemonCard
        id={counter}
        name={data.name}
        sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,
        ] }
        /> }





     {/*  <pre> { JSON.stringify(data, null, 2) } </pre> */}
      {/* <h2> {data?.name} </h2>
      <h2> {data?.id} </h2> */}

        <>      
        <button type="button" className='btn btn-outline-primary mt-2'
        onClick={()=> counter > 0 ?  decrement() : null }
      >
        Anterior
      </button>

      <button type="button" className='btn btn-outline-primary mt-2'
        onClick={ ()=> reset() }
      >
        Inicio
      </button>

      <button type="button" className='btn btn-outline-primary mt-2'
        onClick={ ()=> increment() }
      >
        Siguiente
      </button>

      </>

  
    </>
  )
}


