import React, {useEffect, useState} from "react";
import "./mixbook.css";
import EpubViewer from "./EpubViewer";
import { Link } from "react-router-dom";


function MixBook() {
    const [accessToken, setAccessToken] = useState('');
    const [error] = useState(null);
    const [createdPlaylistName, setCreatedPlaylistName] = useState('');
    const [playlistCreated, setPlaylistCreated] = useState(false);
    const [createdPlaylistId, setCreatedPlaylistId] = useState('');


    useEffect(() => {
        // Extract token from URL hash
        const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');

        // Set the access token in state
        if (token) {
            setAccessToken(token);
        }
    }, []);

    useEffect(() => {
      const playlistCreatedParam = new URLSearchParams(window.location.hash.substring(1)).get('playlist_created');
      
      if (playlistCreatedParam === 'true') {
        const storedPlaylistName = localStorage.getItem('createdPlaylistName');

        if (storedPlaylistName) {
            setCreatedPlaylistName(storedPlaylistName);
            setPlaylistCreated(true);
        }
      }
    }, []);

    useEffect(() => {
        const storedPlaylistId = localStorage.getItem('createdPlaylistId');

        if (storedPlaylistId) {
            // Do something with the playlist ID, e.g., set it in state
            setCreatedPlaylistId(storedPlaylistId);
        }
    }, []);


    const showPopup = () => {
      const popup = document.getElementById('popup');
      popup.style.display = 'block';
  
      setTimeout(() => {
        popup.style.display = 'none';
      }, 3000);
    };

  return (
    <div>
        { accessToken ? (
            <>
      <div className="flex-container">
          { playlistCreated ? (
              // Playlist has been created, show "View playlist" button
              <a
                href={`https://open.spotify.com/playlist/${createdPlaylistId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view_playlist"
                >
                    <button className="start-button playlist_button">
                        <p>View playlist</p>
                    </button>
                </a>
          ) : (
                // Playlist has not been created, show "Create playlist" button
                <Link to={`/add-playlist#access_token=${accessToken}`} className="button-link">
                    <button className="start-button playlist_button">
                        <p>Create new playlist</p>
                    </button>
                </Link>
          )}
      </div>

      <div className="flex-container">
          {playlistCreated && (
              <p>Generating music to: {createdPlaylistName}</p>
          )}
      </div>

      <div className="flex-container">
        <img
          className="star-divider mixbook-star-divider"
          src="https://cdn.discordapp.com/attachments/1078963035630223391/1184154715232161953/star.png?ex=658af104&is=65787c04&hm=0c67a1b2fda1045a48eda37875929485ff989e763e7b31289de05382d8c5a98b&"
          alt="Star Divider"
        />
      </div>

      <h1>File</h1>
      <div>
        <EpubViewer setShowPopup={showPopup} />
      </div>

      <div id="popup" className="popup">
        <p>Tracks added successfully!</p>
        <img src="https://cdn.discordapp.com/attachments/1183950307001122866/1193274369133248533/sign-check.png?ex=65ac1e5b&is=6599a95b&hm=db2096d19c767313937b4eb43f7d6c54bfaab278babbd1a47e2d3c8a9f6ca922&" 
        alt="Check Icon"/>
      </div>
            </>
        ) : (
            <p>No access token available. Make sure you completed the Spotify authorization process.</p>
        )}
        { error && <p>Error: {error}</p> }
    </div>
  );
}

export default MixBook;
