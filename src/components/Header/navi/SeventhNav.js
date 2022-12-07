import Listitem from "components/Header/navi/Listitem";
import UnderNav from "./UnderNav";
import "css/Header/Navbar.css";

function SeventhNav({ isHover }) {
  return (
    <>
      <ul className="Navbar-first-elements font-bold">
        <a href="/" className="ul-font">
          이벤트
        </a>
        <Listitem isFirst={true}>전체</Listitem>
        <Listitem isFirst={false}>스타벅스 카드</Listitem>
        <Listitem isFirst={false}>스타벅스 리워드</Listitem>
        <Listitem isFirst={false}>온라인</Listitem>
        <Listitem isFirst={false}>e-프리퀀시 증정품</Listitem>
      </ul>
      <ul className="Navbar-second-elements font-bold">
        <a href="/" className="ul-font">
          월페이퍼
        </a>
      </ul>
      <ul className="Navbar-third-elements font-bold">
        <a href="/" className="ul-font">
          뉴스
        </a>
        <Listitem isFirst={true}>전체</Listitem>
        <Listitem isFirst={false}>상품 출시</Listitem>
        <Listitem isFirst={false}>스타벅스와 문화</Listitem>
        <Listitem isFirst={false}>스타벅스 사회공헌</Listitem>
        <Listitem isFirst={false}>스타벅스 카드출시</Listitem>
      </ul>
      <ul className="Navbar-fourth-elements font-bold">
        <a href="/" className="ul-font">
          매장별 이벤트
        </a>
        <Listitem isFirst={true}>일반 매장</Listitem>
        <Listitem isFirst={false}>신규 매장</Listitem>
      </ul>
      <ul className="Navbar-fifth-elements font-bold">
        <a href="/" className="ul-font">
          e-프리퀀시
        </a>
        <Listitem isFirst={true}>이용안내</Listitem>
        <Listitem isFirst={false}>이용현황</Listitem>
      </ul>
      <ul className="Navbar-sixth-elements font-bold">
        <a href="/" className="ul-font">
          공지사항
        </a>
      </ul>
      {/* <UnderNav isHover={isHover} /> */}
    </>
  );
}

export default SeventhNav;
