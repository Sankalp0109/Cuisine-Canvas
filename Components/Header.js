import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import { LOGO_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const status = useNetworkStatus();
    //console.log("header render");
    const dummy = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between bg-yellow shadow-lg m-2"style={{ backgroundColor: "rgb(253,207,43)"}}>
            <div>
                <img style={{ height: "8rem", width: "8rem" }} alt="logo" src={LOGO_URL}
                />
            </div>
            <div className="nav- items-center">
                <ul className="flex p-4 m-4">
                    
                    <li className="bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium m-2 hover:bg-gray-600">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium m-2 hover:bg-gray-600">
                        {status == true ? "online ✅" : "offline 💀"}
                    </li>
                    {/* <li className="bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium m-2 hover:bg-gray-600">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium m-2 hover:bg-gray-600">
                        <Link to="/contact">Contact</Link>
                    </li > */}
                    {/* <Link to={"/groccery"}><li className="bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium m-2 hover:bg-gray-600">Groccery</li></Link> */}
                    {/* <li className="bg-gray-400 text-white rounded-md px-5 py-2 text-sm font-medium m-2 hover:bg-gray-600"><button onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>
                        {btnName}
                    </button>

                    </li> */}
                    <Link to={"/cart"}><li className="font-bold m-2">Cart ({cartItems.length})</li></Link>
                    {/* <li className="font-bold m-2">{dummy.logedInUser}</li> */}
                </ul>
            </div>


        </div>
    );
}