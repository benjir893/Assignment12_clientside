import Marquee from "react-fast-marquee";


const Subsection = ({ subheader, header, description }) => {
    return (
        <div className="my-10 w-1/4  text-center">
            <h3 className="text-xl text-lime-500 font-semibold uppercase  border-solid border-b-2 border-lime-300 p-3">{subheader}</h3>
            <Marquee direction="left">
                <h1 className="text-2xl text-lime-600 font-semibold uppercase   border-solid border-b-2 border-lime-300 p-3">{header}</h1>
            </Marquee>
            <p className="text-sm text-lime-700 font-semibold uppercase  border-solid border-b-2 border-lime-300 p-3">{description}</p>
            <p className="p-2"><button className="p-3 bg-black bg-opacity-30 text-sm text-lime-700 font-semibold uppercase  border-solid border-b-2 border-lime-300">Meet out Team</button></p>

        </div>
    );
};

export default Subsection;