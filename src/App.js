import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import C1 from './c1'
import C2 from './c2';
import Nav from './nav';
import About from './about';

const App = () => {
  return (
    <>

    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route exact path="/" element={<C1/>}/>
        <Route exact path="/c2" element={<C2/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App