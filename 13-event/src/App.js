import './App.css';
import SyntheticEvent from './SyntheticEvent'; // default export인 경우
import { FunComponent } from './FunComponent';
import ClassComponent from './ClassComponent';
import HandlerEx from './HandlerEx';
import { ColorFont } from './ColorFont';
import { NoneFont } from './NoneFont';
import { DropDown } from './DropDown';
import Prac from './Prac';


function App() {
    return (
        <div className="App">
            <SyntheticEvent />
            <hr />
            <FunComponent></FunComponent>
            <hr />
            <ClassComponent></ClassComponent>
            <hr />
            <HandlerEx></HandlerEx>
            <hr />
            <ColorFont></ColorFont>
            <hr />
            <NoneFont></NoneFont>
            <hr />
            <DropDown></DropDown>
            <hr />
            <Prac></Prac>
        </div>
    );
}

export default App;

