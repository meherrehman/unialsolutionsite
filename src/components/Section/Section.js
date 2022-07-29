import React, { useState } from 'react';
import { Tab, Row, Col, Nav, Dropdown } from 'react-bootstrap';
import image1 from "../../assets/block.png";
import image2 from "../../assets/block2.png";
import image3 from "../../assets/block3.gif";
import "./Section.css";



function Section({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const handelerChanage = (e) => {
    setSelected(e.target.textContent);
    setIsActive(false);
  }
  return (

    <div className="pimcore_area_services pimcore_area_content">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="mt-5  a-services waypoint">
        <div className='container'>
          <h2 className="a-section__title h2 step-up 1 ">
            Our Services
          </h2>
          <div className='container my-4'>
            <Dropdown className='hidden'  >
              <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:"#7F0000", border:"2px solid white"}}>
                {selected}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handelerChanage} eventKey="first">Blockchain Development</Dropdown.Item>
                <Dropdown.Item onClick={handelerChanage} eventKey="second">Full Stack Web Development</Dropdown.Item>
                <Dropdown.Item onClick={handelerChanage} eventKey="third">Full Mobile App Development</Dropdown.Item>
                <Dropdown.Item onClick={handelerChanage} eventKey="four">DevOPS</Dropdown.Item>
                <Dropdown.Item onClick={handelerChanage} eventKey="five">Project Management</Dropdown.Item>
                <Dropdown.Item onClick={handelerChanage} eventKey="six">Cloud Technologies</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Row className="container mt-5 d-flex a-services__tabs step-in">
            <Col className="a-services__tabs-container services-pager step-in-left col-md-4 order-md-0">
              <Nav variant="pills" className="flex-column a-services__tabs-container-ul" >
                <Nav.Item>
                  <Nav.Link eventKey="first" className="a-services__tabs-label"><p>Blockchain Development</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="a-services__tabs-label"><p>Full Stack Web Development</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="a-services__tabs-label"><p>Full Mobile App Development</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four" className="a-services__tabs-label"><p>DevOPS</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="five" className="a-services__tabs-label"><p>Project Management</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="six" className="a-services__tabs-label"><p>Cloud Technologies</p></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <div className="a-services__content-block step-in-right col-md-7 p-0">
              <Col className="a-services__content-container">
                <Tab.Content className=" mt-4 a-services__content active">
                  <Tab.Pane eventKey="first" >
                    <h5 className=" a-services__name">Blockchain Development</h5>
                    <p className="a-services__description">Explore the world of secure decentralized applications with our Blockchain development services.</p>
                    <div style={{margin:"20px"}}>
                    <img src={image1} className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image2} className="img-thumbnail imgStyle" alt="image1" height="110px" width="100px"/>
                    <img src={image3} className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image1} className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h5 className="a-services__name">Full Stack Web Development</h5>
                    <p className="a-services__description">Building Web is not big thing, converting it into business does matter. We develop your custom Web solutions, which follow the HCI, SEO complete procedures, we are at UNIAL believe in code optimisation to get maximum output, to stand out your business in top.</p>
                    <div style={{margin:"20px"}}>
                    <img src={image1}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image2}  className="img-thumbnail imgStyle" alt="image1" height="110px" width="100px"/>
                    <img src={image3}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image1}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h5 className="a-services__name">Full Mobile App Development</h5>
                    <p className=" a-services__description">We build user friendly and highly interactive Mobile Apps, which create easiness for your clients, which make your client more trust worthy. With deep knowledge of your business field we are at UNIAL define psychology of your business’s client and than make app for them which will on their just finger tips.</p>
                    <div style={{margin:"20px"}}>
                    <img src={image1}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image2}  className="img-thumbnail imgStyle" alt="image1" height="110px" width="100px"/>
                    <img src={image3}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image1}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="four">
                    <h5 className="a-services__name">DevOPS</h5>
                    <p className="a-services__description">When we work in big teams, and specially when we are working in global environment, code merging and version controlling just consumes our time so much, we are at UNIAL auto mate your development and operations with latest CI/CD Technologies.</p>
                    <div style={{margin:"20px"}}>
                    <img src={image1}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image2}  className="img-thumbnail imgStyle" alt="image1" height="110px" width="100px"/>
                    <img src={image3}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image1}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    </div>
                    </Tab.Pane>
                  <Tab.Pane eventKey="five">
                    <h5 className="a-services__name">Project Management </h5>
                    <p className="a-services__description">Project Management is like an art, we are at UNIAL managed different coloured process streams combining into a work of art. We love agile methodology to manage and grow your project with best outcomes.</p>
                    <div style={{margin:"20px"}}>
                    <img src={image1}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image2}  className="img-thumbnail imgStyle" alt="image1" height="110px" width="100px"/>
                    <img src={image3}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image1}  className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="six" >
                    <h5 className=" a-services__name">Cloud Technologies</h5>
                    <p className="a-services__description">Cloud consulting is aimed to help companies make technology-related decisions when moving to cloud or opting for cloud-native development or optimization to prevent unnecessary expenditures and needs for reimplementation.</p>
                    <div style={{margin:"20px"}}>
                    <img src={image1} className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image2} className="img-thumbnail imgStyle" alt="image1" height="110px" width="100px"/>
                    <img src={image3} className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    <img src={image1} className="img-thumbnail imgStyle" alt="image1" height="100px" width="100px"/>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </div>
          </Row>

        </div>
      </Tab.Container>
    </div>
  );
}

export default Section;