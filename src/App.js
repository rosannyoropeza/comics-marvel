import React, { useState } from "react";
import Routes from "./router/Routes";
import firebaseApp from "./firebase/Config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const [userGlobal, setUserGlobal] = useState(false);
  let objUser = {};

    onAuthStateChanged(auth, (userFirebase) => {
      //CODIGO EN CASO QUE HAYA SESION INICIADA
      if (userFirebase) {
        setUserGlobal(userFirebase);
        
        //OBTENIENDO LOS DATOS DEL USUARIO CUANDO SEA REGISTRADO CON EMAIL & PASSWORD
        objUser = {
          name: userFirebase.displayName,
          email: userFirebase.email,
          photo: userFirebase.photoURL,
          uid: userFirebase.uid
        }

        //OBTENIENDO LOS DATOS DEL USUARIO CUANDO SEA REGISTRADO CON UN PROVEEDOR
        userFirebase.providerData.forEach((profile) => {
          objUser = {
            name: profile.displayName,
            email: profile.email,
            photo: profile.photoURL,
            uid: profile.uid
          }
        });

        localStorage.setItem("user", JSON.stringify(objUser));
      }
      //CODIGO EN CASO QUE NO HAYA SESION INICIADA
      else {
        setUserGlobal(null);
      }

    });

  return (
    <div className="App">
      <Routes userGlobal={userGlobal} />
    </div>
  );
}

export default App;
