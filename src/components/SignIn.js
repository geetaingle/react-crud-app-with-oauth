import { Button } from "antd";
import app from "../Firebase/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

function SignIn(props) {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const signInWithGoogle = async () => {
    try {
      var provider = new GoogleAuthProvider();
      let res = await signInWithPopup(auth, provider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {console.log(props.user)}
      <Button onClick={signInWithGoogle}>Sign-in with Google</Button>
    </>
  );
}

export default SignIn;
