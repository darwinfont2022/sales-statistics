import { async } from "@firebase/util";
import { collection } from "firebase/firestore";
import { FireStoreDb } from '../config/firebaseConfig'

export const salesRef = collection(FireStoreDb, 'sales')