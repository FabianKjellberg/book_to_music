import React, { useEffect, useState } from "react";
import UploadBookComponent from "./uploadBookComponent.jsx";
import BookViewer from "./bookViewer.jsx";
import { searchTracks } from "./SpotifyAPI.js";
import axios from 'axios';

const EpubViewer = ({ setShowPopup }) => {
  const [book, setBook] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const [tracks, setTracks] = useState([]);
  const createdPlaylistId = localStorage.getItem('createdPlaylistId');

  const sendSearchTermsToSpotifyApi = async (searchTerms) => {
    const accessToken = new URLSearchParams(window.location.hash.substring(1)).get('access_token');

    try {
      const response = await axios.get(
        'https://api.spotify.com/v1/search',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: searchTerms.searchTermArray.join(' '), // Lägger ihop söktermerna till en sträng
            type: 'track', // Söker efter pecifikt låtar
          },
        }
      );

      const foundTracks = response.data.tracks.items;
      console.log(foundTracks);
      setTracks(foundTracks);
      addTracks(accessToken, foundTracks, setShowPopup);
    } catch (error) {
      console.error('Error searching tracks on Spotify:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (createdPlaylistId) {
      console.log('Using playlist ID:', createdPlaylistId);
    }
  }, [createdPlaylistId]);

  useEffect(() => {
     if (tracks.length > 0) {
          // Denna används när förändringar skett i arrayen och den ska uppdateras igen
       addTracks(accessToken, tracks, setShowPopup);
     }
  }, [tracks, accessToken]);

  const addTracks = async (accessToken, tracksToAdd, setShowPopup) => {
    if (!createdPlaylistId) {
      console.error('No playlist ID found. Create a playlist first.');
      return;
    }
    console.log('Trying to add tracks to:', createdPlaylistId);

    try {
      const trackUris = tracksToAdd.map(track => track.uri);

      const response = await axios.post(
        `https://api.spotify.com/v1/playlists/${createdPlaylistId}/tracks`,
        {
          uris: trackUris,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Tracks added successfully:', response.data);
      setShowPopup(true);
    } catch (error) {
      console.error('Error adding tracks:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      {/*När en UploadBookComponent används behöver den se ut såhär eller så här <UploadBookComponent setBook={setBook} book={book}/> */}
      <UploadBookComponent setBook={setBook} book={book} />
      {/*När en BookViewer används behöver den se ut såhär eller så här <BookViewer book={book} sendSearchTermsToSpotifyApi={sendSearchTermsToSpotifyApi}/> */}
      <div className="flex-container">
        <BookViewer
          book={book}
          sendSearchTermsToSpotifyApi={sendSearchTermsToSpotifyApi}
        />
      </div>
    </>
  );
};
export default EpubViewer;
