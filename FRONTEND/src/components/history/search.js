import React from 'react'
import { useForm, ErrorMessage } from "react-hook-form";

function Search(props){
    const { errors,register } = useForm({
        
      });
    return(
        <>
        <form onChange={props.handleSearch} className='search-form'>
                <input
                autoComplete='off'
                placeholder='¿Qué quieres buscar?'
                name="search"
                ref={register({ required: "¿Qué quieres buscar?" })}
                />
                <ErrorMessage errors={errors} name="nombre" as="p" className='p-error'/>
        </form>
        </>
    )
}

export default Search