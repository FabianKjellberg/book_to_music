import React from "react";
import "./mixbook.css";

function MixBook() {
  const fixedGradient =
    "linear-gradient(90deg, rgba(66,109,170,1) 10%, rgba(175,185,201,1) 68%)";

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Type</h1>
      <div className="flex-container">
        <form onSubmit={handleSubmit}>
          <div className="button">
            <input type="radio" name="type" value="page" id="page" />
            <label htmlFor="page">Page</label>

            <input type="radio" name="type" value="chapter" id="chapter" />
            <label htmlFor="chapter">Chapter</label>

            <input type="radio" name="type" value="book" id="book" />
            <label htmlFor="book">Book</label>
          </div>
        </form>
      </div>

      <div className="flex-container">
        <img
          className="star-divider"
          src="https://cdn.discordapp.com/attachments/1078963035630223391/1184154715232161953/star.png?ex=658af104&is=65787c04&hm=0c67a1b2fda1045a48eda37875929485ff989e763e7b31289de05382d8c5a98b&"
          alt="Star Divider"
        />
      </div>

      <h1>Genre</h1>
      <div className="flex-container">
        <form onSubmit={handleSubmit}>
          <div className="button">
            <input type="radio" name="type" value="lofi" id="lofi" />
            <label htmlFor="lofi">Lo-Fi</label>

            <input type="radio" name="type" value="classical" id="classical" />
            <label htmlFor="classical">Classical</label>

            <input type="radio" name="type" value="pop" id="pop" />
            <label htmlFor="pop">Pop</label>
          </div>
        </form>
      </div>

      <div className="flex-container">
        <img
          className="star-divider"
          src="https://cdn.discordapp.com/attachments/1078963035630223391/1184154715232161953/star.png?ex=658af104&is=65787c04&hm=0c67a1b2fda1045a48eda37875929485ff989e763e7b31289de05382d8c5a98b&"
          alt="Star Divider"
        />
      </div>

      <h1>File</h1>

      <div className="flex-container">
        <button
          className="start-button row"
          style={{ background: fixedGradient }}
        >
          <p>Get Started</p>
          <img
            src="https://cdn.discordapp.com/attachments/1078963035630223391/1136323255955898388/616818.png"
            alt="Icon"
          />
        </button>
      </div>
    </div>
  );
}

export default MixBook;
