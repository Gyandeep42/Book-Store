import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { Login } from './component/Login';
import { Navbar } from './component/Navbar';
import { Register } from './component/Register';
import Singlecard from './component/Singlecard';
import Dashboardlayout from './component/Dashboard/Dashboardlayout';
import Upload from './component/Dashboard/Upload';

import ManageBook from './component/Dashboard/ManageBook';
import Test from './component/Dashboard/Test';
function Main() {

  const location = useLocation()
  const hideroutes = ["/login", "/register"]


  return (


    <div>

      {!hideroutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Singlecard/:id" element={<Singlecard />} />
        <Route path='/admin/dashboard' element={<Dashboardlayout />}>
          <Route path='/admin/dashboard/ManageBook' element={<ManageBook />} />
          <Route path='/admin/dashboard/upload' element={<Upload />} />
          <Route path='/admin/dashboard/test' element={<Test />} />



        </Route>
      </Routes>

    </div>

  );
}
function App() {
  return (
    <Router>
      <Main />
    </Router>
  )
}
export default App;
