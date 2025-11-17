import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import SpecialRequest from "./SpecialRequest";
import Admin from "./Admin";
import ServicesContext from "./ServicesContext"
import { useState } from "react";

function App() {
  const [services, setServices] = useState([])

  return (
    <ServicesContext.Provider value={{services, setServices}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="store" element={<Store />} />
        <Route path="specialrequest" element={<SpecialRequest />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </ServicesContext.Provider>
  );
}

export default App
