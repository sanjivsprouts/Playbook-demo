import React from "react";

const TriggeringPoint = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="trigger-container" id="3">
      Trigger
      <div className="footer">
        <button
          onClick={() => {
            setCurrentTab(currentTab - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setCurrentTab(currentTab + 1);
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default TriggeringPoint;
