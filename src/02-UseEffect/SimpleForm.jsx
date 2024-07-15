
import { useEffect, useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {

    //Mantener el estado del formulario
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'jcer@google.com'
    } )

    //Desestructuramos el formState
    const { username, email } = formState;

    const onInputChange = ({target} ) => {
        const { name, value } = target;
        setFormState(
            {
                ...formState,
                [ name ]: value
            }
        )
    }

    useEffect(() => {
      //console.log('useEffect se llamó!')
    },[]);

    useEffect(() => {
       // console.log('formState cambió!')
      },[formState]);
    
    useEffect(() => {
       // console.log('email cambió!')
      },[email]);
  return (
    <>
        <h1>Formulario Simple</h1>

        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={ onInputChange }
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="jceron945@gmail.com"
            name="email"
            value={email}
            onChange={ onInputChange }
        />

        {
                (username === 'strider2' && <Message/>)
        }
      
    </>
  )
}






