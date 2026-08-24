import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <p>Here are a few highlights of my recent technical and leadership work.</p>
      
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description.substring(0, 60)}...</p>
            <Link to={`/projects/${project.id}`} className="btn">Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}