import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="page-container">
        <h2>Project not found</h2>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>{project.title}</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{project.description}</p>
      
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <a href={project.link} target="_blank" rel="noreferrer" className="btn">
          View Source / Live Site
        </a>
        <Link to="/projects" className="btn" style={{ background: '#eee', color: '#333' }}>
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}