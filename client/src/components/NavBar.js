import { Link } from "react-router-dom";
import "./styles.css";
export default function NavBar(props) {
  return (
    <nav>


      <div className="nav">

      <Link to="/">Home</Link>
        <Link to="/auth">Sign Up/Log In </Link>
        <Link to="/about">About/Contact</Link>
        
        
        
        <br /><Link to="/bookmarks">All Bookmarks</Link>
        <h3>Categories</h3>

        <Link to="/articles">Articles</Link>
        <Link to="/design">Design</Link>
        <Link to="/dsalgo">Data Structures & Algorithms</Link>
        <Link to="/freecourses">Free Online Courses</Link>
        <Link to="/git">Git</Link>
        <Link to="/hosting">Web Hosting</Link>
        <Link to="/htmlcss">HTML & CSS</Link>
        <Link to="/js">JavaScript</Link>
        <Link to="/mongo">Mongo</Link>
        <Link to="/node">Node</Link>
        <Link to="/other">Other</Link>
        <Link to="/react">React</Link>
        <Link to="/sandbox">Sandbox</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/webdev">Web Development</Link>
        <Link to="/youtube">YouTube</Link>

      </div>

    </nav>
  );
}
