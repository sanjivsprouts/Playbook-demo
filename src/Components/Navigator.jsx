import React from "react";

const Navigator = ({ currentTab, setCurrentTab }) => {
  const navigate = (id, offset = 100) => {
    if(currentTab > id){
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setCurrentTab(id);
    }
  };

  return (
    <div className="navigator-container">
      <div
        className={`section ${currentTab === 1 && "current"} ${
          currentTab > 1 && "done"
        }`}
        onClick={() => {
          navigate(1);
        }}
      >
        <span>1</span>
        <p>Name</p>
      </div>
      <p className="line-connector"></p>
      <div
        className={`section ${currentTab === 2 && "current"} ${
          currentTab > 2 && "done"
        }`}
        onClick={() => {
          navigate(2);
        }}
      >
        <span>2</span>
        <p>Entity Type</p>
      </div>
      <p className="line-connector"></p>
      <div
        className={`section ${currentTab === 3 && "current"} ${
          currentTab > 3 && "done"
        }`}
        onClick={() => {
          navigate(3);
        }}
      >
        <span>3</span>
        <p>Triggering Point</p>
      </div>
      <p className="line-connector"></p>
      <div
        className={`section ${currentTab === 4 && "current"} ${
          currentTab > 4 && "done"
        }`}
        onClick={() => {
          navigate(4);
        }}
      >
        <span>4</span>
        <p>Data Matching</p>
      </div>
    </div>
  );
};

export default Navigator;
