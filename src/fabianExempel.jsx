import React, { useEffect, useState } from "react";
import UploadBookComponent from './uploadBookComponent.jsx'
import BookViewer from './bookViewer.jsx'

const FabianExempel = () => {

    //en const book behövs för både UploadBookComponent och BookViewer
    const [book, setBook] = useState(null);

    //denna funktionen kallas på när man blädrar till ett nytt kapitel i bookViewer, använd för att styra spotifyPlayer
    function sendSearchTermsToSpotifyApi(searchTerms){
        //searchTerms är en array av söktermer, den hämtar 4 ord per 3000 ord som finns i kapitlet
        console.log("Test av callback funktion")
        console.log(searchTerms);
    }

    return(
        <>
            {/*När en UploadBookComponent används behöver den se ut såhär eller så här <UploadBookComponent setBook={setBook} book={book}/> */}
            <UploadBookComponent
                setBook={setBook}
                book={book}
            />
            {/*När en BookViewer används behöver den se ut såhär eller så här <BookViewer book={book} sendSearchTermsToSpotifyApi={sendSearchTermsToSpotifyApi}/> */}
            <BookViewer
                book={book}
                sendSearchTermsToSpotifyApi={sendSearchTermsToSpotifyApi}
            />
        </>
    )
}
export default FabianExempel;