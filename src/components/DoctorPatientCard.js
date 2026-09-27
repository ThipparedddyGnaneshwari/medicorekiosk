import React from "react";
import { useNavigate } from "react-router-dom";

const statusLabel = { priority: "Priority", ready: "Ready", waiting: "Waiting" };

const DoctorPatientCard = ({ patient }) => {
  const navigate = useNavigate();
  return (
    <tr className="clickable" onClick={() => navigate(`/doctor/patient/${patient.id}`)}>
      <td>{patient.token}</td>
      <td>{patient.name}</td>
      <td>{patient.age}</td>
      <td>{patient.complaint}</td>
      <td>
        <span className={`status-pill ${patient.status}`}>{statusLabel[patient.status]}</span>
      </td>
    </tr>
  );
};

export default DoctorPatientCard;
