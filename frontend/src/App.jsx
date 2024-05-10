import {Routes,Route} from  'react-router-dom';
import { useContext } from 'react';
import UserContext from './context/user/UserContext';
import Homepage from './componets/pages/Homepage';
import Signup from './componets/pages/Signup';
import Login from './componets/pages/Login';

function App() {

  const context = useContext(UserContext);
  const user  = context.user;

  return (

    <div className='wrapper'>

      <Routes>

        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>

    </div>
  )
}

export default App
