import React from "react";
import "./header.scss";
import logo from "../../assets/img/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__info info-header">
          <div className="info-header__wrapper">
            <i class="info-header__icon bx bx-calendar"></i>
            <span className="info-header__text">Apr 18, 2022</span>
          </div>
          <div className="info-header__wrapper">
            <i class="info-header__icon bx bx-time"></i>
            <span className="info-header__text">10:10:01</span>
          </div>
        </div>
        <div className="header__detail detail-header">
          <div className="info-header__dropdown">
            <a href="#" className="detail-header__dropdown-link">
              <img src={logo} alt="site logo" width="20" height="20" />
              <h3 className="header__detail-text">Kibera Technology</h3>
            </a>
          </div>
          <ul className="header__list header-list">
            <li className="header-list__item">
              <a href="#">
                <i class="header-list__icon bx bx-bell"></i>
              </a>
            </li>
            <li className="header-list__item">
              <a href="#">
                <i class="header-list__icon bx bx-dots-vertical-rounded"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
