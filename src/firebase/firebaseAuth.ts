import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
