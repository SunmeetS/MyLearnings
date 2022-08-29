import logo from './logo.svg';
import './App.css';
import Ue1 from './components/ue1';
import Ue3 from './components/Ue3';
import Ue2 from './components/Ue2';
import Parent from './components/Context/Parent';
import Test from './components/Context/Test';
import ThemeChanger from './components/Context/DarkMode/ThemeChanger';
import ContextNormal from './components/Context/ContextNormalVsMemo/ContextNormal';
import ContextMemo from './components/Context/ContextNormalVsMemo/ContextMemo';



function App() {
  return (
    <div className="App">
      {/* <Ue1/> */}
      {/* <Ue2/> */}
     {/* <Ue3/> */}
     {/* <Parent/> */}
     {/* <Test/> */}
     {/* <ThemeChanger/> */}
     <ContextMemo/>
    </div>
  );
}

export default App;
