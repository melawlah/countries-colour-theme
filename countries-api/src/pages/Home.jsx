import Nav from "../components/Nav";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Countries from "../components/Countries";

const Home = () => {
    return(
        <div>
           <Nav />
           <Search />  
           <Filter />
           <Countries />
        </div>
    )
}

export default Home;