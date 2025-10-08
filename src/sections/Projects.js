import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "AI-powered mini Wikipedia",
    date: "Sep 2025 - Oct 2025",
    description: (
      <div>
        I created this MVP to better understand how AI models interact with
        scientific data and how information retrieval and generation systems
        work together similar to how a mini Wikipedia powered by AI would
        function.
        <ul>
          <li>
            The search operation might seem a bit heavy that’s because I used
            free, open-source AI models and ran everything locally on my
            CPU-based setup (no GPU).
          </li>
          <li>
            It was a great opportunity to explore the full pipeline and really
            understand how it all works behind the scenes.
          </li>
          <li>This project helped me deepen my knowledge in:</li>
          <ul>
            <li>
              Retrieval-Augmented Generation (RAG){" "}
              <a href="https://lnkd.in/dyPawMFv" target="_blank">
                learn more
              </a>
            </li>
            <li>
              Embedding databases (like Qdrant){" "}
              <a href="https://lnkd.in/d3cWVfe9" target="_blank">
                learn more
              </a>
            </li>
            <li>Backend integration with Flask</li>
            <li>Practical model deployment</li>
          </ul>
          <li>
            It’s just the beginning ,I’m planning to optimize performance and
            experiment with faster inference soon.
          </li>
        </ul>
      </div>
    ),

    fdescription:
      "This MVP is a Flask-based AI document search system that indexes scientific books(PDFs) into a local vector store. It allows natural language queries and retrieves context-aware answers using free open-source models and CPU processing.",
    skills: [
      "Machine Learning Integration",
      "Vector Databases (Qdrant)",
      "Natural Language Processing (NLP)",
      "Flask",
      "docker",
    ],
    images: [
      `${process.env.PUBLIC_URL}/projects/w1.png`,
      `${process.env.PUBLIC_URL}/projects/MVP.mp4`,
      `${process.env.PUBLIC_URL}/projects/RAG.jpeg`,
    ],
  },
  {
    title: "ORIX",
    date: "Aug 2025 - Aug 2025",
    description:
      "ORIX is a modern e-commerce web application for fashion and apparel. It offers a seamless shopping experience, featuring a clean and intuitive interface, easy navigation, and a wide selection of clothing for all styles. Built to deliver convenience, style, and efficiency to every shopper.",
    skills: ["MUI", "Swiper", "React.js", "UX", "UI"],
    link: "https://oussama-2000.github.io/ORIX/",
    images: [
      `${process.env.PUBLIC_URL}/projects/orix1.png`,
      `${process.env.PUBLIC_URL}/projects/orix2.jpeg`,
      `${process.env.PUBLIC_URL}/projects/orix3.jpeg`,
      `${process.env.PUBLIC_URL}/projects/orix4.jpeg`,
      `${process.env.PUBLIC_URL}/projects/orix5.jpeg`,
      `${process.env.PUBLIC_URL}/projects/orix6.jpeg`,
      `${process.env.PUBLIC_URL}/projects/orix7.jpeg`,
    ],
  },
  {
    title: "Library Management Application",
    date: "Mar 2025 - Mar 2025",
    description: (
      <div>
        a Library Management System where users can:
        <ul>
          <li>Browse and search for books</li>
          <li>Borrow and return books seamlessly</li>
          <li>Add new books to the collection</li>
          <li>Add books to a personal list for easy access</li>
          <li>Leave ratings and reviews</li>
          <li>Read books directly within the app with a built-in viewer</li>
          <li>
            Enjoy advanced features like dark mode, page navigation, downloads,
            and more!
          </li>
          <li>
            Developed using React, Redux, designed to enhance the reading
            experience with a smooth and user-friendly interface.
          </li>
        </ul>
      </div>
    ),
    fdescription:
      "a Library Management System where users can: Browse and search for books Borrow and return books seamlessly ,Add new books to the collection , Add books to a personal list for easy access , Leave ratings and reviews , Read books directly within the app with a built-in viewer ",
    skills: ["React.js", "Redux.js", "pdf-viewer"],
    link: "https://oussama-2000.github.io/Library-Management/",
    images: [
      `${process.env.PUBLIC_URL}/projects/l1.png`,
      `${process.env.PUBLIC_URL}/projects/l2.png`,
      `${process.env.PUBLIC_URL}/projects/l3.png`,
      `${process.env.PUBLIC_URL}/projects/l4.png`,
      `${process.env.PUBLIC_URL}/projects/l5.png`,
      `${process.env.PUBLIC_URL}/projects/l6.png`,
    ],
  },
  {
    title: "Stock Management Application",
    date: "Dec 2023 - Jan 2024",
    description: (
      <div>
        The Stock Management Application is a desktop-based software designed to
        simplify and automate inventory control.Built with Python and
        CustomTkinter for a modern and user-friendly interface, the application
        provides essential features for managing stock efficiently.
        <br />
        Key functionalities include: Add and remove items:
        <ul>
          <li>Easily update stock records with new or removed products.</li>
          <li>
            Report generation: Download detailed inventory reports for better
            tracking and decision-making.
          </li>
          <li>
            Data visualization: Integrated with Matplotlib to display charts and
            graphs for stock analysis and insights.
          </li>
        </ul>
        This project offers an intuitive solution for businesses or individuals
        to maintain accurate inventory records, monitor trends, and improve
        stock management processes.
      </div>
    ),
    fdescription:
      " The Stock Management Application is a desktop-based software designed to simplify and automate inventory control.Built with Python and CustomTkinter for a modern and user-friendly interface, the application provides essential features for managing stock efficiently.",

    skills: ["Python", "CustomTkinter", "Matplotlib"],

    images: [
      `${process.env.PUBLIC_URL}/projects/m4.jpeg`,
      `${process.env.PUBLIC_URL}/projects/m3.jpeg`,
      `${process.env.PUBLIC_URL}/projects/m2.jpeg`,
      `${process.env.PUBLIC_URL}/projects/m1.jpeg`,
    ],
  },
];

