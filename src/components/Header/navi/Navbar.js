import "css/Header/Navbar.css";
import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import ThirdNav from "./ThirdNav";
import FourthNav from "./FourthNav";
import FifthNav from "./FifthNav";
import SixthNav from "./SixthNav";
import SeventhNav from "./SecondNav";

const Navbar = ({ isHover, setIsHover, id, setNavId }) => {
  if (!isHover) return <section className="hiddenSection"></section>;
  else
    return (
      <section
        onMouseEnter={() => {
          setIsHover(true);
          setNavId(id);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        className="showSection"
      >
        {id === "1" && <FirstNav isHover={isHover} />}
        {id === "2" && <SecondNav isHover={isHover} />}
        {id === "3" && <ThirdNav isHover={isHover} />}
        {id === "4" && <FourthNav isHover={isHover} />}
        {id === "5" && <FifthNav isHover={isHover} />}
        {id === "6" && <SixthNav isHover={isHover} />}
        {id === "7" && <SeventhNav isHover={isHover} />}
      </section>
    );
};

export default Navbar;
