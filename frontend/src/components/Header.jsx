import { Link, NavLink } from "react-router-dom";

const Header = ({ toggle, setToggle }) => {
    const handleToggle = () => {
        setToggle(!toggle);
    };

    const styleNav = {
        navStyle: "flex align-middle justify-end font-medium text-sm w-full p-4 duration-500 ease-out px-5 h-[10vh]",
        styleActive: "border-b-2 border-black",
        stylePassive: "border-b-2 hover:border-black border-transparent transition-all ease-out duration-300"
    };

    return (
        <>
            <header className="flex justify-between px-5 lg:px-14 h-[10vh] py-10 align-middle items-center bg-white border-b top-0 z-50 w-full sticky">
                <h1 className="text-xl font-bold">Creative Land UB</h1>
                <Link to="/login" className="bg-black text-white px-5 py-2 flex align-middle items-center justify-center gap-1 rounded-full font-semibold">
                    login
                </Link>

                {toggle ? <button className="lg:hidden" onClick={handleToggle}><img src="/icon/close.svg" alt="close-menu" />
                </button> : <button className="lg:hidden" onClick={handleToggle}><img src="/icon/menu.svg" alt="menu" />
                </button>}

            </header>
            <Sidebar toggle={toggle} />
        </>
    );
};

function Sidebar({ toggle }) {
    const navStyle = "flex align-middle border-b justify-end font-medium text-sm w-full py-6 duration-500 ease-out px-5";
    const styleActive = "bg-black text-white";
    const stylePassive = "hover:bg-black hover:bg-black hover:bg-opacity-10";

    return (
        <section
            className={`md:hidden fixed w-3/5 h-screen duration-700 ease-out bg-white shadow-md ${toggle ? "right-0" : "-right-full"} shadow-md z-50`}>
            <div className="flex flex-col justify-between h-[90vh]">
                <div className="flex flex-col items-end">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? `${styleActive} ${navStyle}`
                                : `${stylePassive} ${navStyle}`
                        }
                    >
                        Home
                    </NavLink>
                </div>
                <div className="relative flex-col-reverse justify-end">
                    <div className="flex text-xs justify-end gap-3 right-0 px-5 py-4 border-t border-dark border-opacity-30 w-full text-end dark:text-whiteDeep">
                        <a href="https://www.instagram.com/ubkantin/" className="flex items-center justify-center w-8 h-8 border border-black rounded-full" target="blank"><img src="/icon/instagram.svg" className="mx-auto" alt="instagram" /></a>
                        <a href="" className="flex items-center justify-center w-8 h-8 border border-black rounded-full"><img src="/icon/mail.svg" className="mx-auto" alt="mail" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
