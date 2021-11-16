import React, {useState} from "react";  //Useeffect
import Home from "./Components/Home";
import Log from "./Components/Log";

import app from "./Credenciales";
import {getAuth, onAuthStateChanged} from "firebase/auth";
const auth= getAuth(app);

function App() {
const [usuarioGlobal, setUsuarioGlobal]= useState(null);

onAuthStateChanged(auth, (userFire) =>{
if(userFire){
  setUsuarioGlobal(userFire);
}else{
  setUsuarioGlobal(null);
}

});


  return<>{usuarioGlobal ? <Home correoUser={usuarioGlobal.email} />: <Log/>}</>;
 
}

export default App;
