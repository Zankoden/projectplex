import CardImage from "./assets/giyu.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Card({ id, cardImage, cardTitle, cardDescription, link }) {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(cardImage || CardImage);

    const handleClick = () => {
        navigate(`/detailsPage/${id}`, { state: { id, cardImage, cardTitle, cardDescription, link } });
    };

    const handleImageError = () => {
        setImageSrc(CardImage);
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img
                className="card-image"
                src={imageSrc}
                alt={cardTitle}
                onError={handleImageError}
            />
            <h2 className="card-title">{cardTitle}</h2>
        </div>
    );
}

export default Card;
