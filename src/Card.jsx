import CardImage from "./assets/giyu.jpg"
import { useNavigate } from "react-router-dom";


function Card(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/detailsPage");
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img className="card-image" src={CardImage} ></img>
            <h2 className="card-title" >{props.cardName}</h2>
        </div>
    )
}

export default Card