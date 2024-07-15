
import { useConter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement,reset } = useConter();
  return (
    <>
        <h1>Counter With Hook: <div className='bg-danger text-white text-center' >{counter}</div>  </h1>
        <hr/>
        
        <button className="btn btn-primary" onClick={ ()=> increment (2) }> + 1 </button> 
        <button className="btn btn-primary" onClick={ reset } > Reset </button> 
        <button className="btn btn-primary" onClick={ ()=> decrement (2) }> - 1 </button>  
    </>
  )
}

