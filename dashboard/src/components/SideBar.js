import React from "react";
import image from "../assets/images/blockbuster- 1.png.png";
import  { Link } from 'react-router-dom'
function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul
                className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                {/*<!-- Sidebar - Brand -->*/}
                <Link
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    to="/"
                >
                    <div className="sidebar-brand-icon">
                        <img
                            className="w-100"
                            src={image}
                            alt="Digital House"
                        />
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/...">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages not found</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/metricas">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Metricas</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/moviesList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla de peliculas</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
                <li className="nav-item">
                    <Link className="nav-link" to="/lastMovie">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Last Movie in Db</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/genres">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Genres in Db</span>
                    </Link>
                </li>
            </ul>
            {/*<!-- End of Sidebar -->*/}
        </React.Fragment>
    );
}
export default SideBar;
