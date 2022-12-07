import Listitem from "components/Header/navi/Listitem";
import "css/Header/Navbar.css";
import UnderNav from "./UnderNav";

function ThirdNav({ isHover }) {
  return (
    <>
      <ul className="Navbar-first-elements font-bold">
        <a href="/" className="ul-font">
          매장 찾기
        </a>
        <Listitem isFirst={true}>퀵 검색</Listitem>
        <Listitem isFirst={false}>지역 검색</Listitem>
      </ul>
      <ul className="Navbar-third-elements font-bold">
        <a href="/" className="ul-font">
          드라이브 스루 매장
        </a>
      </ul>
      <ul className="Navbar-fourth-elements font-bold">
        <a href="/" className="ul-font">
          스타벅스 리저브™ 매장
        </a>
      </ul>
      <ul className="Navbar-fifth-elements font-bold">
        <a href="/" className="ul-font">
          커뮤니티 스토어 매장
        </a>
      </ul>
      <ul className="Navbar-sixth-elements font-bold">
        <a href="/" className="ul-font">
          매장 이야기
        </a>
        <Listitem isFirst={true}>티바나 바 매장</Listitem>
      </ul>
      {/* <UnderNav isHover={isHover} /> */}
    </>
  );
}

export default ThirdNav;
