import '../styles/Projects.css';
import { Container,Row, Col, Pagination, Form ,Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import Project from '../components/Project';
function Projects(){
    const [projects,setProjects] = useState([]);
    const URL = "http://localhost:3000/api/data";

    useEffect(()=>{
        fetch(URL,{
            method:"GET"
        }).then(res =>{
            return res.json();
        }).then(data =>{
            setProjects(data);
        })
    },[])

    return(
        <>
                <h2>Projects</h2>
                <Row xs={12} md={8} className='project-container'>
                   {projects.map(project =>(
                          <Project
                          key={project.name} 
                          name={project.name}
                          url={project.url}
                          image={project.image}
                      />
                   ))}
                </Row>
        </>
    )
}

export default Projects;