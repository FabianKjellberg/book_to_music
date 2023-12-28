import React, { useEffect, useState, useRef } from "react";
import ePub from "epubjs";
import OpenAiUtility from "./openAiUtility.jsx";
import UtilityFunctions from "./utilityFunctions.jsx";

export default function BookViewer(props) {
  const viewerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [renditioner, setRenditioner] = useState(null);

  const wordsPerChunk = 3000; //hur många ord som kan användas i openAI per chunk

  //Denna metod körs varje gång props.book ändras
  useEffect(() => {
    //om en bok finns, så renderas boken
    if (props.book) {
      let rendition = props.book.renderTo(viewerRef.current, {
        //Ändra på detta om ni vill ändra på sotrleken på readern
        width: 600,
        height: 800,
      });
      rendition.display();
      setRenditioner(rendition);

      return () => {
        if (props.book) {
          props.book.destroy();
        }
      };
    }
  }, [props.book]); //

  //gå tillbaka en sida
  const goToPreviousPage = () => {
    console.log(renditioner.getContents());
    const oldURI = renditioner.getContents()[0].content.baseURI;
    renditioner.prev().then(() => {
      checkForNewChapter(oldURI, renditioner.getContents()[0]);
    });
  };

  //gå fram en sida
  const goToNextPage = () => {
    console.log(renditioner.getContents());
    const oldURI = renditioner.getContents()[0].content.baseURI;
    renditioner.next().then(() => {
      checkForNewChapter(oldURI, renditioner.getContents()[0]);
    });
  };

  const checkForNewChapter = async (oldURI, newContent) => {
    const newURI = newContent.content.baseURI;

    if (oldURI !== newURI) {
      const chapterText = newContent.content.innerText;
      let wordCnt = UtilityFunctions.wordCount(chapterText);

      if (wordCnt > 150) {
        const filteredText = chapterText.replace(/[.,]/g, "");

        const splitText = UtilityFunctions.splitStringByWords(
          filteredText,
          wordsPerChunk
        );

        console.log(splitText);

        const searchTermArray = await getApiStrings(splitText);

        const termToSend = {
          wordCount: wordCnt,
          searchTermArray: searchTermArray
        };

        props.sendSearchTermsToSpotifyApi(termToSend);
      }
    }
  };

  const getApiStrings = async (textArray) => {
    const returnStrings = [];

    for (const text of textArray) {
      try {
        const response = await OpenAiUtility.getSentiment(text);
        returnStrings.push(response);
      } catch (error) {
        console.error("something went wrong with getting the search terms");
      }
    }

    return returnStrings;
  };

  return (
    <>
      {props.book && (
        <div>
          <div className="flex-container">
            <button onClick={() => goToPreviousPage()} className="book_button">
              Go to previous page
            </button>
            <button onClick={() => goToNextPage()} className="book_button">
              Go to next page
            </button>
            <button
              onClick={() => getTextForCurrentPage()}
              className="book_button"
            >
              Get text from this page
            </button>
          </div>
          <div ref={viewerRef}></div>
        </div>
      )}
    </>
  );
}
