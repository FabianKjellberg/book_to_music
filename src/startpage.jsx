import "./startpage.css";
import React, { useState } from "react";

function StartPage() {
  const fixedGradient = "linear-gradient(90deg, rgba(66,109,170,1) 10%, rgba(175,185,201,1) 68%)";
  return (
    <>
      <div className="information-grid">
        <div className="information-item">
          <p className="about-platform">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

      <div className="three-information-container">
        <div className="flex-container column three-information-boxes">
          <img
            src="https://cdn.discordapp.com/attachments/1078963035630223391/1136336743591858196/2702134.png"
            alt="Icon"
          />
          <h3>Lorem Ipsum</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div className="flex-container column three-information-boxes">
          <img
            src="https://cdn.discordapp.com/attachments/1078963035630223391/1136336743315030016/969639-200.png"
            alt="Icon"
          />
          <h3>Lorem Ipsum</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div className="flex-container column three-information-boxes">
          <img
            src="https://media.discordapp.net/attachments/1078963035630223391/1136337384959651990/3212567.png"
            alt="Icon"
          />
          <h3>Lorem Ipsum</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
}

export default StartPage;
