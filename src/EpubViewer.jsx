import React, { useEffect, useState } from "react";
import UploadBookComponent from "./uploadBookComponent.jsx";
import BookViewer from "./bookViewer.jsx";
import { searchTracks } from "./SpotifyAPI.js";

const EpubViewer = () => {
  //en const book behövs för både UploadBookComponent och BookViewer
  const [book, setBook] = useState(null);

  //denna funktionen kallas på när man blädrar till ett nytt kapitel i bookViewer, använd för att styra spotifyPlayer
  function sendSearchTermsToSpotifyApi(searchTerms) {
    //searchTerms är en array av söktermer, den hämtar 4 ord per 3000 ord som finns i kapitlet
    console.log("Test av callback funktion");
    console.log(searchTerms);

    //här kan ni skicka in searchTerms till spotifyApi ##########################################################
      // hämtar Spotify access token från urlen
    const accessToken = new URLSearchParams(window.location.hash.substring(1)).get('access_token');

      const genres = ["lofi", "classical", "pop"];


      try {
          const tracks = searchTracks(accessToken, genres); // Hämtar låtar med genrer ( kolla SpotifyAPI.js för mer info )
          console.log(tracks); // You can now use the 'tracks' variable
      } catch (error) {
          console.error('Error in the main code: ', error);
          // Handle the error as needed
      }
  }

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
