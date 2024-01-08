import "./uploadBookComponent.css";
import React, { useEffect, useState, useRef } from "react";
import ePub from "epubjs";

export default function UploadBookComponent(props) {
  const [bookString, setBookString] = useState("No book selected");
  const fileInputRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (props.book) {
      props.book.loaded.metadata.then((metadata) => {
        setBookString(metadata.title + ", " + metadata.creator);
      });
    }
  }, [props.book]);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];

    if (droppedFile) {
      processFile(droppedFile);
    }
  };

  const processFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContents = e.target.result;
      const newBook = ePub(fileContents);

      props.setBook(newBook);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        className="uploadBookComponent"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="buttonAndTextBox">
          <textarea className="selectedBook" value={bookString}></textarea>
          <button className="browseButton" onClick={handleFileSelect}>
            Browse
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept={".epub"}
          />
        </div>
        <div className="dragAndDrop">
          <p>Drag and drop file here</p>
        </div>
      </div>
    </>
  );
}
