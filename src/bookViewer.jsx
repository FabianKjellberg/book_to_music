import './bookViewer.css'
import React, { useEffect, useState, useRef } from "react";
import ePub from 'epubjs';
import OpenAiUtility from './openAiUtility.jsx'

export default function BookViewer(props) {

    const viewerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [renditioner, setRenditioner] = useState(null);



    useEffect(() => {
        if (props.book) {
            let rendition = props.book.renderTo(viewerRef.current, { width: 600, height: 800 });
            rendition.display();
            setRenditioner(rendition)

            return () => {
                if (props.book) {
                    props.book.destroy();
                }
            };
        }
    }, [props.book]); //


    const goToPreviousPage = () => {
        renditioner.prev();
    };

    function countWords(text){
        return text.split(" ").length
    }

    const goToNextPage = () => {
        console.log(renditioner.getContents());

        const oldURI = renditioner.getContents()[0].content.baseURI;
        renditioner.next().then(() =>{

            const newContent = renditioner.getContents()[0]
            const newURI = newContent.content.baseURI;
            const chapterText = newContent.content.innerText;

            if(oldURI !== newURI){
                console.log(newURI);
                console.log(chapterText)
                let wordCnt = countWords(chapterText)
                if(wordCnt > 150){
                    const filteredText = chapterText.replace(/[.,]/g, '');
                    console.log(wordCnt);
                    console.log(OpenAiUtility.getSentiment(filteredText))
                }
            }
        });

    //const getTextFromRenditioner = renditioner.getContents()[0].content.innerText;

    };



    return (
        <>
            {props.book &&
            <div>
                <div ref={viewerRef}></div>
                <button onClick={() => goToPreviousPage()}>Go to previous page</button>
                <button onClick={() => goToNextPage()}>Go to next page</button>
                <button onClick={() => getTextForCurrentPage()}>get text from this page</button>
            </div>}
        </>
    );
}

