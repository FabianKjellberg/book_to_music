import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpotifyPlaylists = () => {
    const [accessToken, setAccessToken] = useState('');
    const [playlists, setPlaylists] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Extract token from URL hash
        const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');

        // Set the access token in state
        if (token) {
            setAccessToken(token);

            // Fetch user playlists
            fetchPlaylists(token);
        }
    }, []);

    const fetchPlaylists = async (token) => {
        try {
            // Example: Fetch user playlists using the Spotify Web API
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setPlaylists(response.data.items);
        } catch (err) {
            setError(err.message || 'Error fetching playlists');
        }
    };

    return (
        <div>
            {accessToken ? (
                <>
                    <h2>Your Spotify Playlists</h2>
                    {playlists.length > 0 ? (
                        <ul>
                            {playlists.map((playlist) => (
                                <li key={playlist.id}>{playlist.name}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No playlists found.</p>
                    )}
                </>
            ) : (
                <p>No access token available. Make sure you completed the Spotify authorization process.</p>
            )}

            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default SpotifyPlaylists;
