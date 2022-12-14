import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { getUser} from './utilities/users-service';
import Auth from './pages/Auth';
import NavBar from './components/NavBar'
import Bookmarks from './pages/Bookmarks';

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
          </Routes>
        </>
      :
        <Auth setUser={setUser} />
    }
  </div>
  );
}

export default App;
