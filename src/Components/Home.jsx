import Banner from "./Banner";
import HomeCards from "./HomeCards";
import Partnre from "./Partnre";
import Why from "./Why";
import {  Slide } from "react-awesome-reveal";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCards></HomeCards>
            <Slide>
            <Why></Why>
            <Partnre></Partnre>
            </Slide>
        </div>
    );
};

export default Home;