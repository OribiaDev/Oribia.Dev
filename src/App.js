//Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from './Webpages/Home'
import Projects from "./Webpages/Projects";
import Socials from "./Webpages/Socials";
import About from "./Webpages/About";
import Four04 from "./Webpages/404";

//Componets
import Navbar from './Webpages/Componets/NavBar'
import Footer from './Webpages/Componets/Footer'


function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />  
          <Route path="/socials" element={<Socials />} /> \
          <Route path="/about" element={<About />} /> 
          <Route path="*" element={<Four04 />} />
        </Routes>
      <Footer />
      </div>
    </div>
  </Router>
  );
}

export default App;
