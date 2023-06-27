import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Componet CSS
import './CSS/Componets/Background.css'
import './CSS/Componets/Navbar.css'
import './CSS/Componets/Footer.css'
import './CSS/Componets/Spotify.css'

//Webpage CSS
import './CSS/Pages/Global.css'
import './CSS/Pages/Home.css'
import './CSS/Pages/Projects.css'
import './CSS/Pages/Socials.css'
import './CSS/Pages/About.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

