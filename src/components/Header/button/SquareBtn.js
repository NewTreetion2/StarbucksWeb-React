import "css/Header/SquareBtn.css";

function SquareBtn({ children }) {
  return (
    <button
      onClick={(event) => event.preventDefault()}
      className="hover-squareBtn squareBtn-design"
    >
      {children}
    </button>
  );
}

export default SquareBtn;
