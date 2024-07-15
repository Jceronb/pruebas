import { Link, NavLink } from "react-router-dom"



export const NavBar = () => {
  return ( 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <div className="container-fluid">

    <Link className="navbar-brand" to="/">useContext</Link>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <NavLink
        //Recibimos los childrens 
            className={ ( { isActive } ) => `nav-link ${ isActive ? 'active' : '' }`}
            to="/">
            Home
        </NavLink>

        <NavLink
        //Recibimos los childrens 
            className={({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}    
            to="/About">
            About
        </NavLink> 

        <NavLink
        //Recibimos los childrens 
            className={({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}    
            to="/Login">
            Login
        </NavLink>

      </ul>
    </div>
  </div>
</nav>
    ) 
}


