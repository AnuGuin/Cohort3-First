import { myNetWorkAtom } from './Store/Atoms/atoms'
import './App.css'
import { useAtom } from 'jotai'

function App() {
    return <>
      <Buttons />
    </>
}

function Buttons () {
  const [networkNotificationCount] = useAtom(myNetWorkAtom)
  return <div style={{padding: "20px"}}>
    <button>Home</button>
    <button>My Netwok ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount })</button>
    <button>Jobs ()</button>
    <button>Messaging ()</button>
    <button>Notifications ()</button>
    <button>Me</button>
  </div>
}


export default App;
