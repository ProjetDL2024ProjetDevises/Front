import '../App.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const nav = useNavigate();

    const handleAccueil = () => {
        nav("/"); 
    };

    const handleGraph = () => {
        nav("/graph"); 
    };

    const handleNouv = () => {
        nav("/nouv"); 
    };

    return (
        <>

            <div className='menu'>
                <div className='graph'>
                    <h3 className='titre_m' onClick={handleAccueil}>Page d'accueil</h3>
                </div>
                <div className='graph'>
                    <h3 className='titre_m' onClick={handleGraph}>Graphique des cours</h3>
                </div>
                <div className='nouv'>
                    <h3 className='titre_m' onClick={handleNouv}>Nouveau cours</h3>
                </div> 
            </div>

            
            
        </>
    )
}

export default Menu
