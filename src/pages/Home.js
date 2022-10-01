import React from 'react';
import Container from "react-bootstrap/esm/Container";
import { Link,useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";


function Home(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
      console.log(props.isAdmin)
      const [modalShow, setModalShow] = React.useState(true);
 
    return (
    <>
    <Header />
       {isDesktop && <Container className="mt-4 mb-5">
        <Row className="text-center justify-content-center">   
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> 
        </Row>
       </Container>}


       {isMobileOrTablet && <Container className=" mb-5 mt-5 pt-5">
       <Row className="text-center justify-content-center">
            <Col xs={12} className="my-auto text-center">
            <Link to="/form_envoi_fulu" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="light" style={{width:350,height:300}} className='btn-lg rounded-pill zoom' 
            >
            <i className="text-primary"><b>Tinda Fulu</b></i>
            </Button>
            </Link>    
            </Col>

           </Row>
    
       </Container>}

    <Footer />
    </>


        
    )
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <p className='text-danger'><b>Désolé !!!</b>   </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p className='text-danger'><b>l'application est seulement utilisable qu'en smartphone or tablet</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Home;