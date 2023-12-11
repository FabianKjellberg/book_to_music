import React, { useEffect, useState } from "react";
import GoogleUtility from './googleUtility.jsx'
import UploadBookComponent from './uploadBookComponent.jsx'
import BookViewer from './bookViewer.jsx'

const GoogleTest = () => {

    const [book, setBook] = useState(null);

    const testText = '“day\n' +
        'of this beloved friend that Emma first sat in mournful thought of\n' +
        'any continuance. The wedding over, and the bride-people gone, her\n' +
        'father and herself were left to dine together, with no prospect of\n' +
        'a third to cheer a long evening. Her father composed himself to\n' +
        'sleep after dinner, as usual, and she had then only to sit and\n' +
        'think of what she had lost.\n' +
        'The event had every promise of happiness for her friend. Mr.\n' +
        'Weston was a man of unexceptionable character, easy fortune,\n' +
        'suitable age, and pleasant manners; and there was some satisfaction\n' +
        'in considering with what self-denying, generous friendship she had\n' +
        'always wished and promoted the match; but it was a black morning\'s\n' +
        'work for her. The want of Miss Taylor would be felt every hour of\n' +
        'every day. She recalled her past kindness—the kindness, the\n' +
        'affection of sixteen years—how she had taught and how she had\n' +
        'played with her from five years old—how she had devoted all her\n' +
        'powers to attach and amuse her in health—and how nursed her through\n' +
        'the various illnesses of childhood. A large debt of gratitude was\n' +
        'owing”\n';


    return(
        <>
            <UploadBookComponent 
                book={book}
                setBook={setBook}
            />
            <BookViewer book={book}/>
        </>
    )

}
export default GoogleTest;