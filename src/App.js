import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
        <div className='app_wrapper'>
          <Header />
          
          <Navigation />
          <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/messages" element={<Dialogs />}/>
          </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
