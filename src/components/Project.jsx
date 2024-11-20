import { Card,Button } from "react-bootstrap";
import '../styles/Project.css';
function Project({name,url,image}){

    const handleViewBtn = () =>{
      window.open(url, "_blank");    
    }


    return(
        <>
          <Card className="project-card">
            <h1 className="name">{name}</h1>
            <img  className="project-pic" src={image} alt={name} />
            <Button className="view-btn" onClick={handleViewBtn}>Click To View</Button>
          </Card>
        </>
    )

}
export default Project;