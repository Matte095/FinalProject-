import React from 'react';
import Card from 'react-bootstrap/Card';
import { useGet } from '../_Hooks/Custom';
import { useParams } from 'react-router-dom';
import './SecondaryCards.scss';


const SecondaryCards = () => {

    const { id } = useParams();

    const { data } = useGet("http://localhost:3432/aiocpu", id);

    if (data) {
        return (
            <div className='container mt-5' >
                <div className='row mt-5 d-flex justify-content-center'>
                    <div className='col-sm-12 col-lg-4' key={data.id}>
                        <Card className='mt-5 border-dark card-secondary'>
                            <Card.Img variant="top" src="https://www.pcassemblati.eu/4175/pc-gaming-titanium-ryzen-7-3700x-ssd-m2-500-ddr4-32gb-rtx2080-8gb.jpg" />
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text dangerouslySetInnerHTML={{ __html: data.description.replace(/(?:\r\n|\r|\n)/g, '<br>') }} >

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{data.price.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</small>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div >
        );
    }
}

export default SecondaryCards;
