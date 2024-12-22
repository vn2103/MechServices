import React, { useState } from "react";
import { Link } from "react-router-dom";
const ReferAndEarn = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const generateWhatsAppMessage = () => {
    // Check if phone number is exactly 10 digits
    const isValidPhone = /^\d{10}$/.test(phone);

    if (name && isValidPhone) {
      const referralLink = "https://services.mechhelp.in/"; // Phone number as referral code
      const message = `Hello! This is ${name}. I've been using MechHelp and had a great experience! Use my referral code ${phone} to sign up and enjoy the benefits. Here’s the link to join: ${referralLink}`;
      const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

      window.open(whatsappLink, "_blank");
    } else if (!name) {
      alert("Please enter your name.");
    } else if (!isValidPhone) {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const copyReferralLink = () => {
    const referralLink = "https://vn2103.github.io/Mechhelp-services/";
    navigator.clipboard.writeText(referralLink).then(
      () => alert("Referral link copied to clipboard!"),
      () => alert("Failed to copy referral link.")
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f7fc", color: "#333" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {/* Hero Section */}
        <div
          className="hero"
          style={{
            backgroundColor: "darkorange",
            color: "#fff",
            padding: "40px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "2.5em", margin: "0 0 10px" }}>Invite Friends, Earn Rewards!</h1>
          <p style={{ fontSize: "1.2em", margin: "10px 0" }}>
            Earn rewards every time a friend joins through your unique referral link.
          </p>
        </div>

        {/* How It Works Section */}
        <div
          className="how-it-works"
          style={{ marginTop: "30px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <h2 className="section-title" style={{ fontSize: "1.8em", marginBottom: "10px", color: "#333", textAlign: "center" }}>
            How It Works
          </h2>
          <div
            className="steps"
            style={{ display: "flex", gap: "20px", justifyContent: "space-around", flexWrap: "wrap" }}
          >
            <div className="step" style={{ textAlign: "center", flex: 1, minWidth: "200px", marginBottom: "20px" }}>
              <h3>1. Share Link</h3>
              <p>Enter details and share this link</p>
            </div>
            <div className="step" style={{ textAlign: "center", flex: 1, minWidth: "200px", marginBottom: "20px" }}>
              <h3>2. Friend Signs Up</h3>
              <p>When your friend uses this code in the chatbot</p>
            </div>
            <div className="step" style={{ textAlign: "center", flex: 1, minWidth: "200px", marginBottom: "20px" }}>
              <h3>3. Earn Rewards</h3>
              <p>Get rewarded every time a friend joins and completes an action.</p>
            </div>
          </div>
        </div>

        {/* Dashboard Section */}
        <div
          className="dashboard"
          style={{ marginTop: "30px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <h2 className="section-title" style={{ fontSize: "1.8em", marginBottom: "10px", color: "#333", textAlign: "center" }}>
            Your Dashboard
          </h2>

          {/* Input fields for name and number */}
          <div className="form-group" style={{ margin: "10px 0", padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>
          <div className="form-group" style={{ margin: "10px 0", padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
            <label htmlFor="phone">Your Phone Number:</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>

          {/* Button to generate WhatsApp message */}
          <button
            className="generate-button"
            onClick={generateWhatsAppMessage}
            style={{
              backgroundColor: "darkorange",
              color: "#fff",
              padding: "10px",
              border: "none",
              fontSize: "clamp(0.9em, 2.5vw, 1em)",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              width: "100%",
              textAlign: "center",
            }}
          >
            Generate WhatsApp Message
          </button>

          {/* Button to copy referral link */}
          <button
            className="copy-button"
            onClick={copyReferralLink}
            style={{
              backgroundColor: "#555",
              color: "#fff",
              padding: "10px",
              border: "none",
              fontSize: "clamp(0.9em, 2.5vw, 1em)",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              width: "100%",
              textAlign: "center",
            }}
          >
            Copy Referral Link
          </button>
        </div>

        {/* Back to Home Button */}
        <div
          className="form-group"
          style={{ marginTop: "10vh", display: "flex", justifyContent: "center", backgroundColor: "darkorange",borderRadius: "10px", padding:"1rem 0"}}
        >
          
            <Link style={{textDecoration:"none", color:"white"}} to="/">Back to Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
