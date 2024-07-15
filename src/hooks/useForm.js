
import { useState } from "react";
export const useForm = ( initialForm = {} ) => {
 
    //Mantener el estado del formulario
    const [formState, setFormState] = useState( initialForm )

    const onInputChange = ({target} ) => {
        const { name, value } = target;
        setFormState(
            {
                ...formState,
                [ name ]: value
            }
        )
    }

        const onResetForm = () =>{
        setFormState(initialForm);
    }


return {
    ...formState,
    //formState,
    onInputChange,
    onResetForm,

}

}




