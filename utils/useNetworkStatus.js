import { useEffect, useState } from "react";
const useNetworkStatus = ()=>{
    const [online,setOnline] = useState(true);
    useEffect(()=>{
        window.addEventListener('offline',()=>setOnline(false));
        window.addEventListener('online',()=>setOnline(true));

    },[])
    
    return online;
};
export default useNetworkStatus;