import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = ()=>{
    const itemsData = useSelector((store)=>store.cart.items);
    console.log(itemsData);
    return (
        <div className="w-9/12 m-auto">
            <div className="font-bold text-4xl text-center">
                Cart Items
            </div>
            {/* {itemsData.map((data,index)=><p key={index}>{data}</p>)} */}
            <div>
                <ItemList itemsList={itemsData}/>
            </div>
            
        </div>
    );
};
export default Cart;
