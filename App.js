import React,{Component} from 'react';

// import logo from './logo.svg';
// import './App.css';


//1. example1
// class  App extends Component {
//   constructor(){
//     super()
//     this.state={
//       name:"Shaily",
//       age:22
//     }
//   }

//   render(){
//     return (
//       <div>
//         <h1> {this.state.name}</h1>
//         <h1>{this.state.age}</h1>
//       </div>
//     );

//   }
  
// }

//example2

// class  App extends Component {
//     constructor(){
//       super()
//       this.state={
//         status:"out"
//       }
//     }
  
//     render(){
//       return (
//         <div>
//           <h1> You are currently logged {this.state.status}</h1>
//         </div>
//       );
  
//     }
    
//   }


//example 3

class  App extends Component {
  constructor(){
    super()
    this.state={
      isLoggedIn:false
    }
  }

  render(){
    let wordDisplay;

    // if(this.state.isLoggedIn === true)
    if(this.state.isLoggedIn)
    {
      wordDisplay="in"
    }else{
      wordDisplay="out"
    }

    return (
      <div>
        <h1> You are currently logged {wordDisplay}</h1>
      </div>
    );

  }
  
}



export default App;
