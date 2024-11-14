import React from "react";

const TriggeringPoint = ({ currentTab, setCurrentTab, type }) => {
  return (
    <div className="trigger-container" id="3">
      <div className="header">
        <h1>Triggring Points</h1>
        <p>Choose fields for which you want to trigger this playbook</p>
      </div>
      <div className="body">{type === "new" ? <div></div> : <div>
        
      </div>}</div>
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
