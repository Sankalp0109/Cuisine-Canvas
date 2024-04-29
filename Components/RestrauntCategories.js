import { useState } from "react";
import ItemList from "./ItemList";
const RestrauntCategories = ({categories,visIndex,setVisIndex,Index})=>{
    const data = categories.card.card;
    
    const handleClick = ()=> {
        visIndex==true ? setVisIndex(null):setVisIndex(Index);
    }
    return (
        <div className="w-9/12 m-auto">
            <div className="flex justify-between bg-gray-200 cursor-pointer shadow-lg p-4 font-bold border-gray-500 my-2 border-b-2" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span className="font-bold " >{visIndex ? "^" : "˅"}</span>
            </div>
            {visIndex && < ItemList itemsList={data.itemCards}/>}
            
        </div>
    )
};
export default RestrauntCategories;