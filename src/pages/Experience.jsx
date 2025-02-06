import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Globeminds Technologies Pvt Ltd.",
      duration: "May 2020 - April 2022",
      description: "Built responsive landing pages and optimized site performance.",
    },
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Sagveek Technologies Pvt Ltd.",
      duration: "May 2022 - Present",
      description: "Built responsive landing pages and optimized site performance.",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">💼 My Experience</h2>
      <div className="row">
        {experiences.map((exp) => (
          <div key={exp.id} className="col-md-6 mb-4">
            <div className="card shadow p-3">
              <h4>{exp.role}</h4>
              <h5 className="text-primary">{exp.company}</h5>
              <small className="text-muted">{exp.duration}</small>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
