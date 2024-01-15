import logo from './logo.svg';
import './App.css';
import CreateForm from './components/createForm/CreateForm';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from './components/main/Main';
import Detail from './components/detail/Detail';
function App() {
  return (
    <div className="App">
      <Route exact path ="/card/:id" component={Detail}/>
<Main/>
    </div>
  );
}

export default App;
