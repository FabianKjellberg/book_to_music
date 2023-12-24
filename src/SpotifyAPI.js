import axios from "axios";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";

// Sök låtar med genrer
export const searchTracks = async (accessToken, genres) => {
    try {
        const response = await axios.get(
            `${SPOTIFY_API_BASE_URL}/recommendations`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {
                    seed_genres: genres.join(","),
                },
            }
        );

        return response.data.tracks;
    } catch (error) {
        console.error('Error seraching tracks on Spotify: ', error);
        throw error;
    }
};