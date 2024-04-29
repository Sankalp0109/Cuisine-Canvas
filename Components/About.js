import UserCard from "./UserCard";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            // name:"dummy name",
            // image:"https://images.app.goo.gl/YZBWA371LioUBPBz5",
            json:"dummy",
            // timer: setInterval(()=>{
            //     console.log("parent timer");
            // },1000),

        };
        console.log("Parent Contructor");
    }
    async componentDidMount(){
        console.log("parent did mount ")
        const data = await fetch("https://api.github.com/users/Sankalp0109");
        const json = await data.json();
        //console.log(json);
        this.setState({json:json});
        //this.setState({name:json.login,image:json.avatar_url});
        // console.log(`${json.login}`)
    }
    componentDidUpdate(){
        console.log("parent updated");
        // this.timer = setInterval(()=>{
        //     console.log("parent timer");
        // },1000);
    }
    componentWillUnmount(){
        console.log("parent unmounted");
        //this.setState({timer:clearInterval(this.state.timer)});
        //clearInterval(this.timer);
    }
    
    render(){
        console.log("Parent render");
        console.log(this.state.json);
        return(
            <div>
                {/* <h1>{this.state.name}</h1>
                <img src={this.state.image}></img> */}
             {/* <UserClass name={this.state.name} image={this.state.image}/> */}
             <UserCard info={this.state.json}/>
             <UserClass info={"s"}></UserClass>
         </div>
        );
    }

}

// const About = ()=>{
//     return (
//         <div>
//             <UserClass name={"sankalp"} location={"kanpur"}/>
//         </div>
//     );
// }
export default About;