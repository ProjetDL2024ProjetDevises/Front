import '../App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Menu() {
    const nav = useNavigate();
    const location = useLocation(); // Récupérer la localisation actuelle
    const [activeButton, setActiveButton] = useState('');

    // Définir l'état initial en fonction de l'URL actuelle
    useEffect(() => {
        const currentPath = location.pathname.split('/')[1]; // Extraire la première partie après "/"
        setActiveButton(currentPath || 'accueil'); // Si l'URL est '/', définir 'accueil' par défaut
    }, [location]);

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
