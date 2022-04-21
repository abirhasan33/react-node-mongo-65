import './App.css';
import { Route, Routes } from 'react-router-dom';
import Adduser from './componets/Adduser/Adduser';
import Home from './componets/Home/Home';
import UpdetUser from './componets/UpdetUser/UpdetUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/updete/:id' element={<UpdetUser></UpdetUser>}></Route>
        <Route path='user/add' element={<Adduser></Adduser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
