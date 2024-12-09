import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Entete from './MainComponent/entete'
import Corps from './MainComponent/corps'
import Pied from './MainComponent/pied'
import Graph from './GraphComponent/graph';
import Nouv from './NouvComponent/nouv';

import './App.css'

function App() {

  return (
    <>
      <Router>
        <div className="global_app">
        <Routes>
          <Route path="/" element={<> <Entete /> <Corps /> </>} />
          <Route path="/graph" element={<> <Entete /> <Graph /> </>} />
          <Route path="/nouv" element={<> <Entete /> <Nouv /> </>} />
        </Routes>
        
            
        </div>
      </Router>
    </>
  )
}

export default App
