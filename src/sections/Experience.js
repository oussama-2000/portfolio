import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Experience = ({ onClose }) => {
  const isMobile = window.innerWidth <= 768;

  const skills = [
    "Project Management",
    "Remote Communication",
    "Critical Thinking",
    "Time Management",
    "Problem-Solving",
    "Adaptability",
    "Professional Communication",
    "Agile Methodologies",
    "Laravel",
    "React.js",
    "REST APIs",
    "PostgreSQL",
    "GitLab",
    "Jira",
  ];

  const styles = {
    container: {
      fontFamily: "monospace",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
      width:isMobile? "100%" :"80vw",
      height: "100%",
    },
    document: {
      backgroundColor: "#fef3c7",
      border: "4px solid #92400e",
      position: "relative",
      transform:isMobile ? "0deg" : "rotate(1deg)",
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
    //   width: "100%",
      height:isMobile? "100%": "90vh",
      overflowY: "hidden",
      borderRadius: "8px",
    },
     content: {
      position: "relative",
      padding: isMobile ? "1rem" : "3rem",
      paddingBottom: "3rem",
      backgroundColor: "rgba(255,251,235,0.95)",
      border: "1px solid #b45309",
      zIndex: 1,
      height: isMobile? "90vh" : "80vh",
    //   width:"100%",
      overflowY: "auto",
      
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)",
      opacity: 0.7,
      zIndex: 0,
    },
    skillsSliderWrapper: {
      position: "absolute",
      bottom: "10px",
      left: 0,
      width: "100%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      borderTop: "1px solid #b45309",
      borderBottom: "1px solid #b45309",
      backgroundColor: "rgba(255,251,235,0.8)",
      zIndex: 2,
    },
    skillsLine: {
      display: "inline-flex",
      gap: "2rem",
      fontSize: isMobile ? "0.7rem" : "1rem",
      color: "#92400e",
      fontWeight: "bold",
      padding: "0.5rem 1rem",
    },
   
    closeBtn: {
        display:isMobile ? "block" : "none",
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "#92400e",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: "32px",
      height: "32px",
      cursor: "pointer",
      fontWeight: "bold",
      zIndex: 10,
    },
    header: {
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    headerText: {
      fontFamily: "UnifrakturCook ,cursive",
      fontSize: isMobile ? "1.5rem" : "2.2rem",
      fontWeight: "bold",
      letterSpacing: "0.1em",
      color: "#78350f",
      marginBottom: "0.5rem",
    },
    subHeader: {
      fontSize: isMobile ? "0.75rem" : "1rem",
      color: "#92400e",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    infoRow: {
      fontSize: isMobile ? "0.8rem" : "1rem",
      marginBottom: "0.3rem",
      lineHeight: 1.4,
      textAlign: "left",
    },
    logoBox: {
      width: isMobile ? "50px" : "80px",
      height: isMobile ? "50px" : "80px",
      border: "2px solid #92400e",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fde68a",
      marginRight: "10px",
      flexShrink: 0,
    },
    bulletList: {
      marginTop: "0.5rem",
      marginLeft: "1.2rem",
    },
    bulletItem: {
      marginBottom: "0.4rem",
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
        {/* Close Button */}
        <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {/* Background Overlay */}
        <div style={styles.overlay}></div>

        {/* Skills Sliding Line */}
        <div style={styles.skillsSliderWrapper}>
          <motion.div
            style={styles.skillsLine}
            animate={{ x: ["0%", "-80%"] }}
            transition={{
              repeat: Infinity,
              duration: 70,
              ease: "linear",
            }}
          >
            {skills.concat(skills).map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.header}>
            <div style={styles.headerText}>EXPERIENCE</div>
            <div style={styles.subHeader}>
              <span>ID: OSS-2025</span>
              <span>STATUS: Full Stack Web Developer Intern</span>
            </div>
          </div>

          <div style={{ textAlign: "left" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div style={styles.logoBox}>
                <img
                  src={`${process.env.PUBLIC_URL}/spouveup.jpeg`}
                  alt="Spoveup Logo"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={styles.infoRow}>
                <h3
                  style={{
                    fontSize: isMobile ? "1rem" : "1.3rem",
                    marginTop: isMobile ? "0.5rem" : 0,
                  }}
                >
                  Full Stack Web Developer
                </h3>
                <p>
                  <strong>SPOVEUP.INC · Internship</strong>
                  <br />
                  Feb 2025 – Mar 2025 · 2 mos
                  <br />
                  Casablanca-Settat, Morocco · Remote
                </p>
              </div>
            </div>

            <div style={styles.infoRow}>
              <p>
                Worked on the development of a{" "}
                <strong>
                  Medical Cabinet Management Web Application (v1.0)
                </strong>{" "}
                to digitalize and streamline patient, consultation, and
                appointment management.
              </p>
              <p>
                <strong>Key responsibilities and achievements:</strong>
              </p>
              <ul style={styles.bulletList}>
                <li style={styles.bulletItem}>
                  Designed and implemented core modules: patient records,
                  appointment scheduling, medical document storage, and
                  consultation tracking.
                </li>
                <li style={styles.bulletItem}>
                  Built a modular system using{" "}
                  <strong>Laravel (REST API)</strong> +{" "}
                  <strong>React.js (MUI)</strong> with{" "}
                  <strong>PostgreSQL</strong>.
                </li>
                <li style={styles.bulletItem}>
                  Implemented secure RBAC (Admin, Doctor, Secretary).
                </li>
                <li style={styles.bulletItem}>
                  Used BCrypt for password hashing and applied data protection
                  best practices.
                </li>
                <li style={styles.bulletItem}>
                  Collaborated remotely with <strong>Git/GitLab</strong> +{" "}
                  <strong>Jira</strong>.
                </li>
                <li style={styles.bulletItem}>
                  Participated in sprint meetings, reviews, and roadmap
                  planning.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
