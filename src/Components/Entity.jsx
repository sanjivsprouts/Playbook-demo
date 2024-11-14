import React, { useState } from "react";
import SubEntity from "./SubEntity";

const Entity = ({ currentTab, setCurrentTab }) => {
  const [selected, setSelected] = useState();
  const [selectedEvent, setSelectedEvent] = useState();
  return (
    <div className="entity-container" id="2">
      <div className="heading">
        <h1>Choose Entity type</h1>
      </div>
      <div className="body">
        <SubEntity
          name="Accounts"
          type="accounts"
          selected={selected}
          setSelected={setSelected}
          id={1}
        />
        <SubEntity
          name="Contacts"
          type="contacts"
          selected={selected}
          setSelected={setSelected}
          id={2}
        />
        <SubEntity
          name="Website Visitor Accounts"
          type="webAccounts"
          selected={selected}
          setSelected={setSelected}
          id={3}
        />
        <SubEntity
          name="Website Visitor Contacts"
          type="webContacts"
          selected={selected}
          setSelected={setSelected}
          id={4}
        />
      </div>
      <div className="events">
        <h1>Choose Event</h1>
        <div className="event-option">
          <div
            onClick={() => {
              setSelectedEvent(1);
            }}
            className={`${selectedEvent === 1 && "selected-event"}`}
          >
            New Entity
          </div>
          <div
            onClick={() => {
              setSelectedEvent(2);
            }}
            className={`${selectedEvent === 2 && "selected-event"}`}
          >
            Updated Entity
          </div>
        </div>
      </div>
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

export default Entity;
