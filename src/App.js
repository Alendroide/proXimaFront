import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
import E404 from './pages/E404';
import Redirect from './pages/Redirect';
//Componentes
import Navbar from './components/Navbar';
//Paginas
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import "./css/App.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/*Inicio de sesión*/}
        <Route path='/login' element={<Login/>} />
        
        {/*Pagina principal*/}
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>

        {/*Redirección a dashboard*/}
        <Route path='/' element={
          <Redirect url='/dashboard'
        />} />

        <Route path='/user' element={<User/>}/>

        {/*404*/}
        <Route path='*' element={
          <ProtectedRoute>
            <E404/>
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;
