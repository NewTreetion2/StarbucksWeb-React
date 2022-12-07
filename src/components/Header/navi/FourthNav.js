import Listitem from "components/Header/navi/Listitem";
import "css/Header/Navbar.css";
import UnderNav from "./UnderNav";

function FourthNav({ isHover }) {
  return (
    <>
      <ul className="Navbar-first-elements font-bold">
        <a href="/" className="ul-font">
          사회공헌 캠페인 소개
        </a>
      </ul>
      <ul className="Navbar-third-elements font-bold">
        <a href="/" className="ul-font">
          지역 사회 참여 활동
        </a>
        <Listitem isFirst={true}>희망배달 캠페인</Listitem>
        <Listitem isFirst={false}>재능기부 카페 소식</Listitem>
        <Listitem isFirst={false}>커뮤니티 스토어</Listitem>
        <Listitem isFirst={false}>청년 지원 프로그램</Listitem>
        <Listitem isFirst={false}>우리 농산물 사랑 캠페인</Listitem>
        <Listitem isFirst={false}>우리 문화 지키기</Listitem>
      </ul>
      <ul className="Navbar-fourth-elements font-bold">
        <a href="/" className="ul-font">
          환경보호 상품
        </a>
        <Listitem isFirst={true}>친환경 활동</Listitem>
        <Listitem isFirst={false}>일회용 컵 없는 매장</Listitem>
        <Listitem isFirst={false}>커피 원두 재활용</Listitem>
      </ul>
      <ul className="Navbar-fifth-elements font-bold">
        <a href="/" className="ul-font">
          윤리 구매
        </a>
        <Listitem isFirst={true}>윤리적 원두 구매</Listitem>
        <Listitem isFirst={false}>공정무역 인증</Listitem>
        <Listitem isFirst={false}>커피 농가 지원 활동</Listitem>
      </ul>
      <ul className="Navbar-sixth-elements font-bold">
        <a href="/" className="ul-font">
          글로벌 사회 활동
        </a>
        <Listitem isFirst={true}>윤리경영 보고서</Listitem>
        <Listitem isFirst={false}>스타벅스 재단</Listitem>
        <Listitem isFirst={false}>지구촌 봉사의 달</Listitem>
      </ul>
      {/* <UnderNav isHover={isHover} /> */}
    </>
  );
}

export default FourthNav;
