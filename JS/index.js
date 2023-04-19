//Vars
var version = 'v4.0.1'
var copyrightyear = '2023'
var dark = localStorage.getItem('dark') || 'true';



//On Load
window.onload = function() {
  console.log(dark)
  console.log('Page Loaded')
  //Get Vars
  var body = document.getElementById('ModeSwitch');

  //Footer
  // Create the footer embed
  const embed = `
  <p> Copyright © ${copyrightyear} Oribia. All rights reserved </p>
  <p>${version} | <a href="https://meiibot.xyz"  target="_blank" rel="noopener noreferrer">Meii</a> | <a href="https://discord.gg/E23tPPTwSc"  target="_blank" rel="noopener noreferrer">Support Server</a></p>
  <br>
  `;
// Add the embed to the page
$('#footer').html(embed);


  //Dark Mode
  if(dark=='true'){
    body.classList.remove("body-light");
    body.classList.add("body-dark");
      // Create the icon embed
      const embed = `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="button-dark" viewBox="0 0 16 16">
      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
    </svg>
      `;
    // Add the embed to the page
    $('#ModeButton').html(embed);
  }else if(dark='false'){
        //Light Mode
        body.classList.remove("body-dark");
        body.classList.add("body-light");
        // Create the Icon embed
      const embed = `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="button-dark" viewBox="0 0 16 16">
      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
    </svg>
      `;
    // Add the embed to the page
    $('#ModeButton').html(embed);
  }
}

//Mode Button Click
function modeClick() {
  var body = document.getElementById('ModeSwitch');
    //Dark Mode
    if(dark=='true'){
      dark='false'
      localStorage.setItem('dark', dark);
      body.classList.remove("body-dark");
      body.classList.add("body-light");
        // Create the Icon embed
        const embed = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="button-dark" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
      </svg>
        `;
      // Add the embed to the page
      $('#ModeButton').html(embed);
      return
    }
    if(dark=='false'){
      //Light Mode
      dark='true'
      localStorage.setItem('dark', dark);
      body.classList.remove("body-light");
      body.classList.add("body-dark");
        // Create the icon embed
        const embed = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="button-dark" viewBox="0 0 16 16">
        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
      </svg>
        `;
      // Add the embed to the page
      $('#ModeButton').html(embed);
      return
    }
}
 
