import React, {useState,useEffect} from 'react'

import app from '../Credenciales'
import {getAuth, signOut} from "firebase/auth"
import {getFirestore,doc,getDoc, setDoc} from "firebase/firestore";

import { Button, Container } from 'react-bootstrap';

import AddPais from './AddPais';
import ListadoPais from './ListadoPais';

const auth= getAuth(app);
const firestore= getFirestore(app);

const Home = ({correoUser}) => {

const [arrayPais, setArrayPais]= useState(null);
    const fakeData=[
        {id:1, pais:"Honduras"},
        {id:2, pais:"Holanda"},
        {id:3, pais:"Croacia"}
];

async function BuscarDocorCreateDoc(IdDoc){
    //Crea referencia al documento
const docuref=doc(firestore, `Paises/${IdDoc}`);

//buscar Documento
const consult= await getDoc(docuref);
    // Si existe
if(consult.exists()){
 // si, si existe
const infoDocu=consult.data(); 
return infoDocu.paises;

}else{
    // sino existe
await setDoc(docuref, {paises:[...fakeData]});
const consult= await getDoc(docuref);
const infoDocu=consult.data();
return infoDocu.paises;
    }
    
}

useEffect(()=>{

    async function fetchPais(){
 const paisfecheada= await BuscarDocorCreateDoc(correoUser);
 setArrayPais(paisfecheada);
    }
   fetchPais();
}, ); //iba []

    return (
    <Container>
        <h4>
             Sesión Iniciada...
        </h4>
        <Button onClick={()=> signOut(auth)}>Cerrar Sesión</Button>
        <hr/>
        <AddPais
         arrayPais={arrayPais}
         setArrayPais={setArrayPais}
         correoUser={correoUser}
        />
        <hr/>
        {arrayPais ?(
         <ListadoPais 
         arrayPais={arrayPais}
         setArrayPais={setArrayPais}
         correoUser={correoUser}
         />
         ) : null}
    
    </Container>
    );
};

export default Home
