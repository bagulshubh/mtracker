import {Routes,Route, useNavigate} from  'react-router-dom';
import { useContext } from 'react';
import UserContext from './context/user/UserContext';
import Homepage from './componets/pages/Homepage';
import Signup from './componets/pages/Signup';
import Login from './componets/pages/Login';
import CreateAccount from './componets/pages/CreateAccount';

function App() {

  const context = useContext(UserContext);
  const user  = context.user;
  const navigate = useNavigate();
  return (

    <div className='wrapper'>


      <Routes>

        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/create' element={<CreateAccount></CreateAccount>}></Route>

      </Routes>

    </div>
  )
}

export default App
