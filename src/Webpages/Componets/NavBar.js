import NavBarIcon from "./NavBarIcon";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [darkTheme, setDarkTheme] = useState();
    const storedDarkTheme = localStorage.getItem('darkTheme') || true

    useEffect(() => {
        if(storedDarkTheme=='true'){
            switchTheme(true)
        }else if(storedDarkTheme=='false'){
            switchTheme(false)
        }
    }, [storedDarkTheme]);


    function switchTheme(darkTheme) {
        if (darkTheme) {
            //Turn to Dark
            setDarkTheme(true)
            localStorage.setItem('darkTheme', true);
            document.documentElement.className = ""

        } else {
            //Turn to Light
            setDarkTheme(false)
            localStorage.setItem('darkTheme', false);
            document.documentElement.className= "theme-light"
        }
    }

    //Check if light theme
    function isLight() {
        return document.documentElement.classList.contains("theme-light");
    }
    
    //Click Handler
    function themeOnClick(){
        switchTheme(isLight());
    }

    return ( 
        // <!-- Nav Bar -->
        <div className="NavBar">
            <div className="NavLinks">
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi-bi-house-fill" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                    </svg>
                Home
                </Link>
                <Link to='/projects' className="NavLinkSpacing">Projects</Link>
                <Link to='/socials' className="NavLinkSpacing">Socials</Link>
                <Link to='/about' className="NavLinkSpacing">About</Link>
                <button onClick={themeOnClick} type="button"><NavBarIcon darkTheme={darkTheme}/></button>
            </div>
        </div>
     );
}
 
export default NavBar;