import { useLocation } from "react-router-dom";

const Display = () => {
    const location = useLocation();
    const actualData = location.state.data;
    const locateData = location.state.userData; 
    return(
        <>
        <h1>{actualData}</h1>
        <div>
            <h3>{locateData.username}</h3>
            <h3>{locateData.email}</h3>
            <h3>{locateData.password}</h3>
        </div>
        </>
    )
}

export default Display;