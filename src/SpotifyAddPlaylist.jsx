/*
 * Är för tillfället sin egen endpoint /add-playlist
 *
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
        } catch (err) {
            setError(err.message || 'Error creating playlist');
        }
    };

    return (
        <div>
            {accessToken ? (
                <>
                    <h2>Create a Spotify Playlist</h2>
                    <div>
                        <label htmlFor="playlist-name">Name</label>
                        <input
                            id="playlist-name"
                            type="text"
                            value={playlistName}
                            onChange={handlePlaylistNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="playlist-description">Description</label>
                        <input
                            id="playlist-description"
                            type="text"
                            value={playlistDescription}
                            onChange={handlePlaylistDescriptionChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="playlist-public">Public</label>
                        <input
                            id="playlist-public"
                            type="checkbox"
                            checked={playlistPublic}
                            onChange={handlePlaylistPublicChange}
                        />
                    </div>
                    <Link to={`/`} className="button-link">
                        <button onClick={handleCreatePlaylist}>Create Playlist</button>
                    </Link>
                </>
            ) : (
                <p>No access token available. Make sure you completed the Spotify authorization process.</p>
            )}

            {error && <p>Error: {error}</p>}
        </div>
    );



};

export default SpotifyAddPlaylist;