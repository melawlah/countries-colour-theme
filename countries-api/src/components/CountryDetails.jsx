import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import { styled } from "styled-components";
import BackButton from "./BackButton";

const CountryDetails = () => {
    let params = useParams();

    const [country, setCountry] = useState(undefined);

    const getCountry = async (name) => {
        const data = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        const country = data.data[0];

        if(country.borders) {
            country.borders = await Promise.all(country.borders.map(shortName => 
                axios.get(`https://restcountries.com/v3.1/alpha/${shortName}`).then(res => res.data[0].name.common)
            ))
        }
        setCountry(country);
    }

    useEffect(() => {
        getCountry(params.name);
    }, [params.name])

    return (
        <div>
            <Nav />
            <BackButton />
            {
                !country ? (<></>) : (
                    <div>
                    <DivContainer>
                        <div className="grid-item">
                            <img src={country.flags.png} alt={country.flags.alt} className="flag-image"/>
                        </div>
                        <div className="grid-item">
                            <h4>{country.name.common}</h4>
                            <div className="grid-container">
                                <div>
                                    <p><b>Name:</b> &nbsp; {country.name.common} </p>
                                    <p><b>Population:</b> &nbsp; {parseFloat(country.population).toLocaleString()}</p>
                                    <p><b>Region:</b> &nbsp; {country.region}</p>
                                    <p><b>Sub Region:</b> &nbsp; {country.subregion}</p>
                                    <p><b>Capital:</b> &nbsp; {country.capital[0]}</p>
                                </div>
                                <div>
                                    <p><b>Top Level Domain:</b> &nbsp; {country.tld[0]}</p>
                                    <p><b>Currencies:</b> &nbsp; 
                                    {
                                    
                                        Object.keys(country.currencies).map((currency, index) => {
                                        if (index === Object.keys(country.currencies).length - 1) {
                                            return (
                                            <span> {country.currencies[currency].name }</span>
                                            )
                                            } else {
                                            return (
                                                <span> {country.currencies[currency].name },</span>
                                            )
                                            }
                                        })
                                    }
                                    </p>
                                    <p><b>Languages:</b> &nbsp; 
                                    {
                                        Object.keys(country.languages).map((key, i) => {
                                            if (i === Object.keys(country.languages).length - 1) {
                                                return (
                                                    <span>{country.languages[key]}</span>
                                                )
                                                } else {
                                                return (
                                                    <span>{country.languages[key]}, &nbsp; </span> 
                                                )
                                            }
                                        })
                                    }
                                    </p>
                                </div>
                            </div>
                            {
                                country.borders ? (
                                    <div className="border-countries-div">
                                        <div>
                                            <p><b>Border Countries: </b></p> 
                                        </div>
                                        <div className="border-countries-button">
                                            {
                                                country.borders.map(border =>(
                                                    <span>
                                                        <button> {border} </button> &nbsp;
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : (<></>)
                            }
                        </div>
                    </DivContainer>
                </div>
                )
            }    
        </div>
    )
}

const DivContainer = styled.div`
    color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Arrange 2 elements in a row */
    padding: 0px 0px 100px 80px;

    .flag-image {
        width: 80%;
        height: 100%;
    }

    p {
        font-size: 11px;
    }

    b {
        font-size: 12px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Arrange 2 elements in a row */
    }

    .border-countries-div {
        display: flex;
    }

    .border-countries-button {
        padding-top: 8px;
        padding-left: 10px;
    }

    button {
        color: white;
        background-color: hsl(209, 23%, 22%);
        font-size: 11px;
        width: 90px;
        height: 20px;
        border: none;
        border-radius: 3px;
    }
`

export default CountryDetails;