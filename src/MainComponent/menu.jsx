import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const nav = useNavigate();
    const [activeButton, setActiveButton] = useState('accueil'); // Par défaut, le bouton accueil est actif

    const handleNavigation = (path, buttonName) => {
        setActiveButton(buttonName); // Mettre à jour le bouton actif
        nav(path); // Naviguer vers la route spécifiée
    };

    return (
        <>
            <div className='menu'>
                <div className='graph'>
                    <h3
                        className={`titre_m ${activeButton === 'accueil' ? 'active' : ''}`}
                        onClick={() => handleNavigation("/", 'accueil')}
                    >
                        Page d'accueil
                    </h3>
                </div>
                <div className='graph'>
                    <h3
                        className={`titre_m ${activeButton === 'graph' ? 'active' : ''}`}
                        onClick={() => handleNavigation("/graph", 'graph')}
                    >
                        Graphique des cours
                    </h3>
                </div>
                <div className='graph'>
                    <h3
                        className={`titre_m ${activeButton === 'nouv' ? 'active' : ''}`}
                        onClick={() => handleNavigation("/nouv", 'nouv')}
                    >
                        Nouveau cours
                    </h3>
                </div> 
            </div>
        </>
    );
}

export default Menu;
