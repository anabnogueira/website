import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Literature from "./literature/Literature";
import ColorPalettes from "./colors/ColorPalettes";
import MortalityRates from "./mortality-rates/MortalityRates";
import TheObjects from "./three/objects/TheObjects";
import "./projects.css";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 2em;
  line-height: 3em;
  font-weight: 500;
`;

const SingleProject = styled.div`
  background-color: #efefef;
  width: 100%;
  overflow-y: hidden;
  padding: 0.6em 1.2em 0.6em 1.2em;
  border-radius: 2em;
  margin-bottom: 1em;
  font-size: 1em;
  &:hover .project-icon {
    filter: grayscale(0);
  }
  &:hover {
    background-color: lightblue;
  }
`;

const Projects = () => {
  return (
    <div className="full-width">
      <Routes>
        <Route path="/literature" element={<Literature />} />
        <Route path="/colors" element={<ColorPalettes />} />
        <Route path="/mortality-rates" element={<MortalityRates />} />
        <Route path="/three/objects" element={<TheObjects />} />
        <Route path="/" element={<ProjectList />} />
      </Routes>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="flex">
      <div className="main">
        <StyledTitle>Projects</StyledTitle>

        <SingleProject>
          <Link to="/projects/literature">
            <div className="project-icon">📖</div>
            <div className="project-desc">
              <h1>Literature Map</h1>
              <div className="tech">
                <span className="tech-d3">d3.js</span>
                <span className="tech-react">React</span>
              </div>
              <div className="project-summary">
                Map visualization of books I've read by country and year of
                reading.
              </div>
            </div>
          </Link>
        </SingleProject>

        <SingleProject>
          <Link to="/projects/colors">
            <div className="project-icon">🎨</div>
            <div className="project-desc">
              <h1>Color Palette Collection</h1>
              <div className="tech">
                <span className="tech-js">Javascript</span>
                <span className="tech-react">React</span>
              </div>
              <div className="project-summary">
                List of collected Color Palettes for use in artistic projects.
              </div>
            </div>
          </Link>
        </SingleProject>

        <StyledTitle>Previous Projects</StyledTitle>
        <SingleProject>
          <Link to="/projects/mortality-rates">
            <div className="project-icon">⚰️</div>
            <div className="project-desc">
              <h1>Study on Mortality Rates</h1>
              <div className="tech">
                <span className="tech-html">HTML</span>
                <span className="tech-css">CSS</span>
                <span className="tech-d3">d3.js</span>
                <span className="tech-js">Javascript</span>
              </div>
              <div className="project-summary">
                University project for the analysis of mortality rates and other
                factors in different countries around the world. Group project
                with Sara Franco and Pilar Pereira.
              </div>
            </div>
          </Link>
        </SingleProject>

        <StyledTitle>Coming Soon…</StyledTitle>
        <SingleProject>
          <div className="project-icon">📚</div>
          <div className="project-desc">
            <h1>Book Buying Statistics</h1>
            <div className="tech">
              <span className="tech-d3">d3.js</span>
              <span className="tech-react">React</span>
            </div>
            <div className="project-summary">
              Statistics visualization on books bought throughout 2022.
            </div>
          </div>
        </SingleProject>
      </div>
    </div>
  );
};

export default Projects;
