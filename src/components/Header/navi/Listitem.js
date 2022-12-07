import "css/Header/Listitem.css";

function Listitem({ isFirst, children }) {
  if (!isFirst) {
    return (
      <li className="list-margin">
        <a href="/" className="list-elements-font">
          {children}
        </a>
      </li>
    );
  } else {
    return (
      <li className="first-list list-margin">
        <a href="/" className="list-elements-font">
          {children}
        </a>
      </li>
    );
  }
}

export default Listitem;
