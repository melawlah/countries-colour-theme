import { styled } from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const Filter = () => {
    return (
        <div>
            <FilterForm>
                <div className="select-div">
                    <FaChevronDown></FaChevronDown>
                    <select>
                        <option>Filter by Region </option>
                        <option>America </option>
                        <option>Asia </option>
                        <option>Europe </option>
                        <option>Oceania </option>
                    </select>
                </div>
            </FilterForm>
        </div>
    )
}

const FilterForm = styled.form`
    padding: 40px 64px;

    select {
        background-color: hsl(209, 23%, 22%);
        padding: 1rem 1rem;
        border: none;
        outline: none;
        width: 16%;
        border-radius: 0.3rem;
        color: white;
        font-size: 11px;
        float: right;
        -webkit-appearance: none;
        appearance: none;
    }

    .select-div{
        position: relative;
    }

    svg {
        position: absolute;
        padding-top: 17px;
        right: 1%;
        color: white;
        height: 10px;
        width: 10px;
    }
`

export default Filter;