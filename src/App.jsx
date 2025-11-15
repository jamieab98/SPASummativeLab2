import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Request from "./Request";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="store" element={<Store />} />
        <Route path="request" element={<Request />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
