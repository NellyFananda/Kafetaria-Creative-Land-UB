import { Link } from "react-router-dom";

const CardService = ({ img, title, desc, details, order, price }) => {
    return (
        <>
            <div
                className={`${img} flex flex-col-reverse bg-cover bg-center backdrop-blur-md rounded-xl h-80 w-full mx-auto px-4 filter backdrop-brightness-50 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:rounded-xl after:bg-opacity-50 after:-z-10`}>
                <div className="flex gap-x-2 justify-center mb-5 z-10">
                    <div className="absolute top-4 right-4 bg-white py-1 px-3 backdrop-blur-lg bg-opacity-50 font-bold rounded-full text-xs">
                        Rp. {price}
                    </div>
                    <Link
                        to={order}
                        className="bg-white text-black px-5 py-2 flex align-middle items-center justify-center gap-1 rounded-full mt-5 w-full font-semibold text-xs z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                        Order Now
                    </Link>

                </div>
                <div>
                    <h1 className="text-white font-bold text-sm tracking-wide mx-2 text-center align-bottom z-50" >{title}</h1>
                    <p className="text-white font-thin text-xs text-center align-bottom z-10">{desc}</p>
                </div>
            </div>
        </>
    );
};

export default CardService;
