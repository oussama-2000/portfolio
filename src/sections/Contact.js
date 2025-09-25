import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = ({onClose}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
    const isMobile = window.innerWidth <= 768;


  const styles = {
  newspaperContact: {
    width: isMobile ?"90vw" : "80vw",
    maxHeight:"95vh",

  },

  subHeadline: {
    fontSize: isMobile ? "25px" : "30px",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: isMobile ? "1rem" : "2rem",
    color: "whitesmoke",
  },

  letterContainer: {
    display: "flex",
    gap:isMobile ?"0.5rem" :"2rem",
    flexWrap: "wrap",
    flexDirection:isMobile ?"column-reverse" :"row"
  },

  letterForm: {
    flex: 1,
  },

  editorNote: {
    flex: 1,
    height:"fit-content"
  },

  label: {
    color: "whitesmoke",
  },

  // Form styles
  letterFormTitle: {
    marginBottom:isMobile ?"0.5rem" :"1rem",
    fontSize: "1.2rem",
  },

  letterFormWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  letterInput: {
    marginBottom: "1rem",
    padding: "0.7rem",
    border: "1px solid #444",
    fontFamily: "inherit",
  },

  letterTextarea: {
    marginBottom: "1rem",
    padding: "0.7rem",
    border: "1px solid #444",
    fontFamily: "inherit",
  },

  letterButton: {
    background: "#222",
    color: "#fff",
    padding: "0.7rem",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  },

  letterButtonHover: {
    background: "#555",
  },

  // Letter preview
  letterPaper: {
    background:'#f9f3df',
    padding: isMobile ?"0.5rem":"1.5rem 0.5rem",
    boxShadow:
      "8px 8px 3px #0000006c, inset rgba(0, 0, 0, 0.429) 5px 5px 20px 0px",
    height:isMobile?"300px" : "65vh",
    fontFamily: '"Caveat", cursive',
    overflowY:"auto"
  },

  letterHeading: {
    marginBottom:isMobile ?"0.5rem" :"1rem",
    marginLeft: 0,
    fontStyle: "italic",
    fontSize: isMobile ? " 1rem" :"1.3rem",
    textAlign: "left",
  },

  letterBody: {
    marginBottom: "2rem",
    lineHeight:isMobile ? "1.2" : "1.5",
    fontSize:isMobile ? "1.2rem" : "1.5rem",
  },

  letterSignature: {
    fontFamily: '"Caveat", cursive',
    fontSize: "1.2rem",
    textAlign: "right",
  },

  letterMeta: {
    marginTop: "1rem",
    fontSize: "0.85rem",
    color: "#444",
    textAlign: "left",
  },
  inputs:{
      marginBottom: "1rem",
  padding:" 0.7rem",
  border: "1px solid #444",
  fontFamily: "inherit",

  },
  formBottom:{
      background:" #222",
  color: "#fff",
  padding:" 0.7rem",
  border: "none",
  cursor: "pointer",
  transition: "0.3s",

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


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zimheg3", // from EmailJS dashboard
        "template_mx65ror", // from EmailJS dashboard
        formData,
        "Xu-OJsCapv41mMGIA" // from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("The dove is flying with your letter, thanks a loot !");
        },
        (error) => {
          alert("Something went wrong when dove flying . but thanks.");
        }
      );
  };

  return (
    <motion.div
      // style={styles.document}
              initial={isMobile ? { opacity: 0 } : { y: -500, opacity: 0, rotate: -5 }}
        animate={isMobile ? { opacity: 1 } : { y: 0, opacity: 1, rotate: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12, duration: 1.2 }}
      whileHover={isMobile ? {} :{ scale: 1.02, rotate: 0 }}
      style={styles.newspaperContact}
    >
    <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
      <p style={styles.subHeadline}>I’d love to hear from my you!</p>

      <div  style={styles.letterContainer}>
        <div style={styles.letterForm}>
          <h2 style={{color:"whitesmoke"}}>Write Your Letter</h2>
          <form onSubmit={sendEmail} style={{display:"flex",flexDirection:"column"}}>
            <label style={{color:" whitesmoke"}}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.inputs}
            />

            <label style={{color:" whitesmoke"}}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.inputs}
            />

            <label style={{color:" whitesmoke"}}>Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.inputs}
            ></textarea>

            <button type="submit" style={styles.formBottom}>Send Letter</button>
          </form>
        </div>

        {/* Right column: Real Letter Preview */}
        <div  style={styles.editorNote}>
          <div  style={styles.letterPaper}>
            <h2 style={styles.letterHeading}>Dear Oussama,</h2>
            <p  style={styles.letterBody}>
              {formData.message || "Your message will appear here..."}
            </p>
            <p style={styles.letterSignature}>— {formData.name || "Your Name"}</p>
            <div  style={styles.letterMeta}>
              <p>
                <strong>by:</strong>{" "}
                {formData.email || "your.email@example.com"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
