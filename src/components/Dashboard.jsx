import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDummyData } from '../redux/service';


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/");
    };

    const dispatch = useDispatch();
    const dummyData = useSelector((state) => state.dummy.data);
    console.log(dummyData)
    useEffect(() => {
      dispatch(fetchDummyData());
    }, [dispatch]);
    return (
        <div className="flex">


            <div className={`flex-1 p-6 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-2 text-gray-600">
                    Welcome to the dashboard! Use the sidebar to navigate.
                </p>


                <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                    Logout
                </button>
            </div>
        </div>
    );
};


export default Dashboard;


