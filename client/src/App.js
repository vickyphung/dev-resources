import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { getUser} from './utilities/users-service';
import Auth from './pages/Auth';
import NavBar from './components/NavBar'
import Bookmarks from './pages/Bookmarks';
import Htmlcss from './pages/Htmlcss';
import Articles from './pages/Articles';
import Hosting from './pages/Hosting';
import Tools from './pages/Tools';
import Dsalgo from './pages/Dsalgo';
import Freecourses from './pages/Freecourses';
import Webdev from './pages/Webdev';
import Sandbox from './pages/Sandbox';
import Javascript from './pages/Javascript';
import Node from './pages/Node';
import Design from './pages/Design';
import Git from './pages/Git';
import Mongo from './pages/Mongo';
import Other from './pages/Other';
import Reactjs from './pages/React';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
    {
      user ?
        <>
          <NavBar setUser={setUser} user={user} />
          <Routes>
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/htmlcss" element={<Htmlcss />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/dsalgo" element={<Dsalgo />} />
            <Route path="/freecourses" element={<Freecourses />} />
            <Route path="/webdev" element={<Webdev />} />
            <Route path="/react" element={<Reactjs />} />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/js" element={<Javascript />} />
            <Route path="/node" element={<Node />} />
            <Route path="/design" element={<Design />} />
            <Route path="/git" element={<Git />} />
            <Route path="/other" element={<Other />} />
            <Route path="/mongo" element={<Mongo />} />
          </Routes>
        </>
      :
        <Auth setUser={setUser} />
    }
  </div>





  );
}

export default App;
