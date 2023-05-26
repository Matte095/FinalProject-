import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonCarousel.scss';
import { Link } from 'react-router-dom';




const CuteButton = () => {
  return (
    <Button variant="primary" className="cute-button">
      <Link to="/aiocpu" className='button-link' > <span className='button-text'> Vetrina Gaming Pc</span> </Link>

    </Button>
  );
};

export default CuteButton