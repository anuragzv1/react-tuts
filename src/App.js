// there are 2 types of components in react
// 1) Functional component  --> we treat every component as a function
// 2) Class component -->amount of code written is high

// start class component

import react from "react"; //we have imported react
import CompB from "./CompB";
import FunctionalCoponent from "./FunctionalComp";

class App extends react.Component {
  //state ? --> data set --> any change to that data set can be mapped to a component
  // [1,2,3]  -->App refresh --> App



// componentDidMount() --> api , event listener   -->first stage of a component
// componentDidUpdate() --> setState() --> class Component useState --> function --- > 



  constructor() {
    super();

    //create state object
    this.state = {
      count: 0,
      name: null,
      age: null,
      page:"home"
    };
  }
  // App --> A -> B ->C -> D -> E
  //redux store --> central state management


componentDidMount(){
  //one time activities 
  console.log("component mounting")
}

componentDidUpdate(prevState , prevProps){
  //state --> change 
  //alerts
  // (prevAlerts !=currentAlerts){
  //   //
  // }
  console.log("component Updated")
}

componentWillUnmount(){
  //pending api calls cancel
  //event listener --> remove
  //localStorage
}



  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //various methods to set state in react (slef learn)

  //conditional rendering
  //according to some logic we can show or hide componets


  //anything that we want to show on screen is in render
  render() {
    return (
      //JSX code --> HTML + some added functional
      <div>
        This is my first react app <br />
        count : {this.state.count}<br/>
        <button onClick = {this.incrementCount}>Add</button>
        {
          this.state.count >=10 ?  <FunctionalCoponent/>:<CompB/>
        }
        {
          // this.state.page === "home" && <Home/>
        }
      </div>
    );
  }
}

export default App;
