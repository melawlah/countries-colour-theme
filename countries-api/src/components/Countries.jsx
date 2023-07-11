import Country from "./Country";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Countries = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;

    useEffect(()  => {
        try {
            const apiURL = 'https://restcountries.com/v3.1/all';
            axios.get(apiURL).then((countriesData) => {
                const allCountries = countriesData.data;
                setData(allCountries);
            });

        } catch(error) {
            console.error('Error fetching data:', error);
        }
      
    }, []);

    const handlePageChange = ({selected}) => {
        setCurrentPage(selected);
    };

    const renderedData = data.slice(
        currentPage * itemsPerPage, 
        (currentPage + 1) * itemsPerPage
    );

    return (
        <GridContainer >
                <div className="grid-container">
                    {renderedData.map((countryData) => (
                        <Country 
                            key={countryData.flag}
                            imgSrc={countryData.flags.png} 
                            imgAlt={countryData.flags.alt}
                            countryName={countryData.name}
                            population={countryData.population}
                            region={countryData.region}
                            capital={countryData.capital}
                        />
                    ))}
                    </div>

                    <div className="pagination-container">
                        <ReactPaginate 
                            pageCount={Math.ceil(data.length / itemsPerPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageChange}
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </div>
                
        </GridContainer>
    )
}

const GridContainer = styled.div`
    padding: 50px 50px 50px 80px;

    .grid-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Arrange four elements in a row */
        grid-gap: 55px;
    }

    .pagination-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .pagination {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .pagination li {
        display: inline-block;
        margin-block: 10px;
        cursor: pointer;
        color: white;
        font-size: 14px;
        padding: 5px;
    }

    .pagination li.active {
        background-color: white;
        color: hsl(209, 23%, 22%);
    }
`

export default Countries;