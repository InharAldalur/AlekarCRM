import React,{useState,useEffect} from 'react'
import coche from './../../img/transportes.png'




const HistoryCars = (props) => {

    
    return(    
        <>  
                        <div class="limiter">
                    <div class="container-table100">
                        <div class="wrap-table100">
                            <div class="table">
                                <div class="row header">
                                    <div class="cell">
                                        Nombre
                                    </div>
                                    <div class="cell">
                                        Matrícula
                                    </div>
                                    <div class="cell">
                                        Coche
                                    </div>
                                </div>         
            {props.repairs.map(repair =>                            
                <div class="row" onClick={()=>props.selectCar(repair.matricula,repair.nombre)}>
                    <div class="cell" data-title="Full Name">
                        {repair.nombre}
                    </div>
                    <div class="cell" data-title="Age">
                        {repair.matricula}
                    </div>
                    <div class="cell" data-title="Job Title">
                        <img src={coche} className='icon-centre-coche'></img>
                        {repair.marca} {repair.modelo}
                    </div>
                    </div>
            )}
           </div></div></div></div>                        
        </>
    )
}

export default HistoryCars