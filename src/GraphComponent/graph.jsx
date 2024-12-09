import '../App.css'
import React, { useState } from 'react';
import LineChart from './LineChart';
import axios from 'axios';

function Graph() {

    const [selectMon, setSelM] = useState("Dollars");
    const [monnaies, setMonnaies] = useState(null);

    const handleChange = (event) => {
        const monnaie = event.target.value;
        setSelM(monnaie);
    };

    // console.log(`test env : ${import.meta.env.REACT_APP_API_ADRESSE}`)
    const fetchMonaies = async () => {
        try{
            const reponse = await axios.get(`${import.meta.env.REACT_APP_API_ADRESSE}/api/donnee`)
            console.log(reponse)
            setMonnaies(reponse.data)
        } catch{

        }
    }
    fetchMonaies()

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
