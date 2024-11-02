import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <main className={"w-full"}>
            <Header toggle={toggle} setToggle={setToggle} />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </main>
    );
}

export default Layout;