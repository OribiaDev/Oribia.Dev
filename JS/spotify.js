 //Spotify
 // Set your Last.fm username and API key
 const lastfmUsername = 'OribiaDev';
 const lastfmApiKey = '00e84c8666f1b5b8665d4f3200c9ba4d';

 // Retrieve your current Spotify activity from Last.fm
 $.getJSON(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfmUsername}&api_key=${lastfmApiKey}&format=json&limit=1`, data => {
   const track = data.recenttracks.track[0];
   
   // Check if you're currently listening to a Spotify track
   if (track['@attr']) {
    //Yes Track
     const artist = track.artist['#text'];
     const title = track.name;
     const url = track.url;
     const image = track.image[3]['#text'];
     const container = document.getElementsByClassName('nowPlayingContainer')[0]
     // Create the Spotify activity embed
     const embed = `
     <div class="nowPlayingBox">
        <div id="trackArtwork"><a href="${url}"><img src="${image}"></a></div>
        <div class="trackInfo">
            <p id="trackName"><a href="${url}">${title}</a></p>
            <div id="artist"><a href="${url}">${artist}</a></div>
            <br>
            <div id="spotifyinfo">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
            </svg>
            Spotify
            </div>
        </div>
    </div>
     `;

     // Add the embed to the page
     $('#nowPlayingContainer').html(embed);
     $('.nowPlayingBox').css("backgroundImage", "url('" + image + "')");
     $('.SpotifyContainer').css("animation-play-state", "running");

   }else{
    // Not playing a spotify track
    const artist = 'N/A';
    const title = 'Nothing is playing :(';
    const image = './Img/not-playing.png';
    url='N/A';
    const container = document.getElementsByClassName('nowPlayingContainer')[0]
    // Create the Spotify activity embed
    const embed = `
    <div class="nowPlayingBox">
       <div id="trackArtwork"><img src="${image}"></div>
       <div class="trackInfo">
           <p id="trackName">${title}</a></p>
           <div id="artist">${artist}</div>
           <br>
           <div id="spotifyinfo">
           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
           <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
           </svg>
           Spotify
           </div>
       </div>
   </div>
    `;

    // Add the embed to the page
    $('#nowPlayingContainer').html(embed);
    $('.nowPlayingBox').css("background", "radial-gradient(ellipse at top left, #9384b9 25%, #655a81 75%)");
    $('.SpotifyContainer').css("animation-play-state", "running");
   }
 });

