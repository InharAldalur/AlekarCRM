import React,{useState,useEffect} from 'react'
import coche from './../../img/transportes.png'
import Search from './search'
import HistoryCars from './historyCars'
import CarPerfil from './carPerfil'


const API = process.env.REACT_APP_API

const History = () => {

    const [repairs,setRepairs] =useState([])
    const [selectedCarRepairs,setSelectedCarRepairs] =useState([])
    const [allRepairs,setAllRepairs] = useState([])
    const [actualHistory,chooseHistory] = useState(0)
    //actualHistory = 0 -> Car History
    //actualHistory = 1 -> Repairs History
    const [selectedCarName,setSelectedCarName] = useState('')

    const getRepairs = async() =>{
        await fetch(`${API}/repairs`,{
            method: 'GET',
            }
          ).then(response => response.json())
          .then(data => setValues(data)
            );
          
    }
    const deleteRepair = async(id) =>{
        await fetch(`${API}/delete/${id}`,{
            method: 'GET',
            }
          ).then(response => response.json())
          .then(getRepairs());       
    }

    const getOneRepair = async(matricula) =>{
        await fetch(`${API}/repairs/${matricula}`,{
            method: 'GET',
            }
          ).then(response => response.json())
          .then(data => setSelectedCarRepairs(data));       
    }

    useEffect(()=>{
        getRepairs()
    },[])

    function setValues(data,all){
        setAllRepairs(data)
        setRepairs(data)
    }
    function selectCar(matricula,nombre){
        chooseHistory(1)
        setSelectedCarName(nombre)
        getOneRepair(matricula)
    }
    function back(){
        chooseHistory(0)
        getRepairs()
    }

    function filter(search){
        const filterRepairs = []
        if (search ==''){
            setRepairs(allRepairs) 
        }
        else{
            allRepairs.map(repair =>{
                console.log(repair)
                if (repair.matricula.startsWith(search)||repair.nombre.toLowerCase().startsWith(search)||repair.marca.toLowerCase().startsWith(search)){
                    filterRepairs.push(repair)
                    console.log('filter',filterRepairs)
                }
                })
            setRepairs(filterRepairs) 
        }
    }
    function handleSearch(e){
        console.log(e.target.value)
        const search = e.target.value.toLowerCase()
        filter(search)
    
    }
    console.log('actual',actualHistory)
    
    return(
        
        <div>
            <h1 style={{textAlign:'left'}}>Historial de reparaciones</h1>
                <Search handleSearch ={handleSearch} />
                                {actualHistory == 0 ?
                                    <HistoryCars 
                                        repairs = {repairs}
                                        selectCar ={selectCar} 
                                    />
                                    :
                                    <CarPerfil 
                                        repairs = {selectedCarRepairs}
                                        deleteRepair ={deleteRepair}
                                        back = {back}
                                    /> }
                                                       
                            </div>

    )
}

export default History