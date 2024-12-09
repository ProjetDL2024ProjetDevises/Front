import '../App.css'
import Menu from './menu'
import React from 'react';

function Entete() {

  return (
    <>
        <div className='global_e'>
          <div className='entete'>
            <img src='src\assets\logo.png' className='img_e'></img>
            <h1 className='titre_e'>Cours des devises monnétaires</h1>
          </div>
          <Menu />
        </div>
        {/* <div className='blanc'></div> */}
        
    </>
  )
}

export default Entete
