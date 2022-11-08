import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
import Home from './components/Home'
import './App.css';


function App() {
  return (
    <div className="App">
      
      <div id="HeaderOrganization">
        <div id="AboutMe-App">
          <AboutMe/>
        </div>
        <div id="AboutMe-Nav">
        <Nav/>
        </div>

      </div>


      <main className="Main-header">
      <Routes>
        <Route exact path="/"     element={<Home    />}/>
        <Route exact path="Project1" element={<Project1/>}/>
        <Route exact path="Project2" element={<Project2/>}/>
        <Route exact path="Project3" element={<Project3/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
