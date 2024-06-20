import React, { useState } from "react";
import './portfolio.css';
import iconPortfolio from "./../assets/iconPortfolio.svg";
import image1 from "../assets/image/image1.jpg";
import image2 from "../assets/image/image2.jpg";
import image3 from "../assets/image/image3.jpg";
import image4 from "../assets/image/image4.jpg";
import image5 from "../assets/image/image5.jpg";
import image6 from "../assets/image/image6.jpg";
import image7 from "../assets/image/image7.jpg";
import image8 from "../assets/image/image8.jpg";
import image9 from "../assets/image/image9.jpg";

const Portfolio = () => {
    const [enlargedPhoto, setEnlargedPhoto] = useState(null);

    const handlePhotoClick = (src) => {
        setEnlargedPhoto(src);
    };

    const closeModal = () => {
        setEnlargedPhoto(null);
    };

    return (
        <div>
            <div className="logo-container">
                <img src={iconPortfolio} alt="Logo" className="logo" />
            </div>
            <div className="Judul">
                <h1 className="title">Portfolio Ceremonial Photo & Video</h1>
            </div>
            <div className="nvbar-container">
                <div className="nvbar">
                    <div className="nvbar-left">
                        <button className="oval-button" onClick={() => window.history.back()}>Back</button>
                    </div>
                    <div className="nvbar-right">
                        <span>Design Marketing & Architect</span>
                        <span>Commercial</span>
                        <span>Ceremonial</span>
                        <span>Gen-Z</span>
                    </div>
                </div>
            </div>
            <div className="photo-grid">
                <div className="photo-column">
                    <div className="photo">
                        <img src={image1} alt="Image 1" onClick={() => handlePhotoClick(image1)} />
                    </div>
                    <div className="photo">
                        <img src={image2} alt="Image 2" onClick={() => handlePhotoClick(image2)} />
                    </div>
                    <div className="photo">
                        <img src={image3} alt="Image 3" onClick={() => handlePhotoClick(image3)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image4} alt="Image 4" onClick={() => handlePhotoClick(image4)} />
                    </div>
                    <div className="photo">
                        <img src={image5} alt="Image 5" onClick={() => handlePhotoClick(image5)} />
                    </div>
                    <div className="photo">
                        <img src={image6} alt="Image 6" onClick={() => handlePhotoClick(image6)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image7} alt="Image 7" onClick={() => handlePhotoClick(image7)} />
                    </div>
                    <div className="photo">
                        <img src={image8} alt="Image 8" onClick={() => handlePhotoClick(image8)} />
                    </div>
                    <div className="photo">
                        <img src={image9} alt="Image 9" onClick={() => handlePhotoClick(image9)} />
                    </div>
                </div>
            </div>

            {enlargedPhoto && (
                <div className="photo-modal" onClick={closeModal}>
                    <span className="close-modal">&times;</span>
                    <img src={enlargedPhoto} alt="Enlarged" />
                </div>
            )}
        </div>
    );
}

export default Portfolio;
