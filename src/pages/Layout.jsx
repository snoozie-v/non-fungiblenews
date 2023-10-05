import { Outlet, Link } from "react-router-dom";


function Layout() {
  return (
    <>
        <nav >
            <div className="navbar">
                <ul className="navitems">
                    <li className="navitem">
                    <Link to="/">Home</Link>
                    </li>
                    {/* <li className="navitem">
                    <Link to="/headlines">Headlines</Link>
                    </li> */}
                    {/* <li className="navitem">
                    <Link to="/directory">Directory</Link>
                    </li> */}
                </ul>
            </div>

        </nav>
        
        <Outlet />
    </>
  )
}

export default Layout