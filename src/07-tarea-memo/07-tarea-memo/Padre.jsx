
import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    let initialValue = 0;
    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(initialValue);

    const incrementar = useCallback(
        ( num ) => {
            setValor( (oldValue) => oldValue + num )
        },

      [],
    );

    const decrementar = useCallback(

        ( num2 ) => {
            
            setValor(
                
                (oldValue) => oldValue - num2 )
                
        },

      [],
    );
    
    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar}
                        decrementar={ decrementar}
                    />
                ))
            }

                
        </div>
    )
}
