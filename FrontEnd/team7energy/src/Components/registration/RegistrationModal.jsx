import { useState } from "react";
import { Button, Col, Form, InputGroup, ListGroup, Modal, Nav, Row } from "react-bootstrap";
import { BsFilePerson } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { fetchRegister, fetchRegisterClient } from "../../Redux/Actions/LoginActions";
const RegistrationModal = (props) => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [contactName, setContactName] = useState("");
  const [surname, setSurname] = useState("");
  const [contactSurname, setContactSurname] = useState("");
  const [email, setEmail] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [pec, setPec] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [VATNumber, setVATNumber] = useState("");
  const [annualTurnHover, setAnnualTurnHover] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [showClientModal, setShowClientModal] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRegister(name, surname, email, password, password));

    setValidated(true);
  };
  const handleClientSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchRegisterClient(
        contactName,
        contactSurname,
        contactEmail,
        contactPhone,
        phone,
        companyName,
        VATNumber,
        email,
        annualTurnHover,
        pec,
        companyLogo,
        businessName
      )
    );

    setValidated(true);
  };

  const handleShowClientModal = () => {
    setShowClientModal(false);
  };
  const handleShowUserModal = () => {
    setShowClientModal(true);
  };

  return (
    <>
      <Modal size='lg' aria-labelledby='contained-modal-title-vcenter' centered show={props.show}>
        <div id='user-modal' className={!showClientModal && "d-none"}>
          <Modal.Header>
            <div className='d-flex justify-content-center align-items-center gap-2'>
              <Nav.Link variant='outline-info' className='border-bottom border-4'>
                Add User
              </Nav.Link>

              <Nav.Link onClick={handleShowClientModal}>Add Client</Nav.Link>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              validated={validated}
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Row className='mb-3'>
                <Form.Group as={Col} md='4' controlId='validationCustom01'>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='First name'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustom02'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Last name'
                    value={surname}
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
                    <Form.Control
                      type='text'
                      placeholder='Email@example.com'
                      aria-describedby='inputGroupPrepend'
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} md='4' controlId='validationCustom03'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='*******'
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustom04'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Username'
                    required
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>

              <div className='d-flex justify-content-end gap-3 mt-4'>
                <Button type='submit'>Submit form</Button>
                <Button variant='secondary' onClick={props.handleCloseRegModal}>
                  Close
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
        {/* --------------------------------------------------------------------------------- */}
        <div id='client-modal' className={showClientModal && "d-none"}>
          <Modal.Header>
            <div className='d-flex justify-content-center align-items-center gap-2'>
              <Nav.Link onClick={handleShowUserModal}>Add User</Nav.Link>
              <Nav.Link variant='outline-info' className='border-bottom border-4'>
                Add Client
              </Nav.Link>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              validated={validated}
              onSubmit={(e) => {
                handleClientSubmit(e);
              }}
            >
              <Row className='mb-3'>
                <Form.Group as={Col} md='4' controlId='validationCustom01'>
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Contact Name'
                    value={contactName}
                    onChange={(e) => {
                      setContactName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustom02'>
                  <Form.Label>Contact Surname</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Contact Surname'
                    value={contactSurname}
                    onChange={(e) => {
                      setContactSurname(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
                  <Form.Label>Contact Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
                    <Form.Control
                      type='text'
                      placeholder='Email@example.com'
                      aria-describedby='inputGroupPrepend'
                      required
                      value={contactEmail}
                      onChange={(e) => {
                        setContactEmail(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} md='4' controlId='validationCustom03'>
                  <Form.Label>Contact Phone</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Phone'
                    required
                    value={contactPhone}
                    onChange={(e) => {
                      setContactPhone(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustom04'>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Phone'
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustom04'>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Company Name'
                    required
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} md='4' controlId='validationCustom03'>
                  <Form.Label>VAT Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Vat Number'
                    required
                    value={VATNumber}
                    onChange={(e) => {
                      setVATNumber(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
                    <Form.Control
                      type='text'
                      placeholder='Email@example.com'
                      aria-describedby='inputGroupPrepend'
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustom04'>
                  <Form.Label>Annual turn hover</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='$$$$$'
                    required
                    value={annualTurnHover}
                    onChange={(e) => {
                      setAnnualTurnHover(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
                  <Form.Label>Pec</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
                    <Form.Control
                      type='email'
                      placeholder='email@pec.it'
                      aria-describedby='inputGroupPrepend'
                      required
                      value={pec}
                      onChange={(e) => {
                        setPec(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustom03'>
                  <Form.Label>Business Name</Form.Label>
                  <Form.Select
                    aria-label='Default select example'
                    placeholder='Business Name'
                    required
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                    }}
                  >
                    <option disabled>Business Name</option>
                    <option value='PA'>PA</option>
                    <option value='SAS'>SAS</option>
                    <option value='SPA'>SPA</option>
                    <option value='SRL'>SRL</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md='4' controlId='validationCustom04'>
                  <Form.Label>Company Logo</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Url address'
                    required
                    value={companyLogo}
                    onChange={(e) => {
                      setCompanyLogo(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <div className='d-flex justify-content-end gap-3 mt-4'>
                <Button type='submit'>Submit form</Button>
                <Button variant='secondary' onClick={props.handleCloseRegModal}>
                  Close
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default RegistrationModal;
