import React from "react";
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';

import app from "../Credenciales";
import {getFirestore, updateDoc, doc} from "firebase/firestore";

const firestore=getFirestore(app);

const ListadoPais = ({arrayPais, correoUser, setArrayPais}) => {

    //Funcion para eliminar el pais...
async function eliminarPais(idPais){
    // nuevo array de pais el cual selecciona un id del elemento 
    const nuevoArrayP = arrayPais.filter(
        (objPais) => objPais.id !== idPais
    );
    const docuRef= doc(firestore, `Paises/${correoUser}`);
    //modificamos el array para solo obtener los elementos que no selecciono por el id...
 updateDoc(docuRef, {paises: [...nuevoArrayP]});
//actualizar state
 setArrayPais(nuevoArrayP);
 }

 
    return( 
    <Container>
        <Stack>

{arrayPais.map((objPais)=> {
return(
<>
<Row>
<Col>{ objPais.pais}</Col>
<Col>
<Button>Ver Archivo</Button>
</Col>
<Col>
<Button onClick={()=> eliminarPais(objPais.id)} >Eliminar País</Button>
</Col>

</Row>
<hr   />
</>
    );

})}

        </Stack>
    </Container>
    );
};

export default ListadoPais;
