import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = props => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/nuevo/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='small-form'>
      <label>
        Nombre:
        <input
          autoComplete='off'
          name="nombre"
          ref={register({ required: "Tienes que rellenar este campo" })}
        />
        <ErrorMessage errors={errors} name="nombre" as="p" className='p-error'/>
      </label>
      <button type="submit">SIGUIENTE </button> 
    </form>
  );
};

export default Step1;
