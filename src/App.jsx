import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Store from "./Store";
import Layout from "./Layout";
import Request from "./Request";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pagelayout" element={<Layout/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/request" element={<Request/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
