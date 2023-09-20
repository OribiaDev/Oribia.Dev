//Vars
var version = 'v5.2.0'
var copyrightyear = '2023'

const Footer = () => {
    return ( 
        <div className="footer">
            <p> Copyright © {copyrightyear} Oribia. All rights reserved </p>
            <p>{version} | <a href="https://meiibot.xyz"  target="_blank" rel="noopener noreferrer">Meii</a> | <a href="https://discord.gg/E23tPPTwSc"  target="_blank" rel="noopener noreferrer">Support Server</a></p>
            <br />            
        </div>
     );
}
 
export default Footer;

//Info on left; links and misc on right