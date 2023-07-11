import { Link } from "react-router-dom";
import {styled} from 'styled-components';
import { FaMoon } from 'react-icons/fa';

const Nav = () => {
    return(
        <div>
            <NavList>
                <ul>
                    <li className="home">
                        <Link to={'/'}>
                            <span className="logo-text"> Where in the world? </span>
                        </Link>
                    </li>
                    <li className="display">
                        <FaMoon className='FaMoon'></FaMoon> 
                        <span className="dark-mode-text"> Dark Mode</span>
                    </li>
                </ul>
            </NavList>
        </div>
    )
}

const NavList = styled.nav`
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        //padding: 23px;
        padding: 23px 80px 23px;
        background-color: hsl(209, 23%, 22%);
    }
    li {
        color: white;
    }
    a {
        text-decoration: none;
        color: white;
    }
    .home {
        display: flex;
     //   gap: 2em;
    //    margin-right: 35%;
      
    }
     .display {
        display: flex;
      //  gap: 2em;
    // 
    //     margin-left: 35%;
     }

    .dark-mode-text{
        font-size: 12px;
        font-weight: 800;
        padding-left: 15px;
    }
    .logo-text {
        font-size: 18px;
        font-weight: 800;
    }

    .FaMoon{
        height: 0.65em;
        width: 0.65em;
    }
`

export default Nav;