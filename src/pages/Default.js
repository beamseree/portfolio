import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Default = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/about");
    }, []);

    return (
        <div className=""></div>
    );
}
 
export default Default;