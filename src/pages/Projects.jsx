import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon
} from 'mdb-react-ui-kit';

const projects = [
    { id: 1, title: "E-Commerce App", description: "React, Firebase, Stripe" },
    { id: 2, title: "Portfolio Website", description: "React, Framer Motion, Bootstrap, React-dom" },
    { id: 3, title: "Food Management", description: "React, Mongodb, axios, Bootstrap, React-dom" },
    { id: 4, title: "E-Commerce App", description: "React, Firebase, Stripe" },
    { id: 5, title: "Portfolio Website", description: "React, Framer Motion, Bootstrap, React-dom" },
    { id: 6, title: "Food Management", description: "React, Mongodb, axios, Bootstrap, React-dom" },

  ];
  
  const Projects = () => {
    return (
      <div className="container py-5">
        <h2 className="text-center">My Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <section className="vh-10" style={{ backgroundColor: '#5f59f7' }} key={project.id}>
            <MDBContainer className="py-5 h-100"> 
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol xl="10">
                  <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
                    <MDBCardBody className="p-4">
                      <MDBTypography tag='h3'>{project.title}</MDBTypography>
                      <p>{project.description}</p>
                      <MDBCardText className="small">
                        <MDBIcon far icon="star" size="lg" />
                        <span className="mx-2">|</span> Created by <strong>Sagar Nangare</strong> on 11 April , 2024
                      </MDBCardText>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-start align-items-center">
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="cog me-2" />
                          <span className="text-muted small">Settings</span>
                        </MDBCardText>
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="link ms-4 me-2" />
                          <span className="text-muted small">program link</span>
                        </MDBCardText>
                        <MDBCardText className="text-uppercase mb-0">
                          <MDBIcon fas icon="ellipsis-h ms-4 me-2" />
                          <span className="text-muted small">program link</span> 
                          <span className="ms-3 me-4">|</span>
                        </MDBCardText>
                        <a href="#!">
                          <MDBCardImage width="35"
                            src="myphoto_sagar.jpg"alt="avatar"
                                className="rounded-circle me-3"
                                fluid />
                        </a>
                        <MDBBtn outline color="dark" floating size="sm">
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
          </section>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  