const Projects = ({ onClose }) => {
  const [selected, setSelected] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const isMobile = window.innerWidth <= 768;

  const dropVariants = {
    hidden: { y: -100, opacity: 0, rotate: -5 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  // === Styles ===
  const styles = {
    container: {
      fontFamily: "monospace",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1.5rem",
      width: "90vw",
      height: isMobile ? "95vh" : "90vh",
      overflowY: "auto",
      margin: "0 auto",
      padding: ".5rem",
      paddingTop: isMobile ? "2.5rem" : ".5rem",
    },
    card: {
      background: "#fffbeb",
      border: "2px solid #92400e",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      height: "60%",
      width: isMobile ? "90%" : "30%",
    },
    closeMBtn: {
      position: "absolute",
      top: isMobile ? "10px" : "5vh",
      right: isMobile ? "10px" : "5vw",
      background: "#92400e",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "35px",
      height: "35px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      zIndex: 10,
      justifyContent: "center",
      alignItems: "center",
    },

    cardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardBody: {
      padding: "1rem",
      color: "#78350f",
      flex: 1,
    },
    modalBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      fontFamily: "monospace",
      padding: "1rem",
    },
    modalContent: {
      position: "relative",
      background: "#fffbeb",
      border: "3px solid #92400e",
      borderRadius: "8px",
      maxWidth: "800px",
      width: "100%",
      padding: "2rem",
      boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
      maxHeight: "90vh",
      overflowY: "auto",
    },
    closeBtn: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "transparent",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      color: "#92400e",
    },
    projectImages: {
      display: "flex",
      gap: "0.5rem",
      marginTop: "1rem",
      flexWrap: "wrap",
    },
    thumb: {
      width: "100px",
      height: "70px",
      objectFit: "cover",
      border: "1px solid #92400e",
      borderRadius: "4px",
      cursor: "pointer",
    },
    skills: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginTop: "1rem",
    },
    skillTag: {
      background: "#fde68a",
      border: "1px solid #92400e",
      borderRadius: "6px",
      padding: "0.2rem 0.6rem",
      fontSize: "0.8rem",
      color: "#78350f",
    },
    link: {
      marginTop: "1rem",
      display: "inline-block",
      color: "#1d4ed8",
      textDecoration: "underline",
    },
    galleryBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1100,
      padding: "1rem",
    },
    galleryImage: {
      maxWidth: "90%",
      maxHeight: "80%",
      borderRadius: "4px",
    },
    navBtn: {
      position: "absolute",
      top: "50%",
      fontSize: "2rem",
      color: "#fff",
      cursor: "pointer",
      userSelect: "none",
      padding: "0.5rem 1rem",
      background: "rgba(0,0,0,0.4)",
      borderRadius: "50%",
    },
    leftBtn: { left: "5%" },
    rightBtn: { right: "5%" },
    galleryClose: {
      position: "absolute",
      top: "10px",
      right: "20px",
      fontSize: "2rem",
      color: "#fff",
      cursor: "pointer",
    },
  };

  return (
    <>
      {/* Cards */}
      <div style={styles.container}>
        <button style={styles.closeMBtn} onClick={onClose}>
          ✕
        </button>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={styles.card}
            custom={index}
            variants={dropVariants}
            initial="hidden"
            animate="visible"
            whileHover={isMobile ? {} : { scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelected(project)}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              style={styles.cardImage}
            />
            <div style={styles.cardBody}>
              <h3>{project.title}</h3>
              <p>
                {typeof project.description === "string"
                  ? project.description.slice(0, 100) + "..."
                  : project.fdescription
                  ? project.fdescription.slice(0, 100) + "..."
                  : "Click to view details"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            style={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              style={styles.modalContent}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button style={styles.closeBtn} onClick={() => setSelected(null)}>
                ✕
              </button>
              <h1>{selected.title}</h1>
              <p>{selected.date}</p>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "clamp(0.9rem, 1.2vw, 1.4rem)",
                }}
              >
                {selected.description}
              </div>
              <div style={styles.skills}>
                {selected.skills.map((s, i) => (
                  <span key={i} style={styles.skillTag}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Media (Images or Videos) */}
              <div style={styles.projectImages}>
                {selected.images.map((media, i) => {
                  const isVideo = media.match(/\.(mp4|webm|ogg)$/i); // check file extension

                  return isVideo ? (
                    <video
                      key={i}
                      src={media}
                      // controls
                      muted
                      style={{ ...styles.thumb }}
                      onClick={() => {
                        setGalleryOpen(true);
                        setCurrentImage(i);
                      }}
                    />
                  ) : (
                    <img
                      key={i}
                      src={media}
                      alt={`${selected.title} ${i}`}
                      style={styles.thumb}
                      onClick={() => {
                        setGalleryOpen(true);
                        setCurrentImage(i);
                      }}
                    />
                  );
                })}
              </div>
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  View Project →
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            style={styles.galleryBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setGalleryOpen(false)}
          >
            {(() => {
              const currentMedia = selected.images[currentImage];
              const isVideo = currentMedia.match(/\.(mp4|webm|ogg)$/i);

              return isVideo ? (
                <motion.video
                  key={currentImage}
                  src={currentMedia}
                  controls
                  autoPlay
                  muted
                  style={styles.galleryImage}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <motion.img
                  key={currentImage}
                  src={currentMedia}
                  alt="gallery"
                  style={styles.galleryImage}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  onClick={(e) => e.stopPropagation()}
                />
              );
            })()}

            {/* Nav buttons */}
            <span
              style={{ ...styles.navBtn, ...styles.leftBtn }}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImage((prev) =>
                  prev === 0 ? selected.images.length - 1 : prev - 1
                );
              }}
            >
              ‹
            </span>
            <span
              style={{ ...styles.navBtn, ...styles.rightBtn }}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImage((prev) =>
                  prev === selected.images.length - 1 ? 0 : prev + 1
                );
              }}
            >
              ›
            </span>

            {/* Close button */}
            <span
              style={styles.galleryClose}
              onClick={(e) => {
                e.stopPropagation();
                setGalleryOpen(false);
              }}
            >
              ✕
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
