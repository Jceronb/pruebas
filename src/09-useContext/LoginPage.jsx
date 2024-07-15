import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext );
    //console.log( hola, user );

    return (
      <>
          <h1>LoginPage <small>{user?.name} </small> </h1>
          <hr/>
          <pre>
            { JSON.stringify(user, null, 2) }
          </pre>

          <button 
            className="btn btn-primary"
            onClick={ () => setUser(
              [   
               { id:123,
                 name: 'Juan',
                 email: 'juan@gmail.com'
                },
                { id:124,
                  name: 'Cecilia',
                  email: 'cecilia@gmail.com'
                 }
                
              ]
                 )
                 
                 }
          >
            Establecer usuario
            </button>

      </>
    )
  }


