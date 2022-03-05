import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcom from './component/Welcom'
import Counter from './component/Counter'
import NameList from './component/NameList'
import GetReq from './component/GetReq';
import SetReq from './component/SetReq'
import FirstHook from './component/FirstHook';
import CheckingCountHook from './component/CheckingCountHook';
import UseFields from './component/UseFields';
import UseArray from './component/UseArray';
import UseEffect from './component/UseEffect';
import FetchData from './component/FetchData';

function App() {
  return (
    <div className="App">
      <UseFields/>
      <FetchData/>
      <UseEffect/>
      <UseArray/>
      <Greet name="Raza" superpower="Frontend-Developer"/>
      <CheckingCountHook />
      <SetReq/>
      <FirstHook/>
      <GetReq/>
      <Welcom name="Welcom Raza Raheem"/>
      <Counter/>
      <NameList/>
    </div>
  );
}

export default App;
