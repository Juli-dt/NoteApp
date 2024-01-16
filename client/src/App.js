import logo from './logo.svg';
import './App.css';
import CreateForm from './components/createForm/CreateForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from './components/main/Main';
import Detail from './components/detail/Detail';
import CategoryForm from './components/categoryForm/CategoryForm'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/create" element ={<CreateForm/>}/>
          <Route path='/createCategory' element ={<CategoryForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
