import Listitem from "components/Header/navi/Listitem";
import "css/Header/Navbar.css";
import UnderNav from "./UnderNav";

function FirstNav({ isHover }) {
  return (
    <>
      <ul className="Navbar-first-elements font-bold">
        <a href="/" className="ul-font">
          커피
        </a>
        <Listitem isFirst={true}>스타벅스 원두</Listitem>
        <Listitem isFirst={false}>스타벅스 비아</Listitem>
        <Listitem isFirst={false}>스타벅스앳홈 by 캡슐</Listitem>
      </ul>
      <ul className="Navbar-second-elements font-bold">
        <a href="/" className="ul-font">
          커피 이야기
        </a>
        <Listitem isFirst={true}>농장에서 우리의 손으로</Listitem>
        <Listitem isFirst={false}>최상의 아라비카 원두</Listitem>
        <Listitem isFirst={false}>스타벅스 로스팅 스펙트럼</Listitem>
        <Listitem isFirst={false}>스타벅스 디카페인</Listitem>
        <Listitem isFirst={false}>클로버® 커피 추출 시스템</Listitem>
      </ul>
      <ul className="Navbar-third-elements font-bold">
        <a href="/" className="ul-font">
          나와 어울리는 커피
        </a>
      </ul>
      <ul className="Navbar-fourth-elements font-bold">
        <a href="/" className="ul-font">
          스타벅스 리저브™
        </a>
        <Listitem isFirst={true}>RESERVE MAGAZINE</Listitem>
      </ul>
      <ul className="Navbar-fifth-elements font-bold">
        <a href="/" className="ul-font">
          에스프레소 음료
        </a>
        <Listitem isFirst={true}>도피오</Listitem>
        <Listitem isFirst={false}>에스프레소 마끼아토</Listitem>
        <Listitem isFirst={false}>아메리카노</Listitem>
        <Listitem isFirst={false}>마끼아토</Listitem>
        <Listitem isFirst={false}>카푸치노</Listitem>
        <Listitem isFirst={false}>라떼</Listitem>
        <Listitem isFirst={false}>모카</Listitem>
      </ul>
      <ul className="Navbar-sixth-elements font-bold">
        <a href="/" className="ul-font">
          최상의 커피를 즐기는 법
        </a>
        <Listitem isFirst={true}>커피 프레스</Listitem>
        <Listitem isFirst={false}>푸어 오버</Listitem>
        <Listitem isFirst={false}>아이스 푸어 오버</Listitem>
        <Listitem isFirst={false}>커피 메이커</Listitem>
        <Listitem isFirst={false}>
          리저브를 매장에서 다양하게 즐기는 법
        </Listitem>
      </ul>
      {/* <UnderNav isHover={isHover} /> */}
    </>
  );
}

export default FirstNav;
