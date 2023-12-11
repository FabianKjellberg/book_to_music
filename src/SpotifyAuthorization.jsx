// SpotifyAuthorization.jsx

import React, { useEffect } from 'react';

const SpotifyAuthorization = () => {
    useEffect(() => {
        const handleAuthorization = () => {
            const clientId = '6051b71871fd4966b5913a298f52c028';
            const redirectUri = 'http://localhost:5173/spotify-playlists';
            const scope = 'user-read-private user-read-email';
            const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;

            window.location.href = authorizeUrl;
        };

        handleAuthorization();
    }, []);

    return (
        <div>
            <p>Redirecting to Spotify for authorization...</p>
        </div>
    );
};

export default SpotifyAuthorization;
