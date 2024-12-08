import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import FormPage from "./components/FormPage";
import Home from "./components/Home";

const App: React.FC = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<FormPage/>}/>
         </Routes>
      </div>
   );
}

export default App;
