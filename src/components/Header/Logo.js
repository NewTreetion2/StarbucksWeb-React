import "css/Header/Logo.css";
function Logo() {
  return (
    <a
      href="/main"
      onClick={(event) => {
        event.preventDefault();
      }}
      className="logo"
    >
      <img
        className="logo-img"
        src="https://www.starbucks.co.kr/common/img/common/logo.png"
        alt="로고"
      ></img>
    </a>
  );
}

export default Logo;
