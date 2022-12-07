import "css/Section/NoticeDiv.css";
import { useState, useEffect, useRef } from "react";

const newNotice = [
  <li>시스템 개선 및 점검 안내</li>,
  <li>개인정보처리방침 개정 안내</li>,
  <li>홈페이지 이용약관 개정 안내</li>,
];

function NoticeDiv() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(0);
  useEffect(() => {
    setInterval(() => {
      setTimer((timerRef.current += 1));
      if (timerRef.current === 3) {
        timerRef.current = 0;
      }
      setTimer(timerRef.current);
    }, 2000);
  }, []);
  return (
    <div className="NoticeDiv-section">
      <div className="NoticeDiv-firstline">
        <div className="firstline-left">
          <div className="firstline-left-text">
            <p>공지사항</p>
            <ul>{newNotice[timer]}</ul>
          </div>
          <div className="firstline-left-button">
            <button></button>
          </div>
        </div>
        <div className="firstline-right">
          <div className="firstline-right-text">
            <p>스타벅스 프로모션</p>
          </div>
          <div className="firstline-right-button">
            <button></button>
          </div>
        </div>
      </div>
      <div className="NoticeDiv-secondline">
        <div></div>
      </div>
    </div>
  );
}

export default NoticeDiv;
