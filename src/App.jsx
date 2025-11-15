import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import SpecialRequest from "./SpecialRequest";
import Admin from "./Admin";
import AdminEditing from "./AdminEditing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="store" element={<Store />} />
        <Route path="specialrequest" element={<SpecialRequest />} />
        <Route path="admin" element={<Admin />} />
        <Route path="adminediting" element={<AdminEditing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
