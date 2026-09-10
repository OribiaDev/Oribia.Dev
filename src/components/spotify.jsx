import { useEffect, useState } from "react";

const lastfmUsername = 'OribiaDev';
const lastfmApiKey = '00e84c8666f1b5b8665d4f3200c9ba4d';

const Spotify = () => {
    const [artist, setArtist] = useState();
    const [title, setTitle] = useState();
    const [url, setURL] = useState();
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfmUsername}&api_key=${lastfmApiKey}&format=json&limit=1`)
            .then(res => res.json())
            .then(json => {
                const track = json.recenttracks.track[0];

                setArtist(track.artist['#text']);
                setTitle(track.name);
                setURL(track.url);
                setImage(track.image[3]['#text']);
            });
    }, []);

    const loading = !title;

    return (
        <div className="spotifyContainer">
            <div className="trackArtworkContainer">
                <div className={`artworkPlaceholder ${loading ? "visible" : ""}`}></div>
                <a href={url} className={loading ? "hiddenContent" : "loadedContent"}>
                    <img src={image} className="trackArtwork" alt="" />
                </a>
            </div>
            <div className="trackInfoContainer">
                <div className="listeningToo">
                    Currently listening to..
                </div>
                <div className="infoContainer">
                    <div className={`trackName ${loading ? "loadingText" : "textLoaded"}`}>
                        <a href={url}> {title}</a>
                    </div>
                    <div className={`artist ${loading ? "loadingText" : "textLoaded"}`}>
                        <a href={url}> {artist} </a>
                    </div>
                </div>
                <div className="spotifyinfo">
                    <img src="/util/SpotifyLogo.png" className="spotifyLogo" alt="Spotify" />
                </div>
            </div>

        </div>
    );
}

export default Spotify;
