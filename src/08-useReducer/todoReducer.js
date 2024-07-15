
export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            //Regresamos un arreglo porque el estado inicial es un arreglo
            return [ ...initialState, action.payload  ]
        // Para borrar un todo
        case '[TODO] Remove Todo': 
            return initialState.filter( todo => todo.id !== action.payload ); 
        // Para marcar un todo
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if (todo.id === action.payload){// id
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            } ) ;  
            
        default:
            return initialState;
    }


}



