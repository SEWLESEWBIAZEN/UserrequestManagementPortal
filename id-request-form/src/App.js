import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Requestform from './components/Requestform';
import Branch from './components/pages/branch/Index';
import Status from './components/pages/status/Index';
import NavBar from './components/common/NavBar';
import Layout from './components/Layout';
import Login from './components/common/Login';
import Logout from './components/common/Logout';
import Welcome from './components/common/Welcome';
import Public from './components/common/Public';
import { useSelector } from 'react-redux';
import Index from './components/common/footer/Index';
import './App.css'
import PageInaccessible from './components/common/PageInaccessible';

function App() {
  const user = useSelector(state => state.user.user)
  return (
    <Router>
      <div >
        <NavBar />
      </div>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Layout />}>
              {/* public routes*/}
              <Route index element={<Public />} />
              {/* protected routes*/}

              <Route>
                <Route path='welcome' element={user?<Welcome />:<PageInaccessible/>} />
                <Route path="Form" element={user?<Requestform />:<PageInaccessible/>} />
                <Route path='status' element={user?<Status />:<PageInaccessible/>} />
                <Route path='logout' element={<Logout />} />
                <Route path='branch' element={user?<Branch />:<PageInaccessible/>} />
                <Route path='login' element={<Login />} />
              </Route>
            </Route>
          </Routes>
        </header>
      </div >
      <hr />
      <footer className='bg-dark text-white'>
        <Index />
      </footer>
    </Router>
  );
}
export default App;
