import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        
        // this.state = {
        //     count1: 1,
        //     count2: 'john',
        // };
        //console.log(this.props);
    }
    componentDidMount(){
        console.log("child did mount");
    } 
    componentDidUpdate(){
        console.log("Child Updated");
    }  
    componentWillUnmount(){
        console.log("child unmounted")
    }                                                              
    render(){
        console.log("child Render");
        return (
        <div className="user-card">
            {/* <button onClick={()=>{
                this.setState({count1:this.state.count1+1});
            }}>Increase By One </button>
            <h4>{this.state.count1}</h4> */}
            <div><UserContext.Consumer>
                {
                    (data)=><h4>{data.logedInUser}</h4>
                }
                </UserContext.Consumer></div>
            {/* <h3>Name : {this.props.info.login}</h3>
            <img src={this.props.info.avatar_url}></img> */}
            
        </div>
        );
    }
}
export default UserClass;