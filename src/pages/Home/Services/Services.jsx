
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl text-orange-500 mt-12 mb-4 font-bold">Service </h1>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}

                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;