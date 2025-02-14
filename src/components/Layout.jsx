import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";




const Layout = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="flex">
            <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
            <div className={`flex-1 p-6 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
                <Outlet />
            </div>
        </div>
    );
};


export default Layout;


