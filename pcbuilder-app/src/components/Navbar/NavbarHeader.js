import React, { useState } from 'react';
import { Navbar, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./NavbarHeader.scss"






const NavbarHeader = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" variant="light" bg="dark" fixed="top" className='d-flex justify-content-end'>
                <div className="container-fluid">
                    <Navbar.Brand as={Link} to="/" >

                    </Navbar.Brand>
                    <Button className='NavbarHeader-toggle' variant="outline-secondary" onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </div>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menù</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" onClick={handleClose}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aiocpu" className="nav-link" onClick={handleClose}>Dekstop Pc</Link>
                        </li>

                    </ul>
                    <ul className="nav flex-column my-2 mx-2 bottom-links">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <Link to="https://www.linkedin.com/in/matteo-muti-619995115/" className="nav-link">
                                Muti Matteo <FontAwesomeIcon icon={faLinkedin} className='fa-lg' />
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

}

export default NavbarHeader;