import { Helmet } from "react-helmet-async";
import Categoris from "../Banners/Categoris";
import HeroBanner from "../Banners/HeroBanner";
import Subtitle from "../Banners/Subtitle";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Benjir|Home</title>
            </Helmet>
            <HeroBanner></HeroBanner>
            <Subtitle title={'our laboratories'} subtitle={'our quality never compromise'}></Subtitle>
            <Categoris></Categoris>
            <Services></Services>
        </div>
    );
};

export default Home;