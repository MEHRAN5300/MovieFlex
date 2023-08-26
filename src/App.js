import { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
} from "react-router-dom";

import "./App.css";
import Header  from './components/header';
import Home  from './pages/home'
function App() {

  return (
    <div className='mainContent'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
