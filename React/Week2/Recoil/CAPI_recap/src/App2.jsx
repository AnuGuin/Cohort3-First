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