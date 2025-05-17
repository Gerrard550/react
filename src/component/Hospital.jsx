import React from "react";

const MedicalEquipment = [
  {
    id: 1,
    equipment: "ECG Machine",
    purpose: "Monitors electrical activity of the heart",
    department: "Cardiology",
  },
  {
    id: 2,
    equipment: "MRI Scanner",
    purpose: "Provides detailed images of organs and tissues",
    department: "Radiology",
  },
  {
    id: 3,
    equipment: "Ventilator",
    purpose: "Supports or controls a patient's breathing",
    department: "ICU / Emergency",
  },
  {
    id: 4,
    equipment: "Defibrillator",
    purpose:
      "Restores a normal heartbeat by sending an electric pulse or shock to the heart",
    department: "Emergency / Cardiology",
  },
  {
    id: 5,
    equipment: "Infusion Pump",
    purpose:
      "Delivers fluids, medications, or nutrients into a patient's bloodstream",
    department: "ICU / General Wards",
  },
  {
    id: 6,
    equipment: "Ultrasound Machine",
    purpose:
      "Uses sound waves to produce images of internal organs and tissues",
    department: "Radiology / OB-GYN",
  },
  {
    id: 7,
    equipment: "X-ray Machine",
    purpose: "Captures images of bones and internal organs",
    department: "Radiology",
  },
  {
    id: 8,
    equipment: "Patient Monitor",
    purpose:
      "Continuously tracks vital signs like heart rate, blood pressure, and oxygen levels",
    department: "ICU / Surgery",
  },
  {
    id: 9,
    equipment: "Surgical Table",
    purpose: "Supports the patient during surgical procedures",
    department: "Operating Room",
  },
  {
    id: 10,
    equipment: "Autoclave",
    purpose: "Sterilizes surgical instruments and medical tools",
    department: "Sterilization Unit / Operating Room",
  },
];

const Hospital = () => {
  return (
    <div>
      <button>CLICK ME</button>
      {MedicalEquipment.map((doctor) => {
        return <Clinic key={doctor.id} {...doctor} />;
      })}
    </div>
  );
};

const Clinic = ({ equipment, purpose, department }) => {
  return (
    <div>
      <h1>{equipment}</h1>
      <p> {purpose} </p>
      <h3> {department} </h3>
    </div>
  );
};

export default Hospital;
