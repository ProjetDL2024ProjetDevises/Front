import '../App.css'
import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';
import axios from 'axios';

function Graph() {

    const [selectMon, setSelM] = useState("Dollars");
    const [monnaies, setMonnaies] = useState([]);

    const handleChange = (event) => {
        const monnaie = event.target.value;
        setSelM(monnaie);
    };

    // console.log(`test env : ${import.meta.env.VITE_APP_API_ADRESSE}`)

    useEffect(() => {
        const fetchMonaies = async () => {
            try{
                const reponse = await axios.get(` ${import.meta.env.VITE_APP_API_ADRESSE}api/monnaie`)
                console.log(reponse)
                setMonnaies(reponse.data.data)
            } catch{
    
            }
        }

        fetchMonaies()
    })
    //console.log("ezdsdq")
    //console.log(monnaies)
    return (
        <>
        <div className='global_g'>
            <select name="monnaie" id="monnaie" onChange={handleChange} value={selectMon} className='selec'>
                <option className='inp_g'>--Please choose an option--</option>
                {monnaies.map(monnaie => {
                    return <option className={monnaie}>{monnaie}</option>
                })}
            </select>
            <LineChart monnaie={selectMon}/>
        </div>
            
        </>
    )
}

export default Graph
