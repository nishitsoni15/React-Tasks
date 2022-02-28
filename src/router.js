import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard,Display } from "./pages/index";

const Router = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Dashboard />}/>
                <Route path="/display" exact element={<Display />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;