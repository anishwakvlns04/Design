import React from "react";
import "./Challenges.css";

const challenges = [
  {
    id: "PS-1",
    title: "Enhancing Cybersecurity with Targeted Vulnerability...",
    image: "/images/cybersecurity.jpg",  // Correct path to image in public folder
  },
  {
    id: "PS-2",
    title: "Enhancing Customer Experience and Retention...",
    image: "/images/customer-experience.jpg", // Correct path to image in public folder
  },
  {
    id: "PS-3",
    title: "AI-Driven Fraud Detection and Prevention in...",
    image: "/images/fraud-detection.jpg", // Correct path to image in public folder
  },
];

const Challenges = () => {
  return (
    <div className="challenges-container">
      <h1>Challenges</h1>
      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div className="challenge-card" key={challenge.id}>
            <img src={challenge.image} alt={challenge.title} />
            <h2>{challenge.id}: {challenge.title}</h2>
            <a href="#">View More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
