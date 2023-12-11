import './bookViewer.css'
import React, { useEffect, useState, useRef } from "react";
import ePub from 'epubjs';

export default function BookViewer(props) {

    const viewerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        if(props.book) {
            const rendition = props.book.renderTo(viewerRef.current, {width: 600, height: 800});

            rendition.display();

            return () => {
                if (props.book) {
                    props.book.destroy();
                }
            };
        }
    }, [props.book]); //


    const goToPreviousPage = () => {
        const rendition = props.book.rendition;
        rendition.prev();
    };

    const goToNextPage = () => {
        const rendition = props.book.rendition;
        rendition.next();
    };

    const getTextForCurrentPage = async () => {
        const rendition = props.book.rendeition;
        console.log(rendition.getContents())
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

