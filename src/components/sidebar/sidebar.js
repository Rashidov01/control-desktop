import React from "react";
import "./sidebar.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__head head-sidebar">
        <h2 className="head-sidebar__title">Access Control</h2>
      </div>
      <div className="sidebar__main sidebar-main">
        <div className="sidebar-main__entrance sidebar-entrance">
          <div className="sidebar-entrance__logo">
            <img className="sidebar-entrance__img" src={logo} alt="site logo" />
          </div>
          <div className="sidebar-entrance__detail">
            <h3 className="sidebar-entrance__detail-title">
              Kibera Technology
            </h3>
            <span className="sidebar-entrance__detail-text">admin</span>
          </div>
        </div>
        <ul className="sidebar-main__list sidebar-list">
          <li className="sidebar-list__item">
            <i class="sidebar-list__icon bx bxs-dashboard"></i>
            <Link className="sidebar-list__link" to="/">
              Dashboard
            </Link>
          </li>
          <li className="sidebar-list__item">
            <i class="sidebar-list__icon bx bxs-user"></i>
            <Link className="sidebar-list__link" to="/Employees">
              Employees
            </Link>
          </li>
          <li className="sidebar-list__item">
            <i class="sidebar-list__icon bx bxs-group"></i>
            <Link className="sidebar-list__link" to="/Guests">
              Guests
            </Link>
          </li>
          <li className="sidebar-list__item">
            <i class="sidebar-list__icon bx bx-task"></i>
            <Link className="sidebar-list__link" to="/Work">
              Work schedule
            </Link>
          </li>
          <li className="sidebar-list__item">
            <i class="sidebar-list__icon bx bxs-report"></i>
            <Link className="sidebar-list__link" to="/Report">
              Report
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
