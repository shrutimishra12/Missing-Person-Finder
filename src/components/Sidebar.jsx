import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";


const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 flex flex-col ${isOpen ? "w-64" : "w-16"
                }`}
        >
            {/* Close Button (Above Menu) */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className={`text-lg font-bold transition-all ${isOpen ? "block" : "hidden"}`}>
                    {isOpen ? "Menu" : ""}
                </h2>
                <button onClick={toggleSidebar} className="text-xl p-2">
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>


            {/* Sidebar Menu */}
            <ul className="mt-6 space-y-2 flex-1">
                <li>
                    <Link
                        to="/dashboard"
                        className="flex items-center p-4 hover:bg-gray-700 transition-all"
                    >
                        <AiOutlineHome className="text-2xl" />
                        <span className={`ml-3 text-lg transition-all ${isOpen ? "block" : "hidden"}`}>
                            Dashboard
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="flex items-center p-4 hover:bg-gray-700 transition-all"
                    >
                        <AiOutlineUser className="text-2xl" />
                        <span className={`ml-3 text-lg transition-all ${isOpen ? "block" : "hidden"}`}>
                            About
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="flex items-center p-4 hover:bg-gray-700 transition-all"
                    >
                        <AiOutlinePhone className="text-2xl" />
                        <span className={`ml-3 text-lg transition-all ${isOpen ? "block" : "hidden"}`}>
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>


            {/* Bottom Close Button (Below Menu) */}
            <div className="p-4 border-t border-gray-700">
                <button onClick={toggleSidebar} className="flex items-center justify-center w-full p-2 hover:bg-gray-700">
                    {isOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
                </button>
            </div>
        </div>
    );
};


export default Sidebar;
