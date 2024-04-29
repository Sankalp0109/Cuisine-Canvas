import { useEffect } from "react";
const UserCard = (props) => {
    const {info} = props;
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Useeffect called");

        },1000);
        return ()=>{
            clearInterval(timer);
    };
    },[]);
    return (
        <div className="user-card">
            <h3>Name : {info.login}</h3>
            <h2>Location : {info.location}</h2>

        </div>
    );
};
export default UserCard;