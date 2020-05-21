import React,{useState,useEffect} from 'react'
import basura from './../../img/basura.png'
import iconMecanico from './../../img/icon-mecanico.png'
import fecha from './../../img/interfaz.png'

const CarPerfil = (props) => {
    console.log(props)
    const allRepairs = []
    const allDates = []
    props.repairs.map(repair => allRepairs.push(repair.reparaciones))
    props.repairs.map(repair => allDates.push(repair.fecha))
    const finalRepairs = allRepairs.map(repair => JSON.parse(repair),
    console.log())
    console.log('important',finalRepairs)
    
    return(   
        <div>    
                                      
            {finalRepairs.map((repair,index) => 
                <div className='row-repair'>
                    <div className='column-repair'>
                    <img src={fecha} className='icon-centre-coche'></img>
                    {allDates[index]}
                    </div>
                    <div className='column-repair'> 
                        <img src={iconMecanico} className='icon'/>              
                        {repair.map(eachRepair=>
                            <div className='history-repairs'>
                                 {eachRepair.reparacion}
                            </div>           
                       )}
                    </div>
                    <button type="button" >
                                <img src={basura} className='icon-centre'></img>
                            </button>                
                </div>

            )}
                <button type="submit" onClick={() => props.back()}>
                    <p style={{color:'white'}}>Volver</p>
                </button>                        
        </div>
    )
}

export default CarPerfil