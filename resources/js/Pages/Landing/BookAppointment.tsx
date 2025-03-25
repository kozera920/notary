import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaCalendarAlt, FaClock, FaFileAlt, FaIdCard, FaInfoCircle } from 'react-icons/fa';
import { Link, useForm, router } from '@inertiajs/react';
import Datetime from 'react-datetime';
import moment from 'moment';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Head } from '@inertiajs/react';
import "react-datetime/css/react-datetime.css";
const BookAppointment = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState<moment.Moment | null>(null);

  // Initialize form with document data
    const { data, setData, errors, post, processing } = useForm();

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false || !selectedDateTime) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // Add form fields to data
    setData({
      fullName: form.formName.value,
      email: form.formEmail.value,
      phone: form.formPhone.value,
      dateTime: selectedDateTime ? moment(selectedDateTime).format('YYYY-MM-DD HH:mm:ss') : null,
      timeZone: form.formTimeZone.value,
      documentType: form.formDocType.value,
      documentCount: form.formDocCount.value,
      notes: form.formNotes.value,
      termsAccepted: form.termsCheck.checked,
    });

    setValidated(true);
    setFormSubmitted(true);

    // Submit the form data to your backend
    post(route('appointment.send'));
  };

  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM'
  ];

  const documentTypes = [
    'Real estate documents',
    'Legal affidavits & sworn statements',
    'Power of attorney (POA) forms',
    'Business agreements & contracts',
    'DMV-related forms',
    'Personal and financial documents'
  ];

  return (
    <>
    <Head title="Book an appointment" />
      <Header />
      
      {/* Hero Section */}
      <section className="pb-5 hero-section not-home">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-4">
                <h1 className="display-5 fw-bold mb-3">
                  Book Your Notary Appointment
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-4">Schedule Your Remote Online Notarization</h2>
              <p className="lead mb-5">
                Complete the form below to schedule your appointment with one of our licensed Arizona 
                notaries. The entire process takes less than 10 minutes and can be done from the comfort 
                of your home or office.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Booking Process Steps */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center mb-5">
              <h3 className="fw-bold mb-4">How It Works</h3>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col md={3} className="mb-4">
                  <Card className="h-100 border-0 shadow text-center">
                    <Card.Body className="p-4">
                      <div className="k-numbers rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '60px', height: '60px' }}>
                        <h4 className="fw-bold mb-0">1</h4>
                      </div>
                      <h5 className="fw-bold">Schedule</h5>
                      <p className="mb-0">Book a convenient time</p>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={3} className="mb-4">
                  <Card className="h-100 border-0 shadow text-center">
                    <Card.Body className="p-4">
                      <div className="k-numbers rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '60px', height: '60px' }}>
                        <h4 className="fw-bold mb-0">2</h4>
                      </div>
                      <h5 className="fw-bold">Upload</h5>
                      <p className="mb-0">Submit your documents</p>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={3} className="mb-4">
                  <Card className="h-100 border-0 shadow text-center">
                    <Card.Body className="p-4">
                      <div className="k-numbers rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '60px', height: '60px' }}>
                        <h4 className="fw-bold mb-0">3</h4>
                      </div>
                      <h5 className="fw-bold">Connect</h5>
                      <p className="mb-0">Video call with notary</p>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={3} className="mb-4">
                  <Card className="h-100 border-0 shadow text-center">
                    <Card.Body className="p-4">
                      <div className="k-numbers rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '60px', height: '60px' }}>
                        <h4 className="fw-bold mb-0">4</h4>
                      </div>
                      <h5 className="fw-bold">Complete</h5>
                      <p className="mb-0">Get notarized documents</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Booking Form */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              {formSubmitted ? (
                <Card className="border-0 shadow">
                  <Card.Body className="p-5 text-center">
                    <div className="mb-4">
                      <FaCalendarAlt size={60} className="text-primary" />
                    </div>
                    <h2 className="fw-bold mb-4">Your Appointment is Scheduled!</h2>
                    <p className="lead mb-4">
                      Thank you for booking your notary appointment with TG Notary Now. We've sent a 
                      confirmation email with all the details and next steps.
                    </p>
                    <Alert variant="info" className="d-inline-block">
                      <div className="d-flex align-items-center">
                        <FaInfoCircle className="me-2" />
                        <div>
                          <p className="mb-0">Please check your email for instructions on how to upload your documents before your appointment.</p>
                        </div>
                      </div>
                    </Alert>
                    <div className="mt-4">
                      <Button variant="primary" className="me-3" onClick={() => setFormSubmitted(false)}>Book Another Appointment</Button>
                      {/* <Button variant="primary" href="/dashboard">Go to My Dashboard</Button> */}
                    </div>
                  </Card.Body>
                </Card>
              ) : (
                <Card className="border-0 shadow">
                  <Card.Body className="p-4">
                    <h3 className="fw-bold mb-4">Schedule Your Appointment</h3>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6} className="mb-4">
                          <h5 className="mb-3">
                            <FaIdCard className="text-primary me-2" /> 
                            Personal Information
                          </h5>
                          <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control 
                              type="text" 
                              placeholder="Enter your full legal name" 
                              required 
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide your full legal name.
                            </Form.Control.Feedback>
                          </Form.Group>
                          
                          <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                              type="email" 
                              placeholder="Enter your email" 
                              required 
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid email address.
                            </Form.Control.Feedback>
                            <Form.Text className="text-muted">
                              We'll send appointment details and notifications to this email.
                            </Form.Text>
                          </Form.Group>
                          
                          <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                              type="tel" 
                              placeholder="(123) 456-7890" 
                              required 
                            />
                            <Form.Control.Feedback type="invalid">
                              Please provide a valid phone number.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        
                        <Col md={6} className="mb-4">
                          <h5 className="mb-3">
                            <FaCalendarAlt className="text-primary me-2" /> 
                            Appointment Details
                          </h5>
                          <Form.Group className="mb-3" controlId="formDateTime">
                            <Form.Label>Preferred Date & Time</Form.Label>
                            <Datetime
                              inputProps={{ placeholder: "Select date and time", required: true }}
                              value={selectedDateTime||''}
                              onChange={(value:any) => setSelectedDateTime(value)}
                              isValidDate={(currentDate) => {
                                return currentDate.isAfter(moment().subtract(1, 'day'));
                              }}
                              isValidTime={(currentDate:any) => {
                                const time = moment(currentDate).format('h:mm A');
                                return availableTimes.includes(time);
                              }}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please select a valid date and time.
                            </Form.Control.Feedback>
                          </Form.Group>
                          
                          <Form.Group className="mb-3" controlId="formTimeZone">
                            <Form.Label>Time Zone</Form.Label>
                            <Form.Select required>
                              <option value="">Select your time zone</option>
                              <option value="Arizona">Arizona Time (MST/MDT)</option>
                              <option value="Pacific">Pacific Time (PST/PDT)</option>
                              <option value="Mountain">Mountain Time (MST/MDT)</option>
                              <option value="Central">Central Time (CST/CDT)</option>
                              <option value="Eastern">Eastern Time (EST/EDT)</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Please select your time zone.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col md={12} className="mb-4">
                          <h5 className="mb-3">
                            <FaFileAlt className="text-primary me-2" /> 
                            Document Information
                          </h5>
                          <Form.Group className="mb-3" controlId="formDocType">
                            <Form.Label>Document Type</Form.Label>
                            <Form.Select required>
                              <option value="">Select document type</option>
                              {documentTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                              ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Please select a document type.
                            </Form.Control.Feedback>
                          </Form.Group>
                          
                          <Form.Group className="mb-3" controlId="formDocCount">
                            <Form.Label>Number of Documents</Form.Label>
                            <Form.Control 
                              type="number" 
                              min="1" 
                              defaultValue="1" 
                              required 
                            />
                            <Form.Control.Feedback type="invalid">
                              Please enter a valid number of documents.
                            </Form.Control.Feedback>
                          </Form.Group>
                          
                          <Form.Group className="mb-3" controlId="formNotes">
                            <Form.Label>Additional Notes (Optional)</Form.Label>
                            <Form.Control 
                              as="textarea" 
                              rows={3} 
                              placeholder="Any special requirements or additional information"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Form.Group className="mb-4">
                        <Form.Check
                          required
                          id="termsCheck"
                          label="I understand that I will need to provide a valid government-issued photo ID during my appointment."
                          feedback="You must agree before submitting."
                          feedbackType="invalid"
                        />
                      </Form.Group>
                      
                      <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" type="submit">
                          Book My Appointment
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* What to Prepare */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-4">Prepare for Your Appointment</h3>
                  <Row>
                    <Col md={6} className="mb-4">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FaIdCard size={24} />
                        </div>
                        <div>
                          <h5 className="fw-bold">Valid Photo ID</h5>
                          <p className="mb-0">Have your government-issued ID ready (driver's license, passport, or state ID).</p>
                        </div>
                      </div>
                    </Col>
                    
                    <Col md={6} className="mb-4">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FaFileAlt size={24} />
                        </div>
                        <div>
                          <h5 className="fw-bold">Documents</h5>
                          <p className="mb-0">Your documents should be in PDF or image format and ready to upload.</p>
                        </div>
                      </div>
                    </Col>
                    
                    <Col md={6} className="mb-4">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FaClock size={24} />
                        </div>
                        <div>
                          <h5 className="fw-bold">Time</h5>
                          <p className="mb-0">Plan for about 10 minutes per document for the entire process.</p>
                        </div>
                      </div>
                    </Col>
                    
                    <Col md={6} className="mb-4">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FaInfoCircle size={24} />
                        </div>
                        <div>
                          <h5 className="fw-bold">Technical Setup</h5>
                          <p className="mb-0">Ensure your device has a working camera, microphone, and stable internet connection.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      <Footer />
    </>
  );
};

export default BookAppointment;