import { useState, createContext, useContext } from 'react';

const BulbContext = createContext();

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
    <div style={{background: "grey" , height: "75vh", display: "flex", justifyContent: "center", alignItems: "center",
    padding: "20px", margin: "50px", borderRadius: "10px" }}>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
      
    </div>
  )    
}

function LightBulb() {
    return <div style={{justifyContent: "center"}}>
    <BulbState />
    <ToggleState/>
  </div>
}

function BulbState(){
  const {bulbOn} = useContext(BulbContext);
  return <div style ={{fontSize:"60px"}}>
    {bulbOn ? "💡" : "🕯️"}
  </div>
   
}


function ToggleState () {
  const {setBulbOn} = useContext(BulbContext);
      function onOff () {
        setBulbOn(state => !state)
      };
  return <div>

    <button style={{alignItems: "center"}} onClick = {onOff}> Toggle Me</button>
  </div>
}
 

export default App;