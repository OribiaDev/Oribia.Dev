import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// CSS
import './css/index.css'

//Sections
import './css/sections/mainBubble.css'
import './css/sections/projects.css'

//Components
import './css/components/spotify.css'
import './css/components/footer.css'
import './css/components/header.css'

//Pages
import './css/pages/404.css'

//Sections
import Footer from './components/footer.jsx'

//Pages
import Home from './pages/home.jsx'
import Four04 from './pages/404.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Four04 />} status={404}/>
        </Routes>
      <Footer/>
    </Router>
  </StrictMode>,
)
