import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NovaReceita from "./NovaReceita";
import Receita from "./Receita";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
