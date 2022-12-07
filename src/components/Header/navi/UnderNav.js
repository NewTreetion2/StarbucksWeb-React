import "css/Header/Navbar.css";

function UnderNav({ isHover }) {
  // if (!isHover) return <div className="hiddenSection"></div>;
  // else
  return (
    <div
      className={
        isHover
          ? "Navbar-underspace underspace-on"
          : "Navbar-underspace hiddenSection"
      }
    >
      <ul className="underspace-elements">
        <a href="/" className="list-elements-font font-bold">
          나와 어울리는 커피 찾기
        </a>
        <p className="font-green font-size-small margin-top margin-bottom">
          스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.
        </p>
        <a href="/" className="list-elements-font font-bold">
          최상의 커피를 즐기는 법
        </a>
        <p className="font-green font-size-small margin-top margin-bottom">
          여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.
        </p>
      </ul>
    </div>
  );
}

export default UnderNav;
