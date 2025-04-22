import React from 'react';
import './About.css';

function About() {
return (
    <div className="about-page">
        <section className="bio">
            <h2>About Me</h2>
            <p>
        Hi, I’m Isabela, an undergrad student studying Digital Media at the University of Central Florida, with four years of experience in social media and design. I have a passion for photography, film, photo editing, and graphic design, which allows me to wear many creative hats. I love brining all cretive things to life through visual story telling and design. I am a firm believer in the power of collaboration and the magic that happens when creative minds come together. I am always looking for new opportunities to learn and grow, and I am excited to see where my journey takes me next.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li className="skill-item">
            <img src="../../assets/1.png" alt="Guitar" className="skill-image" />
            <div className="skill-button">
              <span>Guitar</span>
              <div className="skill-level">Beginner</div>
            </div>
          </li>
          <li className="skill-item">
            <img src="../../assets/2.png" alt="Social Media" className="skill-image" />
            <div className="skill-button">
              <span>Social Media</span>
              <div className="skill-level">Advanced</div>
            </div>
          </li>
          <li className="skill-item">
            <img src="../../assets/3.png" alt="Marketing" className="skill-image" />
            <div className="skill-button">
              <span>Marketing</span>
              <div className="skill-level">Intermediate</div>
            </div>
          </li>
          {/* Add more skills with images and levels */}
        </ul>
      </section>

      <section className="interests">
        <h2>Interests</h2>
        <ul className="interests-list">
          <li>Photography</li>
          <li>Social Media Marketing</li>
          <li>Photo Editing</li>
          <li>Graphic Design</li>
          <li>UX/UI</li>
          <li>Strategist</li>
          </ul>
          <ul className="other-list">
          <li>Guitar</li>
          <li>Song Writing </li>
          <li>Singing</li>
          <li>Visual Arts</li>
        
        </ul>
      </section>
    </div>
  );
}

export default About;