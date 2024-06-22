import {Routes,Route} from  'react-router-dom';
import Homepage from './componets/pages/Homepage';
import Signup from './componets/pages/Signup';
import Login from './componets/pages/Login';
import CreateAccount from './componets/pages/CreateAccount';
import ViewAccount from './componets/pages/ViewAccount';
import CreateEntry from './componets/pages/CreateEntry';
import ViewEntry from './componets/pages/ViewEntry';
import Split from './componets/pages/Split';

function App() {

  return (

    <div className='wrapper'>

      <Routes>

        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/create' element={<CreateAccount></CreateAccount>}></Route>
        <Route path='/account/:id' element={<ViewAccount></ViewAccount>}></Route>
        <Route path='/createEntry/:id' element={<CreateEntry></CreateEntry>}></Route>
        <Route path='/entry/:id' element={<ViewEntry></ViewEntry>}></Route>
        <Route path='/split' element={<Split></Split>}></Route>

      </Routes>

    </div>
  )
}

export default App
