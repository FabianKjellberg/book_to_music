import "./startpage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function StartPage() {
  const fixedGradient = "linear-gradient(90deg, rgba(66,109,170,1) 10%, rgba(175,185,201,1) 68%)";
  return (
    <>

      <div className="information-grid">
        <div className="information-item">
          <p className="about-platform">
            Looking to enhance your reading journey? With Book Mixtape you will step into a realm where books and music unite. 
            Upload your favorite book and get a generated playlist based on it. Experience your personalized playlist, and let it enrich your reading!
          </p>
        </div>
        <div className="information-item">
          <img
            className="bookshelf1"
            src="https://cdn-icons-png.flaticon.com/512/4344/4344790.png"
            alt="Bookshelf1 Icon"
          />

          <img
            className="bookshelf2"
            src="https://cdn.discordapp.com/attachments/1078963035630223391/1135188871651536987/4344790.png"
            alt="Bookshelf2 Icon"
          />
        </div>
      </div>

      <div className="flex-container">
        <img
          className="star-divider"
          src="https://cdn.discordapp.com/attachments/1078963035630223391/1135191668145012796/asedfsed-removebg.png"
          alt="Star Divider"
        />
      </div>

      <div className="flex-container">
        <Link to="/spotify-auth" className="button-link">
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
        </Link>
      </div>

      <div className="three-information-container">
        <div className="flex-container column three-information-boxes">
          <img
            src="https://cdn.discordapp.com/attachments/1078963035630223391/1136336743591858196/2702134.png"
            alt="Icon"
          />
          <h3>Melodic</h3>
          <p>
            Join us in merging words and melodies. Upload a book and get a unique playlist, transforming your reading experience!
          </p>
        </div>
        <div className="flex-container column three-information-boxes">
          <img
            src="https://cdn.discordapp.com/attachments/1078963035630223391/1136336743315030016/969639-200.png"
            alt="Icon"
          />
          <h3>Magical</h3>
          <p>
            Turn each page of your favorite book into a magical experience!
          </p>
        </div>
        <div className="flex-container column three-information-boxes">
          <img
            src="https://media.discordapp.net/attachments/1078963035630223391/1136337384959651990/3212567.png"
            alt="Icon"
          />
          <h3>Journey</h3>
          <p>
            Let each playlist reveal a unique story that turns the chapters of your favorite book into an enchanting journey!
          </p>
        </div>
      </div>
    </>
  );
}

export default StartPage;
