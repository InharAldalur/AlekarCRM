import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import coche from './../../img/transportes.png'
import iconMecanico from './../../img/herramienta.png'
import { useHistory } from "react-router-dom";

const API = process.env.REACT_APP_API

const Result = props => {
  const { state } = useStateMachine(updateAction);
  console.log('estado actual',state)
  const { push } = useHistory();

  async function handleSubmit(e){
    e.preventDefault()
    console.log(state.data.reparaciones)
    const reparaciones = JSON.stringify(state.data.reparaciones)
    console.log(reparaciones)
    await fetch(`${API}/addRepair`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 	matricula:state.data.matricula,
                              marca:state.data.marca,
                              modelo:state.data.modelo,
                              nombre:state.data.nombre,
                              reparaciones:reparaciones,
                             })
    }
    ); 
  }
  return (
    <div className="container">
      <div className='resume-row'>
        <div className='resume-column'>
          <p className='text-titulo'>Nombre</p>
          <p className='text'>{state.data.nombre}</p>
        </div>
        <div className='resume-column'>
          <p className='text-titulo'>Matrícula</p>
          <p className='text'>{state.data.matricula}</p>
        </div>
        <div className='resume-column-car'>
          <img src={coche} className='icon-centre-coche'></img>
          <p className='text'>{state.data.marca} {state.data.modelo}</p>
        </div>
      </div>
      <div className='repairs-resume-row'>
        <p className='text-titulo'>Reparaciones</p>
        {state.data.reparaciones.map(repair => 
          <div className='resume-column-repairs'>
          <img src={iconMecanico} className='icon-centre-coche'></img>
          <p className='text'>{repair.reparacion}</p>
          </div>)}

      </div>
      
      <button type='button' onClick ={handleSubmit}>FINALIZAR</button>
    </div>
  );
};

export default Result;
