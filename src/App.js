import React,{useState, useEffect} from "react";
import Saludo from "./components/Saludo.js";

const App = () => {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)
  const [count3,setCount3] = useState(100)
  const [state,setState] = useState("Luis")
  const miArray = ["luis", "oscar", "isaac"];
  const miRender = miArray.map((item) => {
    return <Saludo nombres={item} />;
  });

  useEffect(()=>{
    setCount3(count3 - 1)
  },[count])


  return (
    <div>
      {miRender}
      <div> Bienvenido {state}</div>
      <div>{count}</div>
      <div>{count2}</div>
      <div>{count3}</div>
      <button onClick={ ()=>{ setCount(count + 1)}  }> Incrementar</button>
      <button onClick={ ()=>{ setCount2(count2 + 3)}  }> Incrementar 3</button>
    </div>
  );
};

export default App;
