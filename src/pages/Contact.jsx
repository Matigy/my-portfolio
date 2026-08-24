export default function Contact() {
  // Prevents the page from reloading when the "Send Message" button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! (Note: This is a demo form)");
  };

  return (
    <div className="page-container">
      <h1>Contact Me</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        I'm always open to discussing tech, new opportunities, or how I can help with your next project.
      </p>
      
      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        
        {/* Left Side: Contact Information */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h2 style={{ marginTop: 0 }}>Get in Touch</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            <div>
              <strong>📍 Location:</strong> 
              <span style={{ display: 'block', color: '#555' }}>Cabuyao, Laguna, Philippines</span>
            </div>
            <div>
              <strong>✉️ Email:</strong> 
              <span style={{ display: 'block', color: '#555' }}>aisintia130@gmail.com</span>
            </div>
            <div>
              <strong>🐙 GitHub:</strong> 
              <a href="https://github.com/Matigy" target="_blank" rel="noreferrer" style={{ display: 'block', color: '#FF9900', textDecoration: 'none' }}>
                github.com/Matigy
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div style={{ flex: '1.5', minWidth: '300px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Juan Dela Cruz" 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box', fontFamily: 'inherit' }} 
              />
            </div>
            
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="juan@example.com" 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box', fontFamily: 'inherit' }} 
              />
            </div>
            
            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="How can I help you?" 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box', fontFamily: 'inherit', resize: 'vertical' }}
              ></textarea>
            </div>
            
            <button type="submit" className="btn" style={{ border: 'none', cursor: 'pointer', fontSize: '1rem', alignSelf: 'flex-start' }}>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}