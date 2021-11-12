import firebaseApp from "../firebase/Config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider, 
  signInWithRedirect
} from "firebase/auth";
import { getFirestore, getDocs,  collection, addDoc, query, where } from "firebase/firestore";


const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

//PARA REGISTRARSE CON FIREBASE
export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// //PARA ACCEDER CON EL PROVEEDOR DE GOOGLE
export const registerWithGoogle = () => {
  signInWithRedirect(auth, googleProvider);
};

//PARA LOGUEARSE CON FIREBASE
export const login = (email, password) => {
  const loginUser = signInWithEmailAndPassword(auth, email, password);
  return loginUser;
};
//ADD FAV A FIREBASE
export const addFavoriteFirebase = async(item) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const objComicFav = {
    name: item.name,
    image: item.image,
    email: user.email
  }
  await addDoc(collection(firestore,"favorites"), objComicFav);  
}

//OBTENER LOS FAVORITOS DE FIREBASE
export const getFavoritesFirebase =  async () => {
  const dataFavs = [];
  const user = JSON.parse(localStorage.getItem('user'));
  const favsByUser = query(collection(firestore, "favorites"), where("email", "==", user.email));
  const querySnapshot = await getDocs(favsByUser);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let fav = {
      id: doc.id,
      ...doc.data()
    }
    dataFavs.push(fav);
  });
  return dataFavs;
}


export const logout = () =>{
   signOut(auth);
   localStorage.clear()
}