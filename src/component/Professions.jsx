import React from "react";

const ProfessionData = [
  {
    id: 1,
    profession: "Software Engineer",
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "Proficiency in programming languages (e.g., JavaScript, Python, Java)",
      "Experience with software development lifecycle and tools",
    ],
    ageRange: "22-45",
  },
  {
    id: 2,
    profession: "Registered Nurse",
    qualifications: [
      "Associate or Bachelor's degree in Nursing",
      "Valid nursing license (RN)",
      "Basic Life Support (BLS) certification",
    ],
    ageRange: "21-55",
  },
  {
    id: 3,
    profession: "Civil Engineer",
    qualifications: [
      "Bachelor's degree in Civil Engineering",
      "Professional Engineer (PE) license (preferred)",
      "Proficiency with AutoCAD and structural analysis tools",
    ],
    ageRange: "24-50",
  },
  {
    id: 4,
    profession: "Teacher (High School)",
    qualifications: [
      "Bachelor's degree in Education or subject-specific field",
      "State teaching certification",
      "Strong classroom management skills",
    ],
    ageRange: "23-60",
  },
  {
    id: 5,
    profession: "Graphic Designer",
    qualifications: [
      "Degree or diploma in Graphic Design",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Strong portfolio of design work",
    ],
    ageRange: "20-40",
  },
  {
    id: 6,
    profession: "Chef",
    qualifications: [
      "Culinary arts degree or apprenticeship",
      "Food safety and hygiene certification",
      "Experience in kitchen management",
    ],
    ageRange: "25-50",
  },
];

const Professions = () => {
  <div className="employ">
    {ProfessionData.map((job) => {
      return <Experts key={job.id} {...job} />;
    })}
  </div>;
};

const Experts = ({ profession, qualifications, ageRange }) => {
  return (
    <div className="office">
      <h1>{profession}</h1>
      <h2>Qualification:</h2>
      <ul>
        {qualifications.map((qualify, index) => (
          <li key={index}> {qualify}</li>
        ))}
      </ul>
      <h4> {ageRange} </h4>
    </div>
  );
};

export default Professions;
