import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Alert = (props) => {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >

            <Modal.Body>

                <p>
                    {props.message}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Conferma</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Alert;
