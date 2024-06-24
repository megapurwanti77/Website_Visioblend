import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import asset1 from "./../assets/asset1.png";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });
      alert(response.data);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data);
      } else {
        alert("Failed to sign up");
      }
    }
  };

  return (
    <div className="signup-container" style={{ height: "100vh", width: "100vw" }}>
      <div className="signup-wrapper d-flex align-items-center" style={{ padding: "10% 0" }}>
        <div className="signup-row row p-0 m-0 w-100">
          <div className="signup-col-lg-6 col-lg-6">
            <div className="signup-content d-flex align-items-center justify-content-center w-100" style={{ height: "100%" }}>
              <div className="signup-form-container" style={{ width: "400px", position: "relative" ,left: "800px" }}>
                <h2 className="signup-heading mb-5" style={{ cursor: "default", fontFamily: "Poppins, sans-serif" }}>
                  Sign Up
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="signup-input-group mb-4 border rounded-3 d-flex align-items-center" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <span className="input-group-text bg-white border-0" id="basic-addon1">
                      <FontAwesomeIcon icon={faEnvelope} style={{ color: "#B8901A" }} />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control py-2 border-0 flex-placeholder"
                      placeholder="Your Email"
                      aria-label="Your Email"
                      aria-describedby="basic-addon1"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="signup-input-group border mb-4 rounded-3 d-flex align-items-center" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <span className="input-group-text bg-white border-0" id="basic-addon1">
                      <FontAwesomeIcon icon={faLock} style={{ color: "#B8901A" }} />
                    </span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control py-2 border-0 flex-placeholder"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="signup-input-group border mb-5 rounded-3 d-flex align-items-center" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <span className="input-group-text bg-white border-0" id="basic-addon1">
                      <FontAwesomeIcon icon={faLock} style={{ color: "#B8901A" }} />
                    </span>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control py-2 border-0 flex-placeholder"
                      placeholder="Confirm Password"
                      aria-label="Confirm Password"
                      aria-describedby="basic-addon1"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="signup-btn btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    style={{
                      backgroundColor: "#B8901A",
                      color: "white",
                      fontWeight: "500",
                      border: "none",
                      fontFamily: "Poppins, sans-serif",
                      transition: "background-color 0.3s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(184, 144, 26, 0.64)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#B8901A";
                    }}
                  >
                    SIGN UP
                  </button>
                </form>
                <div className="signup-divider d-flex align-items-center mt-4">
                  <div className="border col" style={{ height: "0px" }}></div>
                  <span
                    className="mx-2"
                    style={{
                      cursor: "default",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {" "}
                    OR{" "}
                  </span>
                  <div className="border col" style={{ height: "0px" }}></div>
                </div>
                <div className="signup-social-login row mt-3">
                  <div className="signup-col-md-6 col-md-6 mb-3">
                    <button
                      className="signup-google-btn btn btn-light w-100 d-flex align-items-center justify-content-center gap-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.559 14.2583C27.559 13.2837 27.4774 12.5565 27.3011 11.8057H14.2612V16.1942H21.9115C21.7701 17.3851 20.9805 19.2158 19.3215 20.2973L19.2999 20.4365L22.9643 23.0852L23.1938 23.1075C25.4031 21.0857 27.559 17.9637 27.559 14.2583Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M14.2612 27.5446C17.6042 27.5446 20.3444 26.455 22.3685 24.701L19.3215 20.2973C18.2798 20.9937 16.8642 21.5646 14.2612 21.5646C11.0007 21.5646 8.20731 19.5586 7.29018 16.5L7.14952 16.5112L3.35312 19.288L3.30293 19.4184C5.31693 23.3651 9.44271 27.5446 14.2612 27.5446Z"
                          fill="#34A853"
                        />
                        <path
                          d="M7.29018 16.5C7.0458 15.7492 6.90387 14.9579 6.90387 14.1302C6.90387 13.3024 7.0458 12.5112 7.26687 11.7603L7.26062 11.6079L3.4119 8.78997L3.30312 8.92393C2.37237 10.6996 1.77436 12.6951 1.77436 14.9095C1.77436 17.1238 2.37237 19.1193 3.30312 20.895L7.29018 16.5Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M14.2612 6.69696C16.702 6.69696 18.1876 7.72825 19.0342 8.51507L23.4074 4.14132C20.3374 1.31858 17.6042 0 14.2612 0C9.44271 0 5.31693 4.17949 3.30293 8.92393L7.26687 11.7603C8.20731 8.70112 11.0007 6.69696 14.2612 6.69696Z"
                          fill="#EB4335"
                        />
                      </svg>
                      Google
                    </button>
                  </div>
                  <div className="signup-col-md-6 col-md-6 mb-3">
                    <button
                      className="signup-facebook-btn btn btn-light w-100 d-flex align-items-center justify-content-center gap-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{
                          width: "30px",
                          height: "29px",
                          color: "#1877F2",
                        }}
                      />
                      Facebook
                    </button>
                  </div>
                </div>
                <p
                  className="signup-existing-account mt-3"
                  style={{
                    cursor: "default",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                  }}
                >
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="link-cstm"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "600",
                      transition: "color 0.3s ease, transform 0.3s ease", // Efek transisi untuk hover dan klik
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#000000";
                    }} // Saat mouse masuk, ubah warna latar belakang
                    onMouseLeave={(e) => {
                      e.target.style.color = "#B8901A";
                    }} // Saat mouse keluar, atur transparansi
                  >
                    LOGIN
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="signup-col-lg-6 col-lg-6 signup-d-cstm">
            <div
              className="signup-w-100 d-flex justify-content-center flex-column"
              style={{ height: "100%" }}
            >
              <div style={{ width: "500px", position: "relative", right: "700px" }}>
                <p
                  className="signup-quote fs-2 m-0"
                  style={{
                    cursor: "default",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  "Realize & Capture
                  <br /> Every Moment with{" "}
                  <span style={{ color: "#B8901A", position: "relative", right: "2px" }}>VisioBlend</span>."
                </p>

                <p style={{ textAlign: "right", cursor: "default", position: "relative", right: "10px" }}>
                  - EST. 2023
                </p>
                <img
                  className="signup-asset"
                  style={{ maxWidth: "100%", position: "relative", right: "20px" }}
                  src={asset1}
                  alt="Asset 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
