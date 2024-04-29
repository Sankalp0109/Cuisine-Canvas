import { IMAGE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { useSelector } from "react-redux";
export const ItemList = ({ itemsList }) => {
    const dispatch = useDispatch();
    const handleAddClick = (item)=>{
        console.log(item);
        dispatch(addItems(item));
    }
    const Data = useSelector((store)=>store.cart.items);
    console.log(Data);
    console.log(itemsList)

    return (
        <div>
            {itemsList.map((d) => (
                
                <div key={d.card.info.id} className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between ">
                    <div className="flex flex-col justify-between w-9/12">
                        <div >
                            <span className="text-base font-bold">{d.card.info.name} </span>
                            <span className="text-sm"> - ₹{d.card.info.price / 100 || d.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-sm text-gray-400">{d.card.info.description}</p>
                    </div>
                    
                        
                    <div className="w-3/12 flex flex-col">
                        <button className="bg-black text-white absolute  m-auto rounded-lg text-sm p-2 self-end" 
                        onClick={()=>handleAddClick(d)}>Add +</button>
                        <img src={IMAGE_URL + d.card.info.imageId} className="" />
                    </div>
                    
                </div>

            ))}
        </div>
    );
}
export default ItemList;