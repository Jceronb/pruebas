import useTodos from "../hooks/useTodos";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


//const initialState= [];

export const TodoApp = () => {

    // useTodo
    // todos, handleDeleteTodo, handleToggleTodo, handleNewTodo
    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos();
    
  return (
    <>
        <h1>TodoApp: { todosCount } , <small>Pendientes: { pendingTodosCount } </small> </h1>
        <hr/>

        <div className="row">
            <div className="col-7">

                {/* // Llamamos al componente TodoList con las listas de tareas */}
                <TodoList 
                    todos={todos}
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                    />
                </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                
                <TodoAdd onNewTodo={ handleNewTodo } /> 
                       
            </div>

        </div>

    </>
  )
}


