import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import SpecialRequest from "./SpecialRequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="store" element={<Store />} />
        <Route path="specialrequest" element={<SpecialRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
