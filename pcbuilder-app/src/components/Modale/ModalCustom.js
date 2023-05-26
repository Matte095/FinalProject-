import { Button, Form, InputGroup, Modal } from "react-bootstrap";

const ModalCustom = (props) => {

    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.isEditing ? "Modifica dissipatore" : "Aggiungi un nuovo dissipatore"}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={props.onSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label>{props.labelName}</Form.Label>
                            <Form.Control type="text" value={props.valueName} name={props.name} onChange={props.onChangeName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Price">
                            <Form.Label>{props.labelPrice}</Form.Label>
                            <InputGroup>
                                <Form.Control type="number" name={props.namePrice} value={props.valuePrice} onChange={props.onChangePrice} />
                                <InputGroup.Text>€</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Description">
                            <Form.Label>{props.labelDescription}</Form.Label>
                            <Form.Control type="text" name={props.nameDescription} as="textarea" rows={3} placeholder="Inserisci la descrizione" value={props.valueDescription} onChange={props.onChangeDescription} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onClickCloseButton}>
                            {props.labelButtonClose}
                        </Button>
                        <Button type="submit" variant="primary" onClick={props.onClickSaveButton}>
                            {props.labelButtonSave}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ModalCustom;