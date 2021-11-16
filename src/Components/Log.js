import React, {useState} from 'react'
import { Container, Form, Button, Stack} from "react-bootstrap";

import app from '../Credenciales';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithRedirect,GoogleAuthProvider} from "firebase/auth"; 

//Variables que nos obtienes la autentificacion
// y los servicios google...
const auth=getAuth(app);
const googleProvider= new GoogleAuthProvider();

const Log = () => {
  const [Registrandose, setRegistradose]= useState(false);


  //funcion para manejar los valores del email y contraseña...
  async function submitHandler(e){
    e.preventDefault();

    const correo= e.target.formBasicEmail.value;
    const contra= e.target.formBasicPassword.value;

    //si esta registrandose realizara los siguiente
    if(Registrandose){
      //Si se va a registrar ingresa el correo
      const user = await createUserWithEmailAndPassword(
        auth,
         correo,
          contra
          );
         // verifica si esta registrado 
      }else{
//sino esta registrado procede agregarlo a firebase------
        signInWithEmailAndPassword(auth, correo, contra);
      }
    }
  
    
   
  
    return (

      // El container nos contendra el front-end con el formulario respectivo
      // para agregar las variables de usuario y contraseña o la autentificacion con correo o gooogle
       <Container>
           <Stack gap={3}>

<h1>{Registrandose 
? "Regístrate"
: "Inicia sesión"}</h1>
           <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="dark" type="submit">
    {Registrandose 
    ? "Regístrate"
    : "Inicia sesión"}
  </Button>
</Form>

{/* Hacemos uso de los servicios de google... */}
<Button variant="primary" 
type="submit" 
style={{width: "300px"}}
 onClick={() => signInWithRedirect(auth, googleProvider)} >
    Acceder con Google
  </Button>


   {/* Este boton cuenta con los diferentes estados por si tiene cuenta para que solo ingrese
   o si no tiene para que se registre */}
<Button style={{width: "300px"}} 
variant="secondary" 
onClick={()=> setRegistradose (!Registrandose)}>
   {Registrandose 
   ? "¿Ya tienes cuenta? Inicia Sesión" 
   : "¿No tienes cuenta? Registrate"}
  </Button>
           </Stack>
       </Container>
    );
};


export default Log
