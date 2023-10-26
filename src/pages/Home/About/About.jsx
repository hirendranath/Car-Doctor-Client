

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src="https://i.ibb.co/pLrqyW2/person.jpg" className=" w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/D1KChmt/parts.jpg" className=" top-1/2 right-5 border-8 border-white rounded-lg borde absolute w-1/2 shadow-2xl" />
                </div>
                <div className="lg:w-1/2 lg:mb-0 mt-12 ">

                    <h1 className="text-2xl text-orange-500 mb-8 font-bold">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;