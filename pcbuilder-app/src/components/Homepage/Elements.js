import { Outlet } from "react-router-dom";

import NavbarHeader from "../Navbar/NavbarHeader";


const Elements = () => {
    return (
        <>
            <header>
                <NavbarHeader />
            </header>

            <main>
                <Outlet />

            </main>
        </>
    );

}
export default Elements;

// Quando l'utente naviga nel tuo sito o nell'applicazione e raggiunge una specifica rotta, il componente corrispondente a quella rotta verrà renderizzato all'interno di <Outlet />, sostituendo il suo contenuto precedente.
