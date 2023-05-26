import { Button } from "react-bootstrap";

const ButtonCustom = (props) => {

    return (
        <>
            <Button {...props} variant={props.variant} >{props.label}</Button>
        </>
    );
}

export default ButtonCustom;