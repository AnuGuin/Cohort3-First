import { useState, createContext, useContext } from 'react';

const BulbContext = createContext(); //Context initialisation

//context provider
function BulbProvider({children}) { 
  const [bulbOn, setBulbOn] = useState(true);
  return (    
  <BulbContext.Provider value ={{bulbOn, setBulbOn}}>
    {children}
  </BulbContext.Provider>
  );
  
}

function App() {
  return (
    <div style={{background: "grey" , display: "flex", justifyContent: "center", 
    padding: "20px", margin: "50px", borderRadius: "10px" }}>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>    
    </div>
  )    
}

function LightBulb() {
    return <div>
    <BulbState />
    <ToggleState/>
  </div>
}

function BulbState(){
  const {bulbOn} = useContext(BulbContext);
  return <div style ={{fontSize:"50px"}}>
     {bulbOn ? "💡" : "🕯️"};
  </div>
   
}


function ToggleState () {
  const {setBulbOn} = useContext(BulbContext);
      function onOff () {
        setBulbOn(state => !state)
      };
  return <div>

    <button onClick = {onOff}> Toggle Me</button>
  </div>
}
 

export default App;