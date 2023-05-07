//Vars
var version = 'v4.1.2'
var copyrightyear = '2023'

//On Load
window.onload = function() {
  //Footer
  // Create the footer embed
  const embed = `
  <p> Copyright © ${copyrightyear} Oribia. All rights reserved </p>
  <p>${version} | <a href="https://meiibot.xyz"  target="_blank" rel="noopener noreferrer">Meii</a> | <a href="https://discord.gg/E23tPPTwSc"  target="_blank" rel="noopener noreferrer">Support Server</a></p>
  <br>
  `;
// Add the embed to the page
$('#footer').html(embed);
}

 
