import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import basura from './../../img/basura.png'
import faro from './../../img/faro.png'
import neumatico from './../../img/neumatico.png'
import aceite from './../../img/aceite.png'
import mas from './../../img/mas.png'


const Step3 = props => {
    const [visible,setVisible] = useState(true)
    const { state, action } = useStateMachine(updateAction);
    const { register, control, handleSubmit, reset } = useForm({
      defaultValues: {
        
      }
    });
  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/nuevo/result");
  };

  const { fields, append, remove} = useFieldArray(
    {
      control,
      name: "reparaciones"
    }
  );

return (    
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='repair-container'>
        <section className='repair-form'>
        <ul>
            {fields.map((item, index) => {
            return (
                <li key={item.id} className='li-delete'>
                <Controller
                    as={<input autoComplete='off'/>}
                    name={`reparaciones[${index}].reparacion`}
                    control={control}
                    defaultValue={item.reparacion} // make sure to set up defaultValue
                />
                <button type="button" onClick={() => remove(index)}>
                    <img src={basura} className='icon-centre'></img>
                </button>
                </li>
            );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({reparacion: "" });
          }}
        >
            <img src={mas} className='icon'></img>
            Nueva reparación
        </button>
      </section>
      {visible?<button type="submit">SIGUIENTE </button>:''}
       
    </section>
    <section className='most-used-repairs'>
        <h2>Reparaciones frecuentes</h2>
        <button
          type="button"
          onClick={() => {
            append({reparacion: "cambio de aceite"});
          }}
        ><img src={aceite} className='icon-centre'></img>
          Cambio de aceite
        </button>
        <button
          type="button"
          onClick={() => {
            append({reparacion: "cambio de ruedas" });
          }}
        ><img src={neumatico} className='icon-centre'></img>
          Cambio de ruedas
        </button>
        <button
          type="button"
          onClick={() => {
            append({reparacion: "cambio de faros" });
          }}
        ><img src={faro} className='icon-centre'></img>
          Cambio de faros
        </button>
    </section>
    </div>
</form>
    

  );
};

export default Step3;
