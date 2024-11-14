import React from "react";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
const SubEntity = ({ name, type, selected, setSelected, id }) => {
  const icon =
    type === "accounts" ? (
      <BusinessOutlinedIcon style={{ fontSize: "80px" }} />
    ) : type === "contacts" ? (
      <PersonOutlineOutlinedIcon style={{ fontSize: "80px" }} />
    ) : type === "webAccounts" ? (
      <QueryStatsOutlinedIcon style={{ fontSize: "80px" }} />
    ) : (
      <PersonSearchOutlinedIcon style={{ fontSize: "80px" }} />
    );
  return (
    <div
      className={`sub-entity-container ${selected === id ? "selected" : ""}`}
      onClick={() => setSelected(id)}
    >
      <div className="icon">{icon}</div>
      <div className="name">
        <h1>{name}</h1>
      </div>
      <div className="info">
        lorjbeh jhbelvr jbervj nv erljbrevn hjlb ejvnr uievrb evlhjbevr vrn
        uilvebjr lhjverbiver jnvre uirvebjrve lhjivbrelj vrjl jv ivr vrj uivre
        jv rjlvr
      </div>
    </div>
  );
};

export default SubEntity;
