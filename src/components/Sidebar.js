import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="sidebar" aria-label="Doctor navigation">
      <div className="brand" style={{ color: "#fff", padding: "0 14px 16px" }}>
        <span className="brand-mark" aria-hidden="true">M</span>
        MediKiosk
      </div>
      <NavLink to="/doctor" end className={({ isActive }) => (isActive ? "active" : "")}>
        Dashboard
      </NavLink>
      <NavLink to="/doctor" className="sidebar-link-static">
        Patient Queue
      </NavLink>
      <NavLink to="/privacy">
        Privacy &amp; ABDM
      </NavLink>
      <NavLink to="/help">
        Help
      </NavLink>
      <button
        type="button"
        className="sidebar-link"
        style={{ marginTop: "auto" }}
        onClick={() => navigate("/doctor/login")}
      >
        Sign Out
      </button>
    </aside>
  );
};

export default Sidebar;
