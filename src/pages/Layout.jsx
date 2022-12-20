
import { Outlet,Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav className="Navbar">
          <ul>
            <li className="Nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="Nav-link" id='formout'>
              <Link to="/Actors">Actors</Link>
            </li>
            <li className="Nav-link" >
              <Link to="/NoPage">Error page</Link>
            </li >
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;