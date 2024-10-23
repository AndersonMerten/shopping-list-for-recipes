import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NovaReceita from "./pages/NovaReceita";
import Receita from "./pages/Receita";
import NotFound from "./pages/NotFound";
import { Divider } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Divider />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>    
            <Route path="/NovaReceita" element={<NovaReceita/>}></Route> 
            <Route path="/Receita/:id" element={<Receita/>}></Route>   
            <Route path="*" element={<NotFound/>}></Route>        
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
