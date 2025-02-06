import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,

} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
const About = () => {
    return (
      <div className="container1 text-center py-5 fixed mt-[100px]">
        <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
        <MDBCol lg="12">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  //src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  src="myphoto_sagar.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Senior Software Developer</p>
                <p className="text-muted mb-4">Pune, Maharashtra, India</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">
                    <Link className="nav-link" to="/message">Message</Link>
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            </MDBRow>
          </MDBContainer>
          </section>
        <p>
          <h1>Welcome to My Portfolio</h1>
          I have over 10+ years of experience spanning multiple domains, 
          including Software Development, DevOps, Data Science, Cloud Computing etc. 
          My expertise lies in designing scalable applications, automating infrastructure, 
          AI/ML implementation, or leading engineering teams.
          
          Throughout my career, I’ve worked with various technologies like 
          Python, React, AWS, Kubernetes, TensorFlow, contributing to projects in 
          fintech, healthcare, compliance, etc.. I have successfully led teams, 
          optimized workflows, and delivered impactful solutions that enhanced business operations.
          Currently, I’m focused on developing AI-driven GRC solutions, architecting cloud-native applications, 
          or integrating ML with enterprise systems. I’m excited about opportunities where I can leverage my 
          experience to drive innovation and efficiency.
        </p>
      </div>
    );
  };
  
  export default About;
  