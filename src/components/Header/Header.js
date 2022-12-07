import { useState } from "react";
import Logo from "components/Header/Logo";
import NavbarBtn from "./button/NavbarBtn";
import "css/Header/Header.css";
import SearchBtn from "./button/SearchBtn";
import SquareBtn from "./button/SquareBtn";
import UnderlineBtn from "./button/UnderlineBtn";

const newBtn = [
  { id: 1, title: "COFFEE" },
  { id: 2, title: "MENU" },
  { id: 3, title: "STORE" },
  { id: 4, title: "RESPONSIBILITY" },
  { id: 5, title: "STARBUCKS REWARDS" },
  { id: 6, title: "CORPORATE SALES" },
  { id: 7, title: "WHAT'S NEW" },
];

const newUnderBtn = [
  "Sign up",
  "My Starbucks",
  "Customer Service & Ideas",
  "Find a Store",
];

function Header() {
  const [isClick, setIsClick] = useState(false);
  console.log(isClick);
  return (
    <header className="header">
      <Logo />
      <div className={isClick ? "underlineBtn move-left" : "underlineBtn"}>
        {newUnderBtn.map((title) => {
          return <UnderlineBtn>{title}</UnderlineBtn>;
        })}
      </div>
      <div className="searchBtn">
        <SearchBtn isClick={isClick} setIsClick={setIsClick} />
      </div>
      <div className="navBtn">
        {newBtn.map((title, index) => {
          return (
            <NavbarBtn id={index + 1} href={"/" + index} title={title.title} />
          );
        })}
      </div>
    </header>
  );
}

export default Header;
