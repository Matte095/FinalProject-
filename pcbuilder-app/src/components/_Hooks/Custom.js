import axios from "axios";
import useSWR from "swr";


// Definizione di una funzione fetcher per eseguire una richiesta GET utilizzando axios
const fetcher = (url) => axios.get(url).then(result => result.data);

// Hook personalizzato useGet per recuperare i dati da un'API
const useGet = (url, id = 0) => {
    // Creazione dell'URL finale concatenando l'URL di base e l'ID (se presente)
    let finalUrl = url;
    if (id > 0) {
        finalUrl += ("/" + id);
    }

    // Utilizzo dell'hook useSWR per ottenere i dati dalla cache o dalla chiamata all'API
    const { data, error, mutate } = useSWR(finalUrl, fetcher);

    // Restituzione degli oggetti data, error, isLoading e della funzione mutate
    return {
        data: data, // Dati ottenuti dalla chiamata all'API
        error: error, // Eventuale errore nella chiamata all'API
        isLoading: !error && !data, // Flag per indicare se la chiamata all'API è in corso
        mutate: mutate // Funzione per aggiornare manualmente i dati nella cache
    };
}


// FINE - UseGet


// INIZIO - UsePut -> Hook per modifica dati

// Hook personalizzato usePut per eseguire una richiesta PUT a un'API
const usePut = (url) => {
    // Funzione updateData per aggiornare i dati mediante una richiesta PUT
    const updateData = (id, data, successFn) => {
        const finalUrl = `${url}/${id}`; // URL finale per l'aggiornamento dell'elemento specificato dall'ID
        axios.put(finalUrl, data).then((result) => { // Esecuzione della richiesta PUT
            if (result.data) {
                successFn(); // Callback di successo se la richiesta ha avuto successo
            }
        });
    };

    // Restituzione dell'oggetto contenente la funzione updateData
    return {
        updateData,
    };
};


// Fine - UsePut

// INIZIO - usePost  Hook per creazione dati
const usePost = (url) => {
    const postData = (data, successFn) => {
        const finalUrl = `${url}`;
        axios.post(finalUrl, data).then((result) => {
            if (result.data) {
                successFn();
            }
        });
    };
    return {
        postData,
    };

};

// fine - Usepost

// INIZIO - useDelete 

const useDelete = (url) => {
    const deleteData = (id, successFn) => {
        const finalUrl = `${url}/${id}`;
        axios.delete(finalUrl).then((result) => {
            if (result.data) {
                successFn();
            }
        });
    };

    return {
        deleteData,
    };
};

// FIne useDelete

export { useGet, usePut, usePost, useDelete };