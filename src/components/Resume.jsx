import React from 'react';
import { Button, Container } from 'react-bootstrap';
import '../styles/Resume.css';
function Resume() {
    const resumeURL = '/Hayden_Clark_Resume.docx.pdf';
    
  return (
    <Container style={{ textAlign: 'center', padding: '20px' }}>
      <h1>My Resume</h1>
      <iframe
        src={resumeURL}
        title="Resume"
        style={{ width: '100%', height: '500px', border: 'none', margin: '20px 0' }}
      ></iframe>
      <div>
        <Button
          className='fullscreen-btn'
          style={{ marginRight: '10px' }}
          onClick={() => window.open(resumeURL, '_blank')}
        >
          View in Fullscreen
        </Button>
        <Button
            className='download-btn'
            href={resumeURL}
            download="Hayden_Clark_Resume.pdf" 
        >
          Download Resume
        </Button>
      </div>
    </Container>
  );
}

export default Resume;
