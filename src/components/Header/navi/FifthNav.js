import Listitem from "components/Header/navi/Listitem";
import "css/Header/Navbar.css";
import UnderNav from "./UnderNav";

function FifthNav({ isHover }) {
  return (
    <>
      <ul className="Navbar-first-elements font-bold">
        <a href="/" className="ul-font">
          스타벅스 리워드
        </a>
        <Listitem isFirst={true}>스타벅스 리워드 소개</Listitem>
        <Listitem isFirst={false}>등급 및 혜택</Listitem>
        <Listitem isFirst={false}>스타벅스 별</Listitem>
        <Listitem isFirst={false}>자주 하는 질문</Listitem>
      </ul>
      <ul className="Navbar-third-elements font-bold">
        <a href="/" className="ul-font">
          스타벅스 카드
        </a>
        <Listitem isFirst={true}>스타벅스 카드 소개</Listitem>
        <Listitem isFirst={false}>스타벅스 카드 갤러리</Listitem>
        <Listitem isFirst={false}>등록 및 조회</Listitem>
        <Listitem isFirst={false}>충전 및 이용안내</Listitem>
        <Listitem isFirst={false}>분실신고/환불신청</Listitem>
        <Listitem isFirst={false}>자주 하는 질문</Listitem>
      </ul>
      <ul className="Navbar-fourth-elements font-bold">
        <a href="/" className="ul-font">
          스타벅스 e-Gift Card
        </a>
        <Listitem isFirst={true}>스타벅스 e-Gift Card 소개</Listitem>
        <Listitem isFirst={false}>이용안내</Listitem>
        <Listitem isFirst={false}>선물하기</Listitem>
        <Listitem isFirst={false}>자주 하는 질문</Listitem>
      </ul>
      {/* <UnderNav isHover={isHover} /> */}
    </>
  );
}

export default FifthNav;
