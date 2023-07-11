import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";

const Search = () => {
    return (
        <SearchForm>
            <div className="form-div">
                <form>
                    <div>
                        <FaSearch></FaSearch>
                        <input placeholder="Search for a country..." />
                    </div>
                </form>
            </div>
        </SearchForm>
    )
}

const SearchForm = styled.div`
.form-div{
    float: left;
    width: 50%;
    padding: 40px 80px;
}

form > div{
    width: 100%;
    position: relative;
}
input{
    background-color: hsl(209, 23%, 22%);
    padding: 1rem 1rem;
    border: none;
    outline: none;
    width: 63%;
    border-radius: 0.3rem;
}
::placeholder {
    color: white;
    font-size: 11px;
    transform: translate(15%, 0%);
}
svg{
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translate(-45%, -50%);
    color: white;
    height: 25%;
    width: 25%;
}
`

export default Search;