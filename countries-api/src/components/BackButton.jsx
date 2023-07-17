import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { styled } from "styled-components";

const BackButton = () => {
    return (
        <BackButtonDiv>
            <Link to={'/'}>
                <FaArrowLeft></FaArrowLeft>
                <button> Back </button>
            </Link>
        </BackButtonDiv>
    )
}

const BackButtonDiv = styled.div`
    position: relative;
    padding: 80px;

    button{
        background-color: hsl(209, 23%, 22%);
        border: none;
        color: white;
        font-size: 11px;
        border-radius: 3px;
        padding: 1rem 3rem;
    }

    svg {
        position: absolute;
        color: white;
        top: 46%;
        left: 7%;
        scale: 0.7;
    }

`

export default BackButton;