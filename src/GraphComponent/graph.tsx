import '../App.css'
import React, { useState } from 'react';
import LineChart from './LineChart';

function Graph() {

    const [selectMon, setSelM] = useState("Dollars");

    const handleChange = (event) => {
        const monnaie = event.target.value;
        setSelM(monnaie);
    };

    return (
        <>
        <div className='global_g'>
            <select name="monnaie" id="monnaie" onChange={handleChange} value={selectMon} className='selec'>
                <option className='inp_g'>--Please choose an option--</option>
                <option value="Yen">Yen</option>
                <option value="Dollars">Dollars</option>
                <option value="Livre">Livre</option>
            </select>
            <LineChart monnaie={selectMon}/>
        </div>
            
        </>
    )
}

export default Graph
