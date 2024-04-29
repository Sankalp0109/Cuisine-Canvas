import { useEffect, useState} from "react"
const useRestrauntMenu = (resId)=>{
    const [menu, setMenu] = useState(null);
    const [restaurantInfo,setRestrauntInfo] = useState(null);
    const [categories,setCategories] = useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6691565&lng=77.45375779999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        //const {name,category,imageID} = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info;
        //console.log(`${name} + ${category} + ${imageID}`)
        //console.log(json.data.cards[0].card.card.info.name);
        setMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        const c = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        console.log(c);
        setCategories(c);
        setRestrauntInfo(json.data.cards[2].card.card.info);
    }
    return [menu,restaurantInfo,categories];
}
export default useRestrauntMenu;