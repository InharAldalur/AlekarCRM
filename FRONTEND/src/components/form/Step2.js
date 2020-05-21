import React, { useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step2 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.data
  });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/nuevo/step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='small-form'>
      <label>
        Matrícula:
        <input
          autoComplete='off'
          name="matricula"
          ref={register({ required: "Tienes que rellenar este campo" })}
        />
        <ErrorMessage errors={errors} name="matricula" as="p" className='p-error' />
      </label>
      <label>
        Marca:
        <input
          autoComplete='off'
          name="marca"
          ref={register({ required: "Tienes que rellenar este campo" })}
        />
        <ErrorMessage errors={errors} name="marca" as="p" className='p-error' />
      </label>
      <label>
        Modelo:
        <input
          autoComplete='off'
          name="modelo"
          ref={register({ required: "Tienes que rellenar este campo" })}
        />
        <ErrorMessage errors={errors} name="modelo" as="p" className='p-error' />
      </label>
      <button type="submit">SIGUIENTE </button> 
    </form>
  );
};

export default Step2;
