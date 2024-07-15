import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export default function CallbackHook() {

    const [counter, setCounter] = useState(10);

    // Para memorizar funciones
    const incrementFather = useCallback(
      //incrementar de 5 en 5
      (value) => { 
        setCounter((c) => c + value);
      },
      [],
    );

    //Useefect se dispara cuando cambia el padre
    useEffect(() => {
      
       //incrementFather();     

    }, [incrementFather])
    
    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

  return (
    <>
      <h1> useCallback Hook: { counter } </h1>
      <hr/>
      <ShowIncrement increment={incrementFather} />

    </>
  )
}


