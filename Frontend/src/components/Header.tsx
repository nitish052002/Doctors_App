import "./header.css";
import logo from "../assets/logo3.png";
const Header = () => {
  return (
    <header className="header_section">
      <div className="header__image">
        <img src={logo} alt="" />
      </div>
      <div className="header_title">Heath</div>
    </header>   
  );
};

export default Header;
