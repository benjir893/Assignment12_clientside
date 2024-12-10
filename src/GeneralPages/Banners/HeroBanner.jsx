import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import medi1 from '../../assets/medical-banner1.avif';
import medi2 from '../../assets/medical-banner2.jpg';
import medi3 from '../../assets/medical-banner3.jpg';
import medi4 from '../../assets/medical-banner4.webp'
import medi5 from '../../assets/medical-banner5.jpg';
import Subsection from "./Subsection";


const HeroBanner = () => {
    return (

        <Carousel>
            <div>
                <img src={medi1} />
                <p className="ml-10 -mt-96">
                    <Subsection subheader={'PRIORITY TREATEMENT'} header={'with our expert team'} description={'Just give us a call and we got your sickness covered. Our expert Physicians are ready for 24 /7 at your service'}></Subsection>
                </p>

            </div>
            <div>
                <img src={medi2} />
                <p className="ml-10 -mt-96">
                    <Subsection subheader={'PRIORITY TREATEMENT'} header={'with our expert team'} description={'Just give us a call and we got your sickness covered. Our expert Physicians are ready for 24 /7 at your service'}></Subsection>
                </p>
            </div>
            <div>
                <img src={medi3} />
                <p className="ml-10 -mt-96">
                    <Subsection subheader={'PRIORITY TREATEMENT'} header={'with our expert team'} description={'Just give us a call and we got your sickness covered. Our expert Physicians are ready for 24 /7 at your service'}></Subsection>
                </p>
            </div>
            <div>
                <img src={medi4} />
                <p className="ml-10 -mt-96">
                    <Subsection subheader={'PRIORITY TREATEMENT'} header={'with our expert team'} description={'Just give us a call and we got your sickness covered. Our expert Physicians are ready for 24 /7 at your service'}></Subsection>
                </p>
            </div>
            <div>
                <img src={medi5} />
                <p className="ml-10 -mt-96">
                    <Subsection subheader={'PRIORITY TREATEMENT'} header={'with our expert team'} description={'Just give us a call and we got your sickness covered. Our expert Physicians are ready for 24 /7 at your service'}></Subsection>
                </p>
            </div>
        </Carousel>

    );
};

export default HeroBanner;