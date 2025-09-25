import React from "react";
import { motion } from "framer-motion";

const AboutMe = ({ onClose }) => {
  const isMobile = window.innerWidth <= 768;

  const styles = {
    container: {
      fontFamily: "monospace",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width:isMobile? "100%" :"70vw",
      height: "100%",
    },
    document: {
      backgroundColor: "#fef3c7",
      border: "4px solid #92400e",
      position: "relative",
      transform: isMobile ? "none" : "rotate(1deg)",
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
      width: isMobile ? "100%" : "100%",
      height: isMobile ? "90%" : "auto",
      borderRadius: isMobile ? "0px" : "8px",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)",
      opacity: 0.5,
    },
    content: {
      position: "relative",
      padding: isMobile ? "20px" : "5vw",
      paddingBottom: "0px",
      backgroundColor: "#fffbeb",
      border: "1px solid #b45309",
      zIndex: 1,
      height: isMobile ? "95vh" : "80vh",
      overflowY: isMobile ? "auto" : "visible",
    },
    closeBtn: {
      position: "absolute",
      top: "10px",
      right: "10px",
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
      display: isMobile ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    headerText: {
      fontFamily: "UnifrakturCook ,cursive",
      fontSize: "clamp(1.5rem, 2vw, 2.4rem)",
      fontWeight: "bold",
      letterSpacing: "0.1em",
      color: "#78350f",
      marginBottom: "0.5rem",
    },
    subHeader: {
      fontSize: "clamp(0.8rem, 1vw, 1rem)",
      color: "#92400e",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    mainGrid: {
      marginTop: "30px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile? "0.5rem" :"1.5rem" ,
      gridTemplateAreas: isMobile
    ? `"image" "text"`   // mobile → image on top
    : `" text image"`,    // desktop → image left, text right
    },
    infoRow: {
      fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
      marginBottom: "0.5rem",
      lineHeight: 1.5,
      fontFamily: "Caveat, cursive",
    },
    label: {
      fontWeight: "bold",
    },
    photoPlaceholder: {
      padding: "5px",
      width: "min(50vw, 200px)",
      height: "min(50vw, 200px)",
      backgroundColor: "#fde68a",
      border: "2px solid #92400e",
      margin: "0 auto 1rem auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    barcode: {
      display: "flex",
      justifyContent: "center",
      gap: "2px",
    },
    barcodeBar: {
      width: "4px",
      backgroundColor: "#78350f",
    },
  };

  return (
    <div style={styles.container}>
      <motion.div
        style={styles.document}
        initial={isMobile ? { opacity: 0 } : { y: -500, opacity: 0, rotate: -5 }}
        animate={isMobile ? { opacity: 1 } : { y: 0, opacity: 1, rotate: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12, duration: 1.2 }}
        whileHover={isMobile ? {} : { scale: 1.02, rotate: 0 }}
      >
        {/* Close Button only for mobile */}
        <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div style={styles.overlay}></div>

        <div style={styles.content}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerText}>ABOUT ME</div>
            <div style={styles.subHeader}>
              <span>ID: OSS-2025</span>
              <span>STATUS: Open to opportunities</span>
            </div>
          </div>

         

          {/* Main Grid */}
          <div style={styles.mainGrid}>
            {/* Left Column */}
            <div style={{gridArea:"text"}}>
              <div style={styles.infoRow}>
                <p>
                  I’m a passionate Full Stack Web Developer with a strong drive to
                  build scalable and user-friendly applications. I enjoy working
                  across both frontend and backend, turning ideas into
                  functional projects, and continuously learning new
                  technologies to improve my craft.
                </p>
                <p>
                  What excites me most is solving complex problems whether it’s
                  designing a clean UI, structuring a database, or connecting
                  systems to work seamlessly together.
                </p>
                <p>
                  I’m passionate about continuous learning, creative
                  problem-solving, and building applications that make a real
                  impact.
                </p>
                <p>
                  My goal is to grow into a developer who can design full
                  featured systems, collaborate effectively in teams, and
                  contribute to meaningful projects.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ textAlign: "center",gridArea:"image" }}>
              <div style={styles.photoPlaceholder}>
                <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="profile" width="100%" />
              </div>
              <div style={styles.infoRow}>
                <span style={styles.label}>Name: </span> Oussama Amkhou
              </div>
              <div style={styles.infoRow}>
                <span style={styles.label}>Role:</span> Full Stack Web Developer
              </div>
            </div>
          </div>

          {/* Barcode */}
          <div style={styles.barcode}>
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={i}
                style={{
                  ...styles.barcodeBar,
                  height: Math.random() > 0.5 ? "20px" : "10px",
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
