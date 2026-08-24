import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container">
      <h1>Hi, I'm Ais Barcillano Intia</h1>
      <h3 style={{ color: '#666', marginTop: '-10px' }}>
        Computer Science Student | AWS Student Builder Group Lead and CEO
      </h3>
      <p>
        I am a dedicated student builder specializing in software development, cloud infrastructure, and technical automation. 
        Whether I'm designing interfaces in Figma or managing database schemas, I love turning complex problems into elegant solutions.
      </p>
      <Link to="/projects" className="btn">View My Work</Link>
    </div>
  );
}