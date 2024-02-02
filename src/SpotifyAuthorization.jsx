import React, { useEffect, useState } from 'react';


const SpotifyAuthorization = () => {
    useEffect(() => {
    const handleAuthorization = () => {
        const clientId = '6051b71871fd4966b5913a298f52c028';
        //const redirectUri = 'http://localhost:5173/spotify-playlists';

        const [redirectUri] = useState(window.location.pathname);
        //const redirectUri = 'http://localhost:5173/mixbook';
        const scope =
            'user-read-private user-read-email ' +
            'playlist-modify-public ' +
            'playlist-modify-private';
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
