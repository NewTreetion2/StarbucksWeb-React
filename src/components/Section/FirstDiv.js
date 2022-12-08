import "css/Section/FirstDiv.css";

const onLoad = (e) => {
  e.target.style.opacity = 1;
};
function FirstDiv() {
  return (
    <section className="FirstDiv-section">
      <div className="FirstDiv-logo">
        <img
          onLoad={onLoad}
          className="FirstDiv-logo-img"
          src="/img/FirstDiv-logo.png"
          alt="FirstDiv-logo"
          width="310px"
          height="210px"
        ></img>
        <button className="FirstDiv-button">자세히 보기</button>
      </div>
      <div className="FirstDiv-menu">
        <img
          className="menu-first"
          onLoad={onLoad}
          src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_christmas_main_drink_01_0211.png"
          alt="제주 감귤"
          width="70%"
          height="70%"
        ></img>
        <img
          className="menu-second"
          onLoad={onLoad}
          src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_christmas_main_drink_02_0211.png"
          alt="토피넛"
          width="45%"
          height="60%"
        ></img>
        <img
          className="menu-third"
          onLoad={onLoad}
          src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_christmas_main_drink_03_0211.png"
          alt="캐모마일"
          width="75%"
          height="77%"
        ></img>
        <img
          className="menu-fourth"
          onLoad={onLoad}
          src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_christmas_main_drink_04_03.png"
          alt="콜드브루"
          width="70%"
          height="70%"
        ></img>
      </div>
    </section>
  );
}

export default FirstDiv;
