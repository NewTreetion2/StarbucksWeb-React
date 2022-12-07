import "css/Header/UnderlineBtn.css";

function UnderlineBtn({ children }) {
  return (
    <button className="hover-underline underlineBtn-design">{children}</button>
  );
}

export default UnderlineBtn;
