

const Banner = () => {
    const btnCercle = <>

    </>
    return (
        <div className="carousel w-full md:h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/X2ycYVL/1.jpg" className="w-full rounded-lg " />

                <div className="absolute rounded-lg h-full left-0 top-0  bottom-0 pl-12 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] bottom-5 items-center gap-4 ">
                    <div className="grid gap-6 w-3/4 ">
                        <h3 className="text-4xl font-bold text-white" > Affordable Price For Car Servicing </h3>
                        <p className="text-white" >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <button className="btn btn-neutral mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-4 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ZH70c84/2.jpg" className="w-full" />
                <div className="absolute rounded-lg h-full left-0 top-0  bottom-0 pl-12 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] bottom-5 items-center gap-4 ">
                    <div className="grid gap-6 w-3/4 ">
                        <h3 className="text-4xl font-bold text-white" > Affordable Price For Car Servicing </h3>
                        <p className="text-white" >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <button className="btn btn-neutral mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-4 ">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/BgPZKm5/3.jpg" className="w-full" />
                <div className="absolute rounded-lg h-full left-0 top-0  bottom-0 pl-12 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] bottom-5 items-center gap-4 ">
                    <div className="grid gap-6 w-3/4 ">
                        <h3 className="text-4xl font-bold text-white" > Affordable Price For Car Servicing </h3>
                        <p className="text-white" >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <button className="btn btn-neutral mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-4 ">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/8KybrqW/4.jpg" className="w-full" />

                <div className="absolute rounded-lg h-full left-0 top-0  bottom-0 pl-12 flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] bottom-5 items-center gap-4 ">
                    <div className="grid gap-6 w-3/4 ">
                        <h3 className="text-4xl font-bold text-white" > Affordable Price For Car Servicing </h3>
                        <p className="text-white" >There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="">
                            <button className="btn btn-neutral mr-6">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-4 ">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;