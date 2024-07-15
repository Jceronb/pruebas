//import { Children } from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = [{
//     id:123,
//     name: 'Jesus Cerón',
//     email: 'jesus@gmail.com'
// },
// {
//     id:124,
//     name: 'Maria Ortega',
//     email: 'maro@gmail.com'
// }

//]
export const UserProvider = ( {children} ) => {

    const [user, setUser] = useState();

  return (
    
        
        //<UserContext.Provider value={ {hola: 'Mundo', user} } >
        <UserContext.Provider value={ { user, setUser }} >
            { children }
        </UserContext.Provider>

  )
}





