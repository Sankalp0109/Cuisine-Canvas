import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategories from "./RestrauntCategories";
const ReastrauntMenu = () => {
    
    const {resId} = useParams();
    const [menu,restaurantInfo,categories] = useRestrauntMenu(resId);
    console.log(categories);
    
    const [showIndex,setShowIndex] = useState(null);
    if (menu === null) return <Shimmer />;
    return (
        <div className="text-center">
            <h1 className="font-bold text-4xl my-2">{restaurantInfo.name}</h1>
            <p className="font-bold text-lg">{restaurantInfo.cuisines.join(",")}</p>
            {categories.map((data,index)=>(
           <RestrauntCategories key={data.card.card.title} 
           categories={data}
           visIndex={showIndex == index ? true : false}
           setVisIndex={(x)=>setShowIndex(x)}
           Index={index}/>))}
        </div>
    );
};
export default ReastrauntMenu;