import { useEffect, useState } from "react";

const LocalCache = {
  
};
export const useFetch = (url) => {

const [state, setstate] = useState( {
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
});

useEffect(() => {
    getFetch();
}, [url]);

const setLoadingState = () => {
  setstate( {
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  })
}

const getFetch = async() => {

  if(LocalCache[url]){
    console.log('Usando caché');
    setstate(
      {
        data: LocalCache[url],
        isLoading: false,
        hasError: false,
        error: null,

      }
    )
    return;
  }

  setLoadingState();

    const resp = await fetch( url );


    //Si hay algún error al solicitar la url

    //sleep
    await new Promise(resolve => setTimeout(resolve, 1500));

      if( !resp.ok){
        setstate(
          {
            data: null,
            isLoading: false,
            hasError: true,
            error: {
              code: resp.status,
              message: resp.statusText,
            }

          }
        );
        return;
      }


      //si no hay error..
    const data = await resp.json();
    setstate(
      {
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
      }
    )

    //manejo del caché

   LocalCache[url] = data;
}

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

  }
}


