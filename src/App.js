import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  ItemState } from "./context/ItemContext";


function App() {
  return (
    <div>
      <Router>
      <Navigation/>
      <ItemState>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/men's clothing" element={<Home category="men's clothing" />} />
          <Route path="/jewelery" element={<Home category="jewelery" />} />
          <Route path="/electronics" element={<Home category="electronics" />} />
          <Route path="/women's clothing" element={<Home category="women's clothing" />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </ItemState>
      </Router>
    </div>
  );
}

export default App;
