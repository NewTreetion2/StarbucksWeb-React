import { useState } from "react";
import SquareBtn from "./SquareBtn";
import "css/Header/SearchBtn.css";

function SearchBtn({ isClick, setIsClick }) {
  const [inputText, setInputText] = useState("");

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const onClickHandler = () => {
    if (!isClick) {
      setIsClick(true);
      setInputText("");
    } else {
      if (inputText === "") {
        alert("내용을 입력해주세요");
      } else {
        setIsClick(false);
      }
    }
  };

  const onBlurHandler = (e) => {
    e.target.value = "";
  };

  return (
    <form className="search-box">
      <input
        className={isClick ? "search-input search-input-hover" : "search-input"}
        type="text"
        placeholder="통합검색"
        name="search"
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <SquareBtn>
        <input
          type="image"
          className="img-size"
          src="https://svgsilh.com/svg/1093183.svg"
          alt="돋보기"
          onClick={onClickHandler}
        ></input>
      </SquareBtn>
    </form>
  );
}

export default SearchBtn;
