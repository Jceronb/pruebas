import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' )) || [];
}


export default function useTodos() {

    const [todos, dispatch] = useReducer (todoReducer, [], init );

    useEffect(() => {
      
        localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [todos])
    

    const handleNewTodo = (todo) => {
        // Enviamos el payload al reducer
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        // Enviamos la acción al reducer usando el dispach
            dispatch( action );
    }

    const handleDeleteTodo = ( id )=> {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        } );
    }

    const handleToggleTodo = ( id )=> {
            dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
         } );
    }

    return{
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        
    }

    
}


