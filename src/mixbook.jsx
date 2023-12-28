import React, {useEffect, useState} from "react";
import "./mixbook.css";
import EpubViewer from "./EpubViewer";
import { Link } from "react-router-dom";


function MixBook() {



    const [accessToken, setAccessToken] = useState('');
    const [error] = useState(null);

    useEffect(() => {
        // Extract token from URL hash
        const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');

        // Set the access token in state
        if (token) {
            setAccessToken(token);
        }
    });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
        { accessToken ? (
            <>
      <h1>Type</h1>
      <div className="flex-container">
        <form onSubmit={handleSubmit}>
          <div className="button">
            <input type="radio" name="type" value="page" id="page" />
            <label htmlFor="page">Page</label>

            <input type="radio" name="type" value="chapter" id="chapter" />
            <label htmlFor="chapter">Chapter</label>

            <input type="radio" name="type" value="book" id="book" />
            <label htmlFor="book">Book</label>
          </div>
        </form>
      </div>

      <div className="flex-container">
        <img
          className="star-divider"
          src="https://cdn.discordapp.com/attachments/1078963035630223391/1184154715232161953/star.png?ex=658af104&is=65787c04&hm=0c67a1b2fda1045a48eda37875929485ff989e763e7b31289de05382d8c5a98b&"
          alt="Star Divider"
        />
      </div>

      <h1>Genre</h1>
      <div className="flex-container">
        <form onSubmit={handleSubmit}>
          <div className="button">
            <input type="radio" name="type" value="lofi" id="lofi" />
            <label htmlFor="lofi">Lo-Fi</label>

            <input type="radio" name="type" value="classical" id="classical" />
            <label htmlFor="classical">Classical</label>

            <input type="radio" name="type" value="pop" id="pop" />
            <label htmlFor="pop">Pop</label>
          </div>
        </form>
      </div>

      <div className="flex-container">
        <img
          className="star-divider"
          src="https://cdn.discordapp.com/attachments/1078963035630223391/1184154715232161953/star.png?ex=658af104&is=65787c04&hm=0c67a1b2fda1045a48eda37875929485ff989e763e7b31289de05382d8c5a98b&"
          alt="Star Divider"
        />
      </div>

      <h1>File</h1>
      <div>
        <EpubViewer></EpubViewer>
      </div>

      <div className="flex-container">
        <Link to={`/add-playlist#access_token=${accessToken}`} className="button-link">
          <button className="start-button row generate_playlist_button">
            <p>Generate playlist</p>
          </button>
        </Link>
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
