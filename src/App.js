import { useEffect, useState } from "react";
import Entity from "./Components/Entity";
import Matching from "./Components/Matching";
import Name from "./Components/Name";
import Navigator from "./Components/Navigator";
import TriggeringPoint from "./Components/TriggeringPoint";
import "./Styles/index.scss";
function App() {
  const [currentTab, setCurrentTab] = useState(1);
  useEffect(() => {
    const element = document.getElementById(currentTab);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100  ;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [currentTab]);
  return (
    <div className="App">
      <Navigator currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Name currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Entity currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TriggeringPoint currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Matching currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default App;
