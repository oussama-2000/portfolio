import { useState,useEffect } from "react";
// import "./Education.css";
import { motion } from "framer-motion";


const Education = ({onClose}) => {

  const isMobile = window.innerWidth <= 768;
    
    const styles = {
  newspaper: {
    
    background: "#f4ecd8",
    color: "#222",
    padding: isMobile ? "1rem" :"2rem",
  
    width:isMobile ? "90vw" :"80vw",
    height: isMobile ? "95vh" :"70vh",
    overflowY: "auto",
    margin: isMobile ? "0" : "2rem auto",
    border: isMobile ? "5px double #000" : "10px double #000",
    boxShadow: "inset 0 0 25px rgba(0, 0, 0, 0.4), 0 0 25px rgba(0, 0, 0, 0.4)",
    fontFamily: "Georgia, serif",
    lineHeight: 1.6,
  },

  newspaperTitle: {
    fontFamily: '"UnifrakturCook", cursive',
    fontSize: isMobile ? "2rem" : "3.8rem",
    textAlign: "center",
    margin: 0,
    borderBottom: isMobile ? "4px double #000" : "6px double #000",
    paddingBottom: isMobile ?"1rem" : "0.5rem",
  },

  newspaperDate: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: isMobile ? "0.5rem" : "1rem",
    margin: "0.5rem 0 2rem 0",
  },

  newspaperColumns: {
    // display: "flex",
    // gap: "2rem",

  },

  column: {
    // display:  "flex",
    // justifyContent: "space-around",
    // gap: "10%",
  },

  newspaperSection: {
    marginBottom: "4rem",
          display: "grid",
      gridTemplateColumns:isMobile ?"1fr":  "1fr 1fr",
      gap:isMobile?"1rem" : "1.5rem" ,

  },

  sectionTitle: {
    fontSize: isMobile?"1rem": "1.6rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    fontFamily: '"Cinzel", serif',
    textTransform: "uppercase",
  },

  sectionSubtitle: {
    fontStyle: "italic",
    marginBottom: "0.5rem",
    fontSize:isMobile ?".7rem" :"1rem"
  },

  schoolImg: {
    width: "100%",
    height: "auto",
    border: "3px solid #000",
    filter: "sepia(60%) grayscale(40%)",
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

};

  return (
    <motion.div
    style={styles.newspaper}
        initial={isMobile ? { opacity: 0 } : { y: -500, opacity: 0, rotate: -5 }}
        animate={isMobile ? { opacity: 1 } : { y: 0, opacity: 1, rotate: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12, duration: 1.2 }}
        whileHover={isMobile ? {} : { scale: 1.02, rotate: 0 }}
      >
      <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

      <h1 style={styles.newspaperTitle} >The Education Times</h1>
      <p style={styles.newspaperDate} >20 September 2025 • Casablanca Edition</p>

      <div style={styles.newspaperColumns} >
        <div>
          <div style={styles.newspaperSection} >
            <div style={styles.column} >
            <h2 style={styles.sectionTitle} >
              1337,the 42 network
            </h2>
              <div>
                <p style={styles.sectionSubtitle} >
                 1337 Coding School, Khouribga (2025 – Present)
                <p style={{ textAlign: "left" }}>
                  After completing a challenging month-long “piscine” at 1337
                  Coding School, I earned my place in the program. I am now
                  embarking on an extensive journey to deepen my knowledge in
                  programming and computer science, including mastering
                  low-level languages such as C, while developing
                  problem-solving skills and hands-on experience in real-world
                  coding projects.
                </p>
                </p>
              </div>
            </div>
              <img
                src={`${process.env.PUBLIC_URL}/projects/13.png`}
                alt="NTIC School"
                style={styles.schoolImg}
              />
          </div>
          <div style={styles.newspaperSection}>
            <div style={styles.column}>
            <h2 style={styles.sectionTitle}>ISTA Souk Sebt</h2>
              <div>
                <p style={styles.sectionSubtitle}>
                  Specialized Technician, Full Stack Development (2023 – 2025)
                <p style={{ textAlign: "left" }}>
                  I completed an intensive 2-year technical program focused on
                  full stack web development, gaining hands-on experience with
                  both front-end and back-end technologies, including HTML, CSS,
                  JavaScript, React, PHP, Laravel, MySQL, MongoDB, and REST
                  APIs. During the program, I participated in real-world
                  projects, collaborated in agile teams, and practiced
                  continuous code improvement through version control with Git.
                  The training emphasized UI/UX design, deployment strategies,
                  and professional problem-solving. I also developed skills in
                  algorithms, Python programming, custom Tkinter applications,
                  DevOps, jQuery, Linux, UML, user interface and experience
                  design, and entrepreneurship.
                </p>
                </p>
              </div>
            </div>
              <img
                src={`${process.env.PUBLIC_URL}/projects/OFPPT-Maroc.jpg`}
                alt="NTIC School"
                style={styles.schoolImg}
              />
          </div>
        </div>

        <div>
          <div style={styles.newspaperSection}>
            <div style={styles.column}>
            <h2 style={styles.sectionTitle}>Hight School Saadyin</h2>
              <div>
                <p style={styles.sectionSubtitle}>
                  Baccalaureate, Nature Sciences (2021 – 2023)
                  <p style={{ textAlign: "left" }}>
                    After transferring to my new high school, I continued my
                    studies in the Life and Earth Sciences stream, building on
                    the foundation I had developed during my first year. This
                    allowed me to deepen my understanding of scientific
                    concepts, strengthen my analytical skills, and prepare for
                    higher education while benefiting from a more convenient and
                    supportive learning environment.
                  </p>
                </p>
              </div>
            </div>
              <img
                src={`${process.env.PUBLIC_URL}/projects/saadiyin.png`}
                alt="Lycee Saadyin"
                style={styles.schoolImg}
              />
          </div>
        </div>
        <div style={styles.newspaperSection}>
          <div style={styles.column}>
          <h2 style={styles.sectionTitle}>Hight School Allal Ben Abdellah</h2>
            <p style={styles.sectionSubtitle}>
              Baccalaureate, Science (2020 – 2021)
              <p style={{ textAlign: "left" }}>
                During my first year of high school (2020–2021) in the Science
                stream, I focused on developing a strong foundation in the
                sciences to expand my knowledge and understanding. This year
                allowed me to explore various scientific concepts, fostering
                curiosity and critical thinking. Due to the distance of my
                current high school, I sought to transfer to a newly built
                school closer to my home, which would provide a more convenient
                environment for continuing my studies and fully dedicating
                myself to learning.
              </p>
            </p>
          </div>
            <img
              src={`${process.env.PUBLIC_URL}/projects/allal.png`}
              alt="Lycee Allal Ben Abdellah"
            style={styles.schoolImg}
            />
        </div>
      </div>
    
      </motion.div>
  );
};

export default Education;
