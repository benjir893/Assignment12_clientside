import Categoris from "../Banners/Categoris";
import HeroBanner from "../Banners/HeroBanner";
import Subtitle from "../Banners/Subtitle";


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Subtitle title={'our services'} subtitle={'our quality never compromise'}></Subtitle>
            <Categoris></Categoris>
        </div>
    );
};

export default Home;