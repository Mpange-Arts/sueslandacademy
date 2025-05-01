import React from "react";
import { FaEye, FaRocket, FaHeart } from "react-icons/fa"; // Icons for Vision, Mission, and Values
import "./VisionMissionValues.css";

const VisionMissionValues = () => {
  return (
    <section className="vision-mission-values">
      <div className="vmv-header">
        <h2>Our Vision, Mission, and Values</h2>
        <p>
          At our core, we are committed to creating meaningful impact through our
          values, our aspirations, and our dedication to nurture young minds.
        </p>
      </div>
      <div className="vmv-cards">
        <div className="vmv-card">
          <div className="vmv-icon vision">
            <FaEye />
          </div>
          <h3>Vision</h3>
          <p>
          To be a one stop, exceptional education provider, 
          delivering holistic learning experiences that fosters 
          academic excellence, creativity and character development.
          </p>
        </div>
        <div className="vmv-card">
          <div className="vmv-icon mission">
            <FaRocket />
          </div>
          <h3>Mission</h3>
          <p>
          Our mission is to provide a comprehensive range 
          of educational services, leveraging innovative 
          teaching methods, cutting edge technology and a supportive 
          community, we strive to empower leaners to reach their full potential.
          </p>
        </div>
        <div className="vmv-card">
          <div className="vmv-icon values">
            <FaHeart />
          </div>
          <h3>Values</h3>
          <p>
            We believe in setting high academic standards and providing a rigorous
            yet supportive learning experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;