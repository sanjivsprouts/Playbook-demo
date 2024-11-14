import React from "react";

const Matching = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="matching-container" id="4">
      Matching
      <div className="footer">
        <button
          onClick={() => {
            setCurrentTab(currentTab - 1);
          }}
        >
          Previous
        </button>
        <button>Save Playbook</button>
      </div>
    </div>
  );
};

export default Matching;
