import { useState ,useEffect} from "react";

function FunctionalCoponent () {
  //react hooks --> useEffect , useState , useContext

  const [count , setCount] = useState(0);

  //componentDidMount
  useEffect(() => {

  }, []);

  //componentDidUpdate
//   useEffect(() => {
      
//   }, [dep1,dep2,dep3]);

  //componentWillUnmount
  useEffect(() => {
      const cleanup = ()=>{
          //event listener
          //api call canel
      }
      return cleanup;
  }, []);


  //internal
//   useState(val){
//       count = val;
//       setVal(newValue){
//           count = newVlaue
//       }
//     return [val , setVal]
//   }


  return (
    <>
    <br></br>
      This is a functional Component
      <button onClick={() => setCount(5)}> SET 5</button><br></br>
      <button onClick={() => setCount(15)}> SET 15</button><br></br>

      count : {count}
    </>
  );
};

export default FunctionalCoponent;
