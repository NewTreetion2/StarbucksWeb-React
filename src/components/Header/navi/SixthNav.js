import Listitem from "components/Header/navi/Listitem";
import "css/Header/Navbar.css";
import UnderNav from "./UnderNav";

function SixthNav({ isHover }) {
  return (
    <>
      <ul className="Navbar-first-elements font-bold">
        <a href="/" className="ul-font">
          단체 및 기업 구매 안내
        </a>
      </ul>
      <ul className="Navbar-third-elements font-bold">
        <a href="/" className="ul-font">
          단체 주문 배달 안내
        </a>
        <Listitem isFirst={true}>단체 주문 배달 안내</Listitem>
        <Listitem isFirst={false}>단체 주문 신청</Listitem>
        <Listitem isFirst={false}>신청 내역 조회</Listitem>
      </ul>
      {/* <UnderNav isHover={isHover} /> */}
    </>
  );
}

export default SixthNav;
