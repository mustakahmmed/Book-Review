import { useLoaderData } from "react-router-dom";

import Books from "../Books/Books";
import Banner from "../Banner/Banner";


const Home = () => {
    const books = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;