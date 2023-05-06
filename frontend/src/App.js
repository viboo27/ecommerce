import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header.js"
import Register from "./component/layout/Register.js"




function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
