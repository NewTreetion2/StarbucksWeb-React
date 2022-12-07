import Listitem from "components/Header/navi/Listitem";
import "css/Header/Navbar.css";
import UnderNav from "./UnderNav";

function SecondNav({ isHover }) {
  return (
    <>
      <ul className="Navbar-first-elements font-bold">
        <a href="/" className="ul-font">
          음료
        </a>
        <Listitem isFirst={true}>콜드 브루</Listitem>
        <Listitem isFirst={false}>브루드 커피</Listitem>
        <Listitem isFirst={false}>에스프레소</Listitem>
        <Listitem isFirst={false}>프라프치노</Listitem>
        <Listitem isFirst={false}>블렌디드</Listitem>
        <Listitem isFirst={false}>스타벅스 리프레셔</Listitem>
        <Listitem isFirst={false}>스타벅스 피지오</Listitem>
        <Listitem isFirst={false}>티(티바나)</Listitem>
        <Listitem isFirst={false}>기타 제조 음료</Listitem>
        <Listitem isFirst={false}>스타벅스 쥬스(병음료)</Listitem>
      </ul>
      <ul className="Navbar-third-elements font-bold">
        <a href="/" className="ul-font">
          푸드
        </a>
        <Listitem isFirst={true}>브레드</Listitem>
        <Listitem isFirst={false}>케이크</Listitem>
        <Listitem isFirst={false}>샌드위치 % 샐러드</Listitem>
        <Listitem isFirst={false}>따뜻한 푸드</Listitem>
        <Listitem isFirst={false}>과일 & 요거트</Listitem>
        <Listitem isFirst={false}>스낵 & 미니 디저트</Listitem>
        <Listitem isFirst={false}>아이스크림</Listitem>
      </ul>
      <ul className="Navbar-fourth-elements font-bold">
        <a href="/" className="ul-font">
          상품
        </a>
        <Listitem isFirst={true}>머그</Listitem>
        <Listitem isFirst={false}>글라스</Listitem>
        <Listitem isFirst={false}>플라스틱 텀블러</Listitem>
        <Listitem isFirst={false}>스테인리스 텀블러</Listitem>
        <Listitem isFirst={false}>보온병</Listitem>
        <Listitem isFirst={false}>액세서리</Listitem>
        <Listitem isFirst={false}>선물세트</Listitem>
        <Listitem isFirst={false}>커피 용품</Listitem>
        <Listitem isFirst={false}>패키지 티(티바나)</Listitem>
        <Listitem isFirst={false}>시럽</Listitem>
      </ul>
      <ul className="Navbar-fifth-elements font-bold">
        <a href="/" className="ul-font">
          카드
        </a>
        <Listitem isFirst={true}>실물 카드</Listitem>
        <Listitem isFirst={false}>e-Gift 카드</Listitem>
      </ul>
      <ul className="Navbar-sixth-elements font-bold">
        <a href="/" className="ul-font">
          메뉴 이야기
        </a>
        <Listitem isFirst={true}>나이트로 콜드브루</Listitem>
        <Listitem isFirst={false}>콜드 브루</Listitem>
        <Listitem isFirst={false}>스타벅스 티바나</Listitem>
      </ul>
      {/* <UnderNav isHover={isHover} /> */}
    </>
  );
}

export default SecondNav;
