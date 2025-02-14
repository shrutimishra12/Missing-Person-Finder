
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";


const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
    return (
        <>
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                />
            )}


            <div
                className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 flex flex-col z-50 ${isOpen ? "w-64" : "w-16"
                    } ${isMobile ? "absolute" : ""}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className={`text-lg font-bold transition-all ${isOpen ? "block" : "hidden"}`}>
                        {isOpen ? "Menu" : ""}
                    </h2>
                    <button onClick={toggleSidebar} className="text-xl p-2">
                        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>


                <ul className="mt-6 space-y-2 flex-1">
                    <li>
                        <Link to="/dashboard" className="flex items-center p-4 hover:bg-gray-700 transition-all">
                            <AiOutlineHome className="text-2xl" />
                            <span className={`ml-3 text-lg transition-all ${isOpen ? "block" : "hidden"}`}>
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="flex items-center p-4 hover:bg-gray-700 transition-all">
                            <AiOutlineUser className="text-2xl" />
                            <span className={`ml-3 text-lg transition-all ${isOpen ? "block" : "hidden"}`}>
                                About
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="flex items-center p-4 hover:bg-gray-700 transition-all">
                            <AiOutlinePhone className="text-2xl" />
                            <span className={`ml-3 text-lg transition-all ${isOpen ? "block" : "hidden"}`}>
                                Contact
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/report" className="flex items-center p-4 hover:bg-gray-700 transition-all">
                            <BsPerson className="text-2xl" />
                            <span className={`ml-3 text-lg transition-all ${isOpen ? "block" : "hidden"}`}>
                                Report
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};


export default Sidebar;


