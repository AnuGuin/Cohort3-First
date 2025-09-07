// // import { createContext,useContext, useState } from 'react'
// import './App.css'
// import { RecoilRoot, useRecoilValue,useSetRecoilState} from 'recoil';
// import { counterAtom } from './store/atoms/counter';


// //const CountContext = createContext();

// // function CountContextProvider({ children }) {
// //   const [count, setCount] = useState(0);

// //   return <CountContext.Provider value={{count, setCount}}>
// //     {children}
// //   </CountContext.Provider>
// // }

// function App() {

//   return (
//     <>
//       <RecoilRoot>
//         <Counter />
//       </RecoilRoot>
//     </>
//   )
// }

// function Counter() {
//   return (
//     <div>
//       <Increase />
//       <Decrease />
//       <Value />
//     </div>
//   )
// }

// function Decrease () {
//   const [count, setCount] = useSetRecoilState(counterAtom);
//   return (
//     <button onClick={() => setCount(count - 1)}>Decrease</button>
//   )
// }

// function Increase () {
//   const  [count, setCount] =useSetRecoilState(counterAtom)
//   return (
//     <button onClick={() => setCount(count + 1)}>Increase</button>
//   )
// }

// function Value() {
//   const count = useRecoilValue(counterAtom)
//   return <p>Count is: {count}</p>;
// }

// export default App

import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import './App.css'
import { counterAtom, evenSelector } from './store/atoms/counter';


function App() {
    return (
        <>
            <RecoilRoot>
                <Counter />
            </RecoilRoot>
        </>

    )
} 

function Counter() {
    return <div>
        <Buttons/>
        <Count />
        <IsEven/>
    </div>
}

function Buttons() {
    const setCount = useSetRecoilState(counterAtom);
    return <div>
        <button onClick={() => {setCount(c => c + 2)}}>Increase</button>
        <button onClick={() => {setCount(c => c - 1)}}>Decrease</button>
    </div>
}

function Count() {
    const count = useRecoilValue(counterAtom);
    return <div>
        Count is: {count}
    </div>
}

function IsEven() {
    const even = useRecoilValue(evenSelector);
    return <div>
        {even ? "even" : "odd"}
    </div>
}

export default App;
