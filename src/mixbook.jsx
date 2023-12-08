import React from 'react';
import './mixbook.css';

function MixBook() {
  const fixedGradient = "linear-gradient(90deg, rgba(66,109,170,1) 10%, rgba(175,185,201,1) 68%)";
  return (
    <div>
      <h1>Type</h1>

      <div className="flex-container">
        <img
          className="star-divider"
          src="https://cdn.discordapp.com/attachments/1078963035630223391/1135191668145012796/asedfsed-removebg.png"
          alt="Star Divider"
        />
      </div>

      <h1>Genre</h1>

      <div className="flex-container">
        <img
          className="star-divider"
          src="https://cdn.discordapp.com/attachments/1078963035630223391/1135191668145012796/asedfsed-removebg.png"
          alt="Star Divider"
        />
      </div>

      <h1>File</h1>

      <div className="flex-container">
        <button
          className="star-button row" 
          style={{ background: fixedGradient }}
        >
          <p>Confirm</p>
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
