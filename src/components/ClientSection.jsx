import React from "react";
import SpotifyLogo from "../assets/logo-spotify.png";
import DropboxLogo from "../assets/logo-dropbox.png";
import TeslaLogo from "../assets/logo-tesla.png";
import RedditLogo from "../assets/logo-reddit.png";
import GoogleLogo from "../assets/logo-google.png";
import StripeLogo from "../assets/logo-stripe.png";
import DhlLogo from "../assets/logo-dhl.png";
import AirbnbLogo from "../assets/logo-airbnb.png";

function ClientSection() {
  return (
    <section className="py-20 md:px-20 lg:px-32">
      <h2 className="text-3xl font-bold text-center w-1/2 mx-auto">
        We worked with the world’s biggest brands and the most innovative
        startups
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 px-16 mt-6">
        <div className="p-10 flex flex-col justify-center">
          <img src={SpotifyLogo} alt="Spotify Logo" />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <img src={DropboxLogo} alt="Spotify Logo" />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <img src={TeslaLogo} alt="Spotify Logo" />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <img src={RedditLogo} alt="Spotify Logo" />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <img src={GoogleLogo} alt="Spotify Logo" />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <img src={StripeLogo} alt="Spotify Logo" />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <img src={DhlLogo} alt="Spotify Logo" />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <img src={AirbnbLogo} alt="Spotify Logo" />
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
