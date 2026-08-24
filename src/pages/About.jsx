export default function About() {
  return (
    <div className="page-container">
      <h1>About Me</h1>

      <section>
        <h2>Education</h2>
        <p>
          <strong>University of Cabuyao (UC-PnC)</strong>
          <br />
          Pursuing a degree in Computing / Information Technology.
        </p>
      </section>

      <section>
        <h2>Leadership & Experience</h2>
        <ul>
          <li>
            <strong>AWS Cloud Club Co-Lead:</strong> Facilitating cloud
            computing learning and building within the campus community.
          </li>
          <li>
            <strong>DEVCON Volunteer:</strong> Leading technical training
            initiatives, including Code Camps.
          </li>
          <li>
            <strong>SASD Operations:</strong> Implementing automated document
            control scripts and managing organization processes.
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <span className="skill-tag">Java</span>
          <span className="skill-tag">Google Apps Script</span>
          <span className="skill-tag">Git & Vercel</span>
        </div>
      </section>
    </div>
  );
}
