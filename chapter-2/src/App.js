import Header from './components/Header';
import Profile from './pages/Profile';
import logo from './assets/logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo}/>
        <Routes>
          <Route path='/' element={<Profile userName='SeanGilday'/>}/>
          <Route path='/projects' element={<Projects userName='SeanGilday'/>}/>
          <Route path='/projects/:name' element={<ProjectDetail userName='SeanGilday'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
