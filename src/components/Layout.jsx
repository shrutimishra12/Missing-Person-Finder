import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";


const Layout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="flex min-h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} isMobile={isMobile} />
            <div
                className={`flex-1 p-6 transition-all duration-300 ${isMobile ? "pl-20" : isOpen ? "ml-64" : "ml-16"
                    }`}
            >
                <Outlet />
            </div>
        </div>
    );
};


export default Layout;


