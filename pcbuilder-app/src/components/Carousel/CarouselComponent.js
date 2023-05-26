import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponent.scss';
import ButtonCarousel from "../ButtonCustom/ButtonCarousel"


function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100  carousel-img"
                    src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Finest Details</h3>
                    <ButtonCarousel />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100  carousel-img"
                    src="https://images.unsplash.com/photo-1607034071833-18a5b64047ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='color'>Cats Also Loves Us</h3>
                    <ButtonCarousel />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100  carousel-img"
                    src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Gaming Room</h3>
                    <ButtonCarousel />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;