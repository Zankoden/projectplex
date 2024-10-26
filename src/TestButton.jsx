import { useNavigate } from "react-router-dom";

function Button({route, buttonName}) {

    const navigate = useNavigate();
    const styles = {
  
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "White",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
   
    }
    const handleClick = () => {
        navigate(route);
      };

return (
    <button style={styles} onClick={handleClick} >{buttonName}</button>
);
}

export default Button