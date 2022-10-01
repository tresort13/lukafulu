import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import FormEnvoiFulu from './pages/FormEnvoiFulu'
import { BrowserRouter, Routes ,Route} from "react-router-dom";





    
function App() {
  

  return ( 
    
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Home />}>
        </Route>

        <Route path="/form_envoi_fulu" element={<FormEnvoiFulu />}>
        </Route>


      </Routes>
     
    </BrowserRouter>    
  );
}

export default App;

