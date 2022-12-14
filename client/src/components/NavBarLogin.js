import { Link } from "react-router-dom";
import "./styles.css";
export default function NavBarLogin(props) {
  return (
    <nav>
      <h2>{props?.user?.name}</h2>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          props.setUser(null);
        }}
      >
        Log Out
      </button>


      <div className="nav">




      <br />
      <Link to="/">Home</Link>
      <Link to="/about">About/Contact</Link>
      <Link to="/bookmarks">All Bookmarks</Link>

        <h3>Categories</h3>

        <Link to="/articles">Articles</Link>
        <Link to="/design">Design</Link>
        <Link to="/dsalgo">Data Structures and Algorithms</Link>
        <Link to="/freecourses">Free Online Courses</Link>
        <Link to="/git">Git</Link>
        <Link to="/hosting">Hosting</Link>
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
