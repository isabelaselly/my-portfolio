import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Project.css'; // Ensure your CSS file is linked
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import your photography images
import photo1 from "../../assets/7.jpg";
import photo2 from "../../assets/8.jpg";
import photo3 from "../../assets/9.jpg";
import photo4 from "../../assets/10.jpg";
import photo5 from "../../assets/11.jpg";
import photo6 from "../../assets/12.jpg";
import video from "../../assets/facebook.mp4"; // Import your video
import mockImage from "../../assets/mock.png"; // Import the mock image

function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const galleryProjects = [
    {
      name: 'Not Enough Salt (Website)',
      type: 'website',
      url: 'https://not-enough-salt.vercel.app/',
      preview: (
        <div className="website-preview">
          <iframe src="https://not-enough-salt.vercel.app/" title="Not Enough Salt Website" />
        </div>
      ),
      description: '  Creating right from scratch just like a fresh batch of bread. A warm welcome to Not Enough Sault a website that streamlines the cooking process and fosters a warm, global community for both beginners and seasoned cooking enthusiasts. Created by me and a team of 4 other students, this project was a labor of love and collaboration.',
    },
    {
      name: 'Wireframe',
      type: 'wireframe',
      url: 'https://www.figma.com/proto/PyJIPz1onKuBzAtsjpqccw/NotEnoughSalt-Desktop-Wireframe?node-id=13-264&embed-host=share',
      preview: (
        <div className="wireframe-preview">
          <iframe
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            width="100%"
            height="450"
            src="https://embed.figma.com/design/PyJIPz1onKuBzAtsjpqccw/NotEnoughSalt-Desktop-Wireframe?node-id=13-264&embed-host=share"
            allowFullScreen
            title="Not Enough Salt Wireframe"
          />
        </div>
      ),
      description: 'Honorable mention of my participation in the design of this website.. Desktop wireframes created in Figma to outline the structure and user flow of the website. Hoping to create a seamless user experience with a consistent and clear layout .',
    },
  ];

  const otherProjects = [
    {
        name: 'Social Media Campaign (Mockup)',
        type: 'image', // Changed type to 'image'
        url: mockImage, // Use the imported mock image variable
        description: 'I partnered with Ai, to create a fake social media campaign.',
      },
    {
      name: 'Graphics',
      type: 'video',
      url: video, // Use the imported video variable
      description: 'Using Preimere Pro and Photoshop, I created graphics and a video for a facebook ad. The video was created to promote a real estate agency to audeicnes looking to buy a house.',
    },

  ];

  const photographyImages = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : galleryProjects.length - 1
    );
  };

  const goToNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex < galleryProjects.length - 1 ? prevIndex + 1 : 0
    );
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : photographyImages.length - 1
    );
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex < photographyImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  const currentGalleryProject = galleryProjects[currentProjectIndex];
  const currentPhoto = photographyImages[currentPhotoIndex];
  const photographyPortfolioDescription = 'Explore a collection of my photographic journey, capturing moments and perspectives for a start up clothing brand.'; // Your static description here

  return (
    <div className="projects-page">
      <h1>Projects</h1>

      <div className="project-gallery">
        <button
          className="gallery-arrow left"
          onClick={goToPrevious}
          disabled={galleryProjects.length <= 1}
        >
          <FaArrowLeft />
        </button>
        <div key={currentProjectIndex} className="project-slide">
          <h2>{currentGalleryProject.name}</h2>
          {currentGalleryProject.preview}
          {currentGalleryProject.url && (
            <motion.a
              href={currentGalleryProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {currentGalleryProject.type === 'website'
                ? 'Visit Website'
                : 'View ' + currentGalleryProject.type}
            </motion.a>
          )}
          {currentGalleryProject.description && <p className="project-description">{currentGalleryProject.description}</p>}
        </div>
        <button
          className="gallery-arrow right"
          onClick={goToNext}
          disabled={galleryProjects.length <= 1}
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="other-projects">
        <h2>Other Projects</h2>
        <div className="other-projects-grid"> {/* Container for the grid */}
          {otherProjects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.name}</h3>
              {project.type === 'pdf' && (
                <>
                  <p>{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-button">
                    Access PDF
                  </a>
                </>
              )}
              {project.type === 'video' && (
                <>
                  <video src={project.url} controls width="100%" height="auto" />
                  <p className="project-description">{project.description}</p>
                </>
              )}
             {project.type === 'image' && (
  <>
    <img src={project.url} alt={project.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }} />
    <p className="project-description">{project.description}</p>
    <a href="https://drive.google.com/file/d/11kV25BuqXxTprfsgMll6XlflOqGrii8l/view?usp=drive_link"
       target="_blank"
       rel="noopener noreferrer"
       className="project-button">
      View Mockup
    </a>
  </>
)}

            </div>
          ))}
        </div>
      </div>

      <div className="photography-carousel">
        <h2>Photography Portfolio</h2>
        <div className="carousel-container">
          <button className="carousel-arrow left" onClick={goToPreviousPhoto}>
            <FaArrowLeft />
          </button>
          <div className="carousel-slide">
            <img src={currentPhoto} alt={`Photography ${currentPhotoIndex + 1}`} className="carousel-image" />
          </div>
          <button className="carousel-arrow right" onClick={goToNextPhoto}>
            <FaArrowRight />
          </button>
        </div>
        <p className="photography-portfolio-description">{photographyPortfolioDescription}</p>
      </div>
    </div>
  );
}

export default Projects;