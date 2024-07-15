

import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';
import { useFetch, useCounter} from '../hooks';


export const Layout = () => {

  const { counter, increment } = useCounter (1);
  const { data, isLoading  } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
  const { author, quote} = !!data && data[0];

  return (
    <>
      <h1> Breaking Quotes</h1>
      <hr/>

      {
        isLoading
        ?<LoadingQuote  />
        : <Quote author = {author} quote = { quote}
        id={counter}
        />
      }     
      <button type="button"
          className='btn btn-outline-primary mt-2'
          onClick={()=> increment() }>
          Next quote
      </button>
    </>
  )
}
