import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import { styled } from "styled-components";
import BackButton from "./BackButton";

const CountryDetails = () => {
    let params = useParams();

    const [country, setCountry] = useState([]);

    const getCountry = async (name) => {
        const data = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        // console.log(data, "data")
        setCountry(data.data);
    }

    useEffect(() => {
        getCountry(params.name);
    }, [params.name])

    return (
        <div>
            {/* make back button */}
            {/* have map detials */}
            {/* divide map details into two, have picture on one sife and have a grid divided by two on the other side  */}
            <Nav />
            <BackButton />
            {country.map((info) => {
                console.log(info, "i want it all")
               
                const keys1 = Object.keys(info.languages);
                const keys2 = Object.keys(info.name.nativeName);

                const commonKeys = keys1.filter(key => keys2.includes(key));

                return(
                    
                    <div>
                        <DivContainer>
                            <div className="grid-item">
                                <img src={info.flags.png} alt={info.flags.alt} className="flag-image"/>
                            </div>
                            <div className="grid-item">
                                <h4>{info.name.common}</h4>
                                <div className="grid-container">
                                    <div>
                                        <p><b>Native Name:</b> &nbsp; {info.name.nativeName[commonKeys[0]].common} </p>
                                        <p><b>Population:</b> &nbsp; {parseFloat(info.population).toLocaleString()}</p>
                                        <p><b>Region:</b> &nbsp; {info.region}</p>
                                        <p><b>Sub Region:</b> &nbsp; {info.subregion}</p>
                                        <p><b>Capital:</b> &nbsp; {info.capital[0]}</p>
                                    </div>
                                    <div>
                                        <p><b>Top Level Domain:</b> &nbsp; {info.tld[0]}</p>
                                        <p><b>Currencies:</b> &nbsp; 
                                        {
                                        
                                         Object.keys(info.currencies).map((currency, index) => {
                                           
                                            // <span> {info.currencies[key].name }</span>
                                            if (index === Object.keys(info.currencies).length - 1) {
                                               return (
                                                <span> {info.currencies[currency].name }</span>
                                               )
                                              } else {
                                                return (
                                                    <span> {info.currencies[currency].name },</span>
                                                )
                                              }
                                            // <span>{key.name}</span>
                                            // console.log(info.currencies[key].name, "mental gynamastics owa poju")
                                            })
                                        }
                                        </p>
                                        {/* <p><b>Languages:</b> &nbsp; {info.capital[0]}</p> */}
                                        <p><b>Languages:</b>
                                        {/* {
                                         (info.capital).map(key => (
                                            <span> {info.capital[key].name }</span>
                                            // console.log(info.currencies[key].name, "mental gynamastics owa poju")
                                         ))
                                        } */}
                                        </p>
                                    </div>
                                </div>
                                <div className="border-countries-div">
                                    <div>
                                        <p><b>Border Countries: </b></p> 
                                    </div>
                                    <div className="border-countries-button">
                                        {
                                            info.borders.map(border =>(
                                                <span>
                                                    <button> {border} </button> &nbsp;
                                                </span>
                                               
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </DivContainer>
                    </div>
                )
            })}
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