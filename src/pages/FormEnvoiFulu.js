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
import Form from 'react-bootstrap/Form';


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


       {isMobileOrTablet && <Container className="bg-light mb-5 mt-2 pt-2">
       <Row className='justify-content-center mb-3 ' >
        <Col xs={12}>
        <p className='display-6 text-primary text-center'><i><b><pre>Formulaire Envoi Décharge</pre></b></i></p>
        </Col>
    </Row>
    <hr variant="secondary"></hr>
       <Form>
       <Col xs={12} className="my-auto text-start">
       <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> <b>Nom de la rue ,du quartier et commune :</b> </Form.Label>
        <Form.Control name="prenom_beneficiaire" type="text" placeholder='Rue ,Quartier et Commune'  required/>
         </Form.Group>
        </Col>
        <hr variant="secondary"></hr>
          <Row className="text-center justify-content-start">
            <Col xs={12} className="my-auto text-start">
            <Form.Label className='text-dark'><span className='text-danger'>*</span><b> Description de la décharge :</b> </Form.Label>
             <div key ={`inline-radio`} className="mb-3">
                <Form.Check  inline label="Active" name="description"  type="radio"  id={`inline-radio-1`} />
                <Form.Check  inline  label="Abondonnéé"  name="description" type="radio"  id={`inline-radio-2`}  />
                <Form.Check inline  label="sauvage" name="description"  type = "radio" id={`inline-radio-3`} />
             </div>
            </Col>
            <hr variant="secondary"></hr>

            <Col xs={12} className="my-auto text-start">
            <Form.Label className='text-dark'><span className='text-danger'>*</span><b> Dimension :</b> </Form.Label>
             <div key ={`inline-radio`} className="mb-3">
                <Form.Check  inline label="Petite" name="dimension"  type="radio"  id={`inline-radio-1`} />
                <Form.Check  inline  label="Moyenne"  name="dimension" type="radio"  id={`inline-radio-2`}  />
                <Form.Check inline  label="Grande" name="dimension"  type = "radio" id={`inline-radio-3`} />
             </div>
            </Col>

            <hr variant="secondary"></hr>

            <Col xs={12} className="my-auto text-start">
            <Form.Label className='text-dark'><span className='text-danger'>*</span><b> Déchets observés (%) :</b> </Form.Label>
             <div key ={`inline-radio`} className="mb-3">
                <Form.Check  inline label="MP (matière organique)" name="dechet"  type="radio"  id={`inline-radio-1`} />
                <Form.Check  inline  label="MP (matière organique)"  name="dechet" type="radio"  id={`inline-radio-2`}  />
                <Form.Check inline  label="Divers" name="dechet"  type = "radio" id={`inline-radio-3`} />
             </div>
            </Col>

            <hr variant="secondary"></hr>

            <Col xs={12} className="my-auto text-start">
            <Form.Label className='text-dark'><span className='text-danger'>*</span><b> Nuisances observées :</b> </Form.Label>
             <div key ={`inline-radio`} className="mb-3">
                <Form.Check  inline label="Odeurs" name="nuisance"  type="radio"  id={`inline-radio-1`} />
                <Form.Check  inline  label="Fumées"  name="nuisance" type="radio"  id={`inline-radio-2`}  />
             </div>
            </Col>

            <hr variant="secondary"></hr>        

            <Col xs={12} className="my-auto text-start">
            <Form.Label className='text-dark'><span className='text-danger'>*</span><b> Description de la situation :</b> </Form.Label>
             <div key ={`inline-radio`} className="mb-3">
                <Form.Check  inline label="Bord de la route" name="situation"  type="radio"  id={`inline-radio-1`} />
                <Form.Check  inline  label="Plein champ"  name="situation" type="radio"  id={`inline-radio-2`}  />
                <Form.Check inline  label="Bord de la rivière" name="situation"  type = "radio" id={`inline-radio-3`} />
                <Form.Check inline  label="à côté des habitants" name="situation"  type = "radio" id={`inline-radio-3`} />
             </div>
            </Col>
            <hr variant="secondary"></hr> 

        <Col xs={12} className="my-auto text-start">
       <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> <b>Autres observations :</b> </Form.Label>
        <Form.Control name="prenom_beneficiaire" type="text" placeholder='Autres observations'  required/>
         </Form.Group>
        </Col>
        <hr variant="secondary"></hr> 
        <Col xs={12} className="my-auto text-start">
       <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> <b>Photo de la décharge :</b> </Form.Label>
        <Form.Control  type="file" accept='image/*;capture=camera' id="uploader" name="uploader"  required/>
         </Form.Group>
        </Col>
        </Row>
        </Form>
    
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