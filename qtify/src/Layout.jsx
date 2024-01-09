import React from "react";
import Faqs from "./components/Faqs/Faqs"
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Songs from "./components/Songs/Songs";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import TopAlbum from "./components/topAlbum/TopAlbum";
import NewAlbum from "./components/newAlbum/NewAlbum";
import "./Layout.css";

const Layout = () => {
    return (
      <div className="layout">
        {/* Render the navigation bar */}
        <NavBar /> 

        <HeroSection />
        <TopAlbum />
        <NewAlbum />
        <Songs/>
        <Faqs/>
        <AudioPlayer />
        </div>
  );
};

export default Layout;