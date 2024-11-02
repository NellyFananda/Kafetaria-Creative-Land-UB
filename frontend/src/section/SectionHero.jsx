import { Link } from "react-router-dom";

const SectionHero = () => {
    return (
        <section className="bg-hero flex flex-col lg:flex-row w-full lg:h-screen bg-cover bg-center items-center lg:px-14 lg:gap-10 align-middle justify-center lg:justify-start after:absolute after:bg-black after:h-screen after:inset-0 after:opacity-50 h-[90vh] overflow-hidden">
            <div className="m-5 lg:m-0 z-10">
                <h1 className="text-white font-bold text-5xl lg:text-6x lg:w-6/12">
                    Selamat Datang di Creative Land
                </h1>
                <h4 className="font-semibold text-white text-sm mt-3">
                Mari eksplorasi pilihan hidangan kami yang menggugah selera dan ciptakan momen berkesan bersama.
                </h4>
                <ul className="mt-3 flex flex-col gap-y-1 lg:gap-y-3">
                    <li className="flex gap-x-2 items-center align-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#fff"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <span className="text-white">Beragam Menu Lezat</span>
                    </li>
                    <li className="flex gap-x-2 items-center align-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#fff"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <span className="text-white">Harga Terjangkau</span>
                    </li>
                    <li className="flex gap-x-2 items-center align-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#fff"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <span className="text-white">Tempat Nyaman dan Teduh</span>
                    </li>
                    <li className="flex gap-x-2 items-center align-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#fff"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <span className="text-white">Akses Wifi Gratis</span>
                    </li>
                </ul>
                {/* <div className="flex gap-x-4">
                    <Link
                        to={"/services"}
                        className="bg-white text-black px-5 py-2 rounded-full mt-5 font-semibold text-sm"
                    >
                        See Services
                    </Link>
                    <Link
                        to={"/about"}
                        className="bg-white text-black px-5 py-2 rounded-full mt-5 font-semibold text-sm"
                    >
                        About Us
                    </Link>
                </div> */}
            </div>
        </section>
    );
};

export default SectionHero;
