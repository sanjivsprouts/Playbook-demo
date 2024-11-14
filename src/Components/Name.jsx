import React from "react";

const Name = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="name-container" id="1">
      <div className="header">
        <h1>Name Playbook</h1>
        <p>
          Effortlessly assign target contacts to sequences using automated
          playbooks. Set specific criteria to match new contacts, and drag
          playbooks to prioritize their order for seamless assignment.
        </p>
      </div>
      <input
        type="text"
        class="styled-input"
        placeholder="Eg. Best Revenue Generator"
      />
      <div className="footer">
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

export default Name;
