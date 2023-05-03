import React from "react";
import m1  from "react";
import Life from "./profile/Life"
class App extends React.Component {
  
    state={fullname:"mehdi",bio:"java script",imgsrc:require("./profile/m1.jpg") ,profesion:"developer",show:false}
    
 
  render(){
    var handelshow =()=>{
      this.setState({show:!this.state.show})
    }
    return(
      <div>
      <button onClick={handelshow}>{this.state.show?"hide":"show"}</button>
      {this.state.show ? 
      <div className="Profil"> 
    <h1>{this.state.fullname}</h1>
    <h3>{this.state.bio}</h3>
    <img src={this.state.imgsrc}/>
    <Life/>
    
    </div>
        :"clique"}
        
      
    </div>)

}}
export default App;