import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Store from "./Store";
import Navigation from "./NavigationBar";
import Request from "./Request";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/navigation" element={<Navigation />} />
          <Route path="about" element={<About />} />
          <Route path="store" element={<Store />} />
          <Route path="request" element={<Request />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
