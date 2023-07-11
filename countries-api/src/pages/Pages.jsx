import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";

const Pages = () => {
    const location = useLocation();

    return (
        <Routes Location={location} key={(location.path)} >
            <Route path='/' element={<Home />}/>
            <Route path='/country/:name' element={<CountryDetails />} />
        </Routes>
    )
}

export default Pages;