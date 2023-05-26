import { useState } from "react";
import { usePost, useGet, useDelete, usePut } from "../_Hooks/Custom";
import { Card, } from "react-bootstrap";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import Alert from "../Alert/Alert";
import ModalCustom from "../Modale/ModalCustom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "./AioCpuForm.scss"

const API_URL = "http://localhost:3432/aiocpu";

const AioCpuForm = () => {

    const { data, mutate } = useGet(API_URL);
    // Dichiara una variabile 'data' che conterrà i dati ottenuti dalla chiamata API utilizzando il hook 'useGet'.
    // Dichiara una variabile 'mutate' che rappresenta la funzione per aggiornare manualmente i dati ottenuti dalla chiamata API.

    const { deleteData } = useDelete(API_URL);
    // Dichiara una variabile 'deleteData' che rappresenta la funzione per eliminare i dati utilizzando il metodo DELETE della chiamata API.

    const { updateData } = usePut(API_URL);


    const { postData } = usePost(API_URL);


    const [formValues, setFormValues] = useState({});
    // Dichiara una variabile 'formValues' che conterrà i valori dei campi di un form.
    // Dichiara una funzione 'setFormValues' che permette di aggiornare i valori dei campi del form.

    const [alert, setAlert] = useState({
        show: false,
        message: ""
    });
    // Dichiara una variabile 'alert' che contiene lo stato dell'alert, con proprietà 'show' e 'message'.
    // Dichiara una funzione 'setAlert' che permette di aggiornare lo stato dell'alert.

    const [selectedItem, setSelectedItem] = useState(null);
    // Dichiara una variabile 'selectedItem' che contiene l'elemento selezionato.
    // Dichiara una funzione 'setSelectedItem' che permette di aggiornare l'elemento selezionato.

    const [isEditing, setIsEditing] = useState(false);
    // Dichiara una variabile 'isEditing' che indica se l'applicazione è in modalità di modifica.
    // Dichiara una funzione 'setIsEditing' che permette di aggiornare la modalità di modifica.

    const [isModalOpen, setModalOpen] = useState(false);
    // Dichiara una variabile 'isModalOpen' che indica se il modal è aperto.
    // Dichiara una funzione 'setModalOpen' che permette di aggiornare lo stato del modal.


    const handleModalClose = () => setModalOpen(false);
    // Definisce una funzione 'handleModalClose' che chiude il modal impostando 'isModalOpen' su 'false'.

    const handleModalOpen = (item) => {
        setSelectedItem(item);
        // Imposta l'elemento selezionato utilizzando la funzione 'setSelectedItem'.

        setIsEditing(Boolean(item));
        // Imposta la modalità di modifica ('isEditing') in base all'esistenza dell'elemento selezionato.

        setFormValues({
            name: item?.name || "",
            price: item?.price || "",
            description: item?.description || ""
        });
        // Imposta i valori del form utilizzando la funzione 'setFormValues', tenendo conto della presenza o assenza dei campi nell'elemento selezionato.

        setModalOpen(true);

    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Estrae il nome dell'input ('name') e il valore inserito ('value') dall'evento 'change'.

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        // Aggiorna lo stato 'formValues' utilizzando la funzione 'setFormValues', mantenendo i valori precedenti e sovrascrivendo il valore corrispondente al nome dell'input modificato.
    };

    const handleDelete = (id) => {
        if (deleteData) {
            // Verifica se la funzione 'deleteData' è disponibile.
            deleteData(id, () => {
                // Chiama la funzione 'deleteData' passando l'id dell'elemento da eliminare e una callback da eseguire dopo l'eliminazione.
                setAlert({ show: true, message: "Elemento eliminato!" });
                // Imposta lo stato 'alert' per mostrare un messaggio di conferma.
                mutate();
                // Riesegue la richiesta per ottenere i dati aggiornati utilizzando la funzione 'mutate'.
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Impedisce il comportamento predefinito di submit del modulo (ricaricamento della pagina)

        const formData = {
            name: formValues.name, // Ottiene il valore del campo "name" dallo stato del modulo
            price: formValues.price, // Ottiene il valore del campo "price" dallo stato del modulo
            description: formValues.description || "", // Ottiene il valore del campo "description" dallo stato del modulo. Se è vuoto, viene impostato come stringa vuota
        };

        if (isEditing && updateData) {
            // Se è in modalità di modifica e la funzione "updateData" esiste
            updateData(selectedItem.id, formData, () => {
                // Chiama la funzione "updateData" passando l'ID dell'elemento selezionato, i dati del modulo e una callback
                setAlert({ show: true, message: "Elemento aggiornato con successo!" }); // Imposta lo stato "alert" per mostrare un messaggio di successo
                mutate(); // Aggiorna i dati nella cache o nel server (a seconda di come è configurato)
            });
        } else {
            postData(formData, () => {
                // Altrimenti, se non è in modalità di modifica, significa che sta creando un nuovo elemento
                setAlert({ show: true, message: "Salvataggio completato!" }); // Imposta lo stato "alert" per mostrare un messaggio di successo
                mutate(); // Aggiorna i dati nella cache o nel server (a seconda di come è configurato)
            });
        }
    };

    const handleAlertDismiss = () => {
        setAlert({ show: false, message: "" }); // Imposta lo stato "alert" per nascondere l'alert settando il valore "show" a false e cancella il messaggio impostando una stringa vuota
    };

    const modalProps = {
        show: isModalOpen,
        onHide: handleModalClose,
        isEditing: isEditing,
        onSubmit: handleSubmit,
        labelName: "Nome",
        valueName: formValues.name || "",
        name: "name",
        onChangeName: handleInputChange,
        labelPrice: "Prezzo",
        namePrice: "price",
        valuePrice: formValues.price,
        onChangePrice: handleInputChange,
        labelDescription: "Descrizione",
        nameDescription: "description",
        valueDescription: formValues.description || "",
        onChangeDescription: handleInputChange,
        onClickCloseButton: handleModalClose,
        labelButtonClose: "Chiudi",
        onClickSaveButton: handleModalClose,
        labelButtonSave: "Salva",
    };


    if (data) {
        return (
            <>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-2 mt-5'>
                            <ButtonCustom variant={"outline-dark"} label={"Aggiungi Prodotto"} onClick={() => handleModalOpen(null)} />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        {
                            data.map(item => (
                                <div className='col-sm-12 col-m-6 col-lg-3' key={item.id}>
                                    <Card className='mt-3'>
                                        <Card.Img variant="top" src="https://www.pcassemblati.eu/4175/pc-gaming-titanium-ryzen-7-3700x-ssd-m2-500-ddr4-32gb-rtx2080-8gb.jpg" />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div className="card-footer-container">
                                                <small className="text-muted">{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</small>
                                                <div className="buttons-container">
                                                    <Link to={`/aiocpu/${item.id}`} className="btn btn-light"><FontAwesomeIcon icon={faCircleInfo} style={{ height: "25px" }} />  </Link>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-1"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-2"
                                                        onClick={() => handleModalOpen(item)}
                                                    >
                                                        <FontAwesomeIcon icon={faPen} />
                                                    </button>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                    <Alert show={alert.show} message={alert.message} onClick={handleAlertDismiss} />
                </div>

                <ModalCustom {...modalProps} />

            </>
        );
    }
}


export default AioCpuForm;