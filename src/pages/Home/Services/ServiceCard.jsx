import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {title} </h2>

                <div className='flex items-center gap-12git init justify-between'>
                    <p>Price: ${price} </p>
                    <FaArrowRight />
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;