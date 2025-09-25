import React, { useState, useEffect, useRef } from "react";
import "./style.css";

import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import { FaLinkedinIn, FaGithub, FaInstagram, FaGoogle } from "react-icons/fa";

// Stations (positions are % of map image)
const stations = [
  { id: "about", x: "62%", y: "61%", Component: AboutMe },
  { id: "experience", x: "58%", y: "44%", Component: Experience },
  { id: "projects", x: "48%", y: "19%", Component: Projects },
  { id: "education", x: "39%", y: "41%", Component: Education },
  { id: "contact", x: "81%", y: "84%", Component: Contact },
];

export default function PortfolioMap() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);
  const paperSoundRef = useRef(null);
  const [radius, setRadius] = useState(80); // default

  const socialIcons = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/amk.oussama?igsh=NWd3czByeXFja3Ns" },
    { icon: <FaGoogle />, url: "mailto:oamkhou@gmail.com" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/oussama-amkhou-87a82b2ba" },
    { icon: <FaGithub />, url: "https://github.com/oussama-2000" },
  ];

  const angleStep = (2 * Math.PI) / socialIcons.length;

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth <= 768) {
        setRadius(40); // Mobile
      } else {
        setRadius(80); // Desktop
      }
    };

    updateRadius(); // run once on load
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // Auto-play background music
  useEffect(() => {
    const playAudio = () => {
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked — waiting for user interaction.");
      });
    };
    playAudio();

    const resumeOnClick = () => {
      if (audioRef.current.paused) {
        audioRef.current.play();
      }
      document.removeEventListener("click", resumeOnClick);
    };
    document.addEventListener("click", resumeOnClick);

    return () => {
      document.removeEventListener("click", resumeOnClick);
    };
  }, []);

  // Play paper sound
  const playPaperSound = () => {
    if (paperSoundRef.current) {
      paperSoundRef.current.currentTime = 0;
      paperSoundRef.current.play();
    }
  };

  return (
    <div className="map">
      {/* Background Music */}
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/Cobblestone-Village.mp3`} loop />

      {/* Paper Sound Effect (embedded base64, free SFX) */}
      <audio
        ref={paperSoundRef}
        src={`${process.env.PUBLIC_URL}/pageturn.mp3`}
      />

      <div className="map-container">
        {/* Map Image */}
        <img src={`${process.env.PUBLIC_URL}/map2.jpg`} alt="map" className="map-img" />

        {/* Station Buttons */}
        {stations.map((station) => (
          <button
            key={station.id}
            className="station"
            style={{
              top: station.y,
              left: station.x,
              width: "15%", // % width so it scales
              height: "10%",
            }}
            onClick={() => {
              playPaperSound();
              setSelected(station);
            }}
          />
        ))}

        {/* Main Button */}
        <button
          className="social-button"
          onClick={() => setOpen(!open)}
          style={{
            position: "absolute",
            top: "22%",
            right: "13%",
            width: "10%",
            height: "10%",
            borderRadius: "50%",
            background: "transparent",
            cursor: "pointer",
            zIndex: 3,
            border: "none",
          }}
        />

        {/* Circle social icons */}
        {socialIcons.map((item, index) => {
          const angle = index * angleStep;
          const x = open ? radius * Math.cos(angle) : 0;
          const y = open ? radius * Math.sin(angle) : 0;

          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="socialMediaIcon"
              style={{
                transform: `translate(${x}px, ${-y}px)`,
                opacity: open ? 1 : 0,
              }}
            >
              {item.icon}
            </a>
          );
        })}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="overlay"
          onClick={() => {
            playPaperSound();
            setSelected(null);
          }}
        >
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <selected.Component onClose={() => {
              playPaperSound();
              setSelected(null);
            }} />
          </div>
        </div>
      )}
    </div>
  );
}
