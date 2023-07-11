import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Country = (countryData) => {
    return (  
        <LinkGridItem to={'/country/'+countryData.countryName.common}>   
            <div className="grid-item"> 
                <img src={countryData.imgSrc} alt={countryData.imgAlt}  />
                <div className="country-details">
                    <h4> <b>{countryData.countryName.common} </b></h4>
                    <p> <b> Population:</b> {parseFloat(countryData.population).toLocaleString()}</p>
                    <p> <b> Region:</b> {countryData.region}</p>
                    <p> <b> Capital:</b> {countryData.capital}</p>
                </div>
            </div>
        </LinkGridItem>
    )
}


const LinkGridItem = styled(Link)` 
    text-decoration: none;

    .grid-item {
        border-radius: 3px;
        background-color: hsl(209, 23%, 22%);
        color: white;
        width: 280px;
    }

    img {
        width: 280px;
        height: 180px;
        border-radius: 3px 3px 0px 0px;
    }

    .country-details{
        padding: 10px 0px 30px 20px;
    }

    p {
        font-size: 11px;
    }

    h4 {
        font-size: 14px;
    }

`



export default Country;