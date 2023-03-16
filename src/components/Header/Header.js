import { Link } from "react-router-dom";
import Navigation from "../NavTab/NavTab";
import logo from "../../images/logo.png";
import "./Header.css";

function Header({ isLogined }) {
  return (
    <section className={"header" + (isLogined ? " header_type_isLogined" : "")}>
      <div className="header__container">
        <Link to="/" className="header__linked-logo">
          <img className="header__logo"
            src={logo}
            alt="Логотип" />
        </Link>
        <Navigation
          isLogined={isLogined}
        />
      </div>
    </section>
  );
}

export default Header;