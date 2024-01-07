import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./spotifyAddPlaylist.css";
import { Link } from "react-router-dom";

const SpotifyAddPlaylist = () => {
    const [accessToken, setAccessToken] = useState('');
    // state för att skapa en playlist
    const [playlistName, setPlaylistName] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');
    const [playlistPublic, setPlaylistPublic] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Extract token from URL hash
        const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');

        // Set the access token in state
        if (token) {
            setAccessToken(token);
        }
    }, []);

    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
    };

    const handlePlaylistDescriptionChange = (event) => {
        setPlaylistDescription(event.target.value);
    };

    const handlePlaylistPublicChange = (event) => {
        setPlaylistPublic(event.target.checked);
    };

    const handleCreatePlaylist = async () => {
        try {
            const response = await axios.post(
                'https://api.spotify.com/v1/me/playlists',
                {
                    name: playlistName,
                    description: playlistDescription,
                    public: playlistPublic,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            console.log(response.data);

            localStorage.setItem('createdPlaylistId', response.data.id); // spara spellistan for future use
            localStorage.setItem('createdPlaylistName', response.data.name);
    
            // setPlaylistCreated(true);            /// finns inte?
        } catch (err) {
            setError(err.message || 'Error creating playlist');
        }
    };

    return (
        <div>
            {accessToken ? (
                <>
                <div className='flex-container new_playlist_form'>
                    <h2>Create a Spotify Playlist</h2>
                    <div>
                        <label htmlFor="playlist_name">Name: </label>
                        <input
                            id="playlist_name"
                            type="text"
                            value={playlistName}
                            onChange={handlePlaylistNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="playlist_description">Description: </label>
                        <input
                            id="playlist_description"
                            type="text"
                            value={playlistDescription}
                            onChange={handlePlaylistDescriptionChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="playlist_public">Public: </label>
                        <input
                            id="playlist_public"
                            type="checkbox"
                            checked={playlistPublic}
                            onChange={handlePlaylistPublicChange}
                        />
                    </div>
                    <Link to={`/mixbook#access_token=${accessToken}&playlist_created=true`}>
                        <button className="create_playlist_button" onClick={handleCreatePlaylist}>Create Playlist</button>
                    </Link>
                </div>
                </>
            ) : (
                <p>No access token available. Make sure you completed the Spotify authorization process.</p>
            )}

            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default SpotifyAddPlaylist;