import React, {useEffect, useState} from "react";
import "./mixbook.css";
import EpubViewer from "./EpubViewer";
import { Link } from "react-router-dom";


function MixBook() {
    const [accessToken, setAccessToken] = useState('');
    const [error] = useState(null);
    const [createdPlaylistName, setCreatedPlaylistName] = useState('');
    const [playlistCreated, setPlaylistCreated] = useState(false);
    const storedPlaylistName = localStorage.getItem('createdPlaylistName');

    useEffect(() => {
        // Extract token from URL hash
        const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');

        // Set the access token in state
        if (token) {
            setAccessToken(token);
        }
    });

    useEffect(() => {
      const playlistCreatedParam = new URLSearchParams(window.location.hash.substring(1)).get('playlist_created');
      
      if (playlistCreatedParam === 'true') {
        if (storedPlaylistName) {
            setCreatedPlaylistName(storedPlaylistName);
            setPlaylistCreated(true);
          }
      }
    }, [storedPlaylistName]);

  return (
    <div>
        { accessToken ? (
            <>
      <div className="flex-container">
      <Link to={`/add-playlist#access_token=${accessToken}`} className="button-link">
        <button className="start-button row generate_playlist_button">
          <p>Create new playlist</p>
        </button>
      </Link>
      </div>

      <div className="flex-container">
          {playlistCreated && (
              <p>Generating music to {createdPlaylistName}</p>
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
        <EpubViewer></EpubViewer>
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
