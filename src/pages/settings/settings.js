import React from "react";
import "./settings.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "@mui/material";

export default function settings() {
  return (
    <div className="settings">
      <div className="settings__info info-settings">
        <div className="info-settings__logo">
          <img
            className="info-settings__img"
            src={logo}
            alt="site logo"
            width="100"
            height="100"
          />
          <button className="info-settings__btn" type="button">
            <i class="info-settigns__icon bx bx-pencil"></i>
          </button>
        </div>
        <form className="info-settings__form settings-form">
          <div className="settings-form__holder form-holder">
            <label className="form-holder__label" for="username">
              Username
            </label>
            <input
              type="text"
              className="form-holder__input"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="settings-form__holder form-holder">
            <label className="form-holder__label" for="fullname">
              Fullname
            </label>
            <input
              type="text"
              className="form-holder__input"
              id="fullname"
              placeholder="Fullname"
            />
          </div>
          <div className="settings-form__holder form-holder">
            <label className="form-holder__label" for="password">
              Old password
            </label>
            <input
              type="password"
              className="form-holder__input"
              id="password"
              placeholder="Old password"
            />
          </div>
          <div className="settings-form__holder form-holder">
            <label className="form-holder__label" for="email">
              Email
            </label>
            <input
              type="mail"
              className="form-holder__input"
              id="email"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="settings-form__holder form-holder">
            <label className="form-holder__label" for="number">
              Phone number
            </label>
            <input
              type="tel"
              className="form-holder__input"
              id="number"
              placeholder="+998 -- --- -- --"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div className="settings-form__holder form-holder">
            <label className="form-holder__label" for="new">
              New password
            </label>
            <input
              type="text"
              className="form-holder__input"
              id="new"
              placeholder="New password"
            />
          </div>
        </form>
      </div>
      <div className="settings__location info-location">
        location
      </div>
    </div>
  );
}
