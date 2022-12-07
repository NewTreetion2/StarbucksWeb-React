import FirstDiv from "./FirstDiv";
import SecondDiv from "./SecondDiv";
import ThirdDiv from "./ThirdDiv";
import FourthDiv from "./FourthDiv";
import AdDiv from "./AdDiv";
import "css/Section/Section.css";
import NoticeDiv from "./NoticeDiv";

function Section() {
  return (
    <div className="section-container">
      <AdDiv />
      <FirstDiv />
      <NoticeDiv />
      <SecondDiv />
      <ThirdDiv />
      <FourthDiv />
    </div>
  );
}

export default Section;

/**
 * @param height: 'small' | 'medium' | 'large'
 */
const ImageSection = ({ height, imageSrc, children }) => {
  return <div background={imageSrc}>{children}</div>;
};

<ImageSection></ImageSection>;
