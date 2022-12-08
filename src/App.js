import "./App.css";
import Header from "components/Header/Header";
import Section from "components/Section/Section";
import MobileHeader from "components/Header/MobileHeader";
import MobileSection from "components/Section/MobileSection";
import {Pc,Mobile} from "components/Responsive/MediaQuery";


function App() {
//   const isPc = useMediaQuery({
//     query : "(min-width:767px)",
//   });

//   const isMobile = useMediaQuery({
//     query : "(max-width:767px)",
//   });

//   if (isPc) {
//     return (
//       <>
//        <Header />
//        <Section />
//      </>
//     )
//   } else if (isMobile) {
//     return (
//     <MobileHeader />
//     )
//   }

  return(
  <>
    <Pc>
      <Header />
      <Section />
    </Pc>

    <Mobile>
      <MobileHeader />
      <MobileSection />
    </Mobile>
  </>
  )
}

export default App;
