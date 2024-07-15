
import React from "react";

export const Hijo = React.memo(  ({ numero, incrementar, decrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (

        <> 
        { <hr /> }

        <button
            className="btn btn-primary mr-5 "
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>

        

         <button
        className="btn btn-danger mr-3"
        onClick={ () => decrementar( numero ) }
        >
        { numero }
        </button>
        

        </>

    )
});
