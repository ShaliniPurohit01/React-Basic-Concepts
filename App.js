import React from 'react';
// import logo from './logo.svg';
// import './App.css';



class App extends React.Component{
  constructor(){
    super()
    this.state={
      answer:"yes"
    }
  }

    render(){
      return(
        <div>
          <h1> * Is state important to know ? </h1>
          <h2> ~ {this.state.answer}</h2>
          {/* <ChildCompnent answer={this.state.answer}/> */}
        </div>
      )
    }
  
}


export default App;
