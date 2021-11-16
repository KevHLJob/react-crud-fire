import React from 'react'
import { Container, Form,Col, Row, Button, FormControl } from 'react-bootstrap';

import app from '../Credenciales';
import {getFirestore, updateDoc, doc} from "firebase/firestore";

const firestore= getFirestore(app);


const AddPais = ({correoUser, setArrayPais,arrayPais}) => {

    async function Añadirpais(e){
        e.preventDefault();
        const descripcion= e.target.formDescripcion.value;
//crear nuevo array de pais

const nvArrayPais =[...arrayPais,
    {
        id: +new Date(),
        pais:descripcion,
        url: "https://pcisum.photos/420",
    },

  ];

        //actualizar info
const docuRef= doc(firestore,`Paises/${correoUser}`);
updateDoc(docuRef, {paises:[...nvArrayPais]});
//Estado actualizado
setArrayPais(nvArrayPais);
// Limpiar Form
e.target.formDescripcion.value="";


    }
    return (
       
    <Container>
        <Form onSubmit={Añadirpais}>
            <Row>
                <Col>
                <FormControl type="text" placeholder="Escribe el País" id="formDescripcion" />
                </Col>
                <Col>
                <FormControl type="file" placeholder="Añade el archivo" />
                </Col>
                <Col>
                <Button type="submit">Agregar País</Button>
                </Col>

            </Row>
        </Form>
    </Container>
    
   ); 
};

export default AddPais;
