import { useState } from "react";
import Navbar from "../navi/Navbar";
import "css/Header/NavbarBtn.css";
function NavbarBtn({ title, href, id }) {
  const [isHover, setIsHover] = useState(false);
  const [Navid, setNavId] = useState(0);

  return (
    <>
      <a
        className={
          isHover ? "NavbarBtn NavbarBtn-hover" : "NavbarBtn NavbarBtn-leave"
        }
        id={id}
        href={href}
        onClick={(event) => {
          event.preventDefault();
        }}
        onMouseOver={(event) => {
          setIsHover(true);
          setNavId(event.target.id);
        }}
        onMouseLeave={() => {
          setIsHover(false);
          setNavId(0);
        }}
      >
        {title}
      </a>
      <Navbar
        id={Navid}
        isHover={isHover}
        setIsHover={setIsHover}
        setNavId={setNavId}
      />
    </>
  );
}
export default NavbarBtn;
