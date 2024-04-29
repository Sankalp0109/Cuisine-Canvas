import { RestrauntCard, WithLabel } from "./ReastrauntCard";
import { useEffect, useState, useContext } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [res, setRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [dummyRes, setDummyRes] = useState([]);
    const OpenRestraunt = WithLabel(RestrauntCard);
    const { setUserName, logedInUser } = useContext(UserContext);
    useEffect(() => {
        fetchData();
        console.log("useEffect Called");
    }, []);
    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999");
        const json = await data.json();


        const newData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(newData);

        setRes(newData);
        setDummyRes(newData);
    };
    return res.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', padding: '3px', margin: '5px' }}  value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="search-button px-4 py-2 bg-green-500 rounded-md h-12" onClick={() => {
                        const filterRestaurant = res.filter((data) => data.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setDummyRes(filterRestaurant)
                    }}>Search</button>
                    <button className="btn px-4 py-2 bg-gray-100 m-4 rounded-md" onClick={() => {
                        const newList = res.filter((data) => data.info.avgRating > 4.3);
                        setDummyRes(newList);
                    }}>
                        Filter restaurant Above 4⭐ Rating
                    </button>
                    {/* <input className="border-black border" value={logedInUser} onChange={(e) => setUserName(e.target.value)} ></input> */}
                </div>

            </div>

            <div className="restaurant-list flex flex-wrap ">
                {dummyRes.map((restraut) => <Link key={restraut.info.id} to={"/restraunt/" + restraut.info.id}>{restraut.info.isOpen ? (
                    <OpenRestraunt resData={restraut} />) : (
                    <RestrauntCard resData={restraut} />)}</Link>
                )}
            </div>
            
        </div>
    );
};
export default Body;
//{restraunt.info.isOpen ? (<OpenRestraunt resdata={restraunt}/>) : (<RestrauntCard resdata={restraunt}/>)}
//<RestrauntCard resData={restraut} />
