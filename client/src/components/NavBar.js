import { Link } from 'react-router-dom';

export default function NavBar (props) {
  return (
    <nav>
      <h3>{props?.user?.name}</h3>
      <Link to="/">Home </Link>
      <Link to="/bookmarks">Bookmarks</Link>
      <Link to="/htmlcss">HTML & CSS</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/hosting">Hosting</Link>
      <Link to="/tools">Tools</Link>
      <Link to="/dsalgo">Data Structures and Algorithms</Link>
      <Link to="/freecourses">Free Online Courses</Link>
      <Link to="/webdev">Web Development</Link>
      <Link to="/react">React</Link>
      <Link to="/sandbox">Sandbox</Link>
      <Link to="/js">JavaScript</Link>
      <Link to="/node">Node</Link>
      <Link to="/design">Design</Link>
      <Link to="/git">Git</Link>
      <Link to="/other">Other</Link>
      <Link to="/mongo">Mongo</Link>
      <button onClick={() => {
        localStorage.removeItem('token');
        props.setUser(null);
      }}>Log Out!</button>
    </nav>
  )
}