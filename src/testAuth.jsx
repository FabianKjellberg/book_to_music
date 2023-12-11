//import "./startpage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

//import bannerImage from './img/banner.png'

async function Authorize() {
    //const fixedGradient = "linear-gradient(90deg, rgba(66,109,170,1) 10%, rgba(175,185,201,1) 68%)";
    // <script src="https://sdk.scdn.co/spotify-player.js"></script>

    const [authorizationCode, setAuthorizationCode] = useState(null);

    useEffect(() => {
        const initiateSpotifyAuthorization = async () => {
            const generateRandomString = (length) => {
                const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const values = crypto.getRandomValues(new Uint8Array(length));
                return values.reduce((acc, x) => acc + possible[x % possible.length], "");
            }

            const sha256 = async (plain) => {
                const encoder = new TextEncoder()
                const data = encoder.encode(plain)
                return window.crypto.subtle.digest('SHA-256', data)
            }

            const base64encode = (input) => {
                return btoa(String.fromCharCode(...new Uint8Array(input)))
                    .replace(/=/g, '')
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_');
            }

            const codeVerifier = generateRandomString(64);
            const hashed = await sha256(codeVerifier)
            const codeChallenge = base64encode(hashed);

            const clientId = '6051b71871fd4966b5913a298f52c028';
            const redirectUri = 'http://localhost:5173';

            const scope = 'user-read-private user-read-email';
            const authUrl = new URL("https://accounts.spotify.com/authorize")

// generated in the previous step
            window.localStorage.setItem('code_verifier', codeVerifier);

            const params = {
                response_type: 'code',
                client_id: clientId,
                scope,
                code_challenge_method: 'S256',
                code_challenge: codeChallenge,
                redirect_uri: redirectUri,
            }

            authUrl.search = new URLSearchParams(params).toString();
            window.location.href = authUrl.toString();

            // response
            const urlParams = new URLSearchParams(window.location.search);
            let code = urlParams.get('code');

            if (code) {
                setAuthorizationCode(code);
                // Send the authorization code to your server for further processing
                axios.post('/your-server-endpoint', { code })
                    .then(response => {
                        // Handle the server response
                        console.log('Authorization successful:', response.data);
                        // You might want to redirect to another page or update your UI here
                    })
                    .catch(error => {
                        // Handle errors
                        console.error('Error during authorization:', error);
                        // You might want to display an error message or handle the error in some way
                    });
            } else {
                // Handle the case where the authorization code is not present
                console.error('Authorization code is missing');
                // You might want to display an error message or redirect to an error page
            }


        }

        initiateSpotifyAuthorization();
    },[]);

    return (
        <>
            <head>
                <title>Spotify Test</title>
                {/* Include any CSS styles if needed */}
            </head>
            <body>
            {authorizationCode ? (
                <div>
                    <h1>Authorization Successful!</h1>
                    {/* Display additional content or redirect to another page */}
                </div>
            ) : (
                <h1>Redirecting to Spotify for Authorization...</h1>
            )}
            </body>
        </>
    );
}

/*
window.onSpotifyWebPlaybackSDKReady = () => {
  const token = '[My access token]';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); },
    volume: 0.5
  });
 */

export default Authorize;
