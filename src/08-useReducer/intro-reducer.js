
const initialState = [{
    id: 1,
    todo: 'Recolectar las esferas del dragón',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {

    if( action.type === '[TODO] add todo'){
        return [...state, action.payload  ]
    }

    return state;
}

let todos = todoReducer();

// Para modificar el reducer
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

//Enviamos una acción al todoReducer
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}
todos = todoReducer( todos, addTodoAction );

console.log( {state: todos} );









