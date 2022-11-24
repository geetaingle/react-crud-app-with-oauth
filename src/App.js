import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import { useEffect, useState } from "react";
import app from "./Firebase/firebase";
import { getAuth } from "firebase/auth";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => (user ? setUser(user) : setUser(null)));
  }, []);

  const auth = getAuth(app);

  if (user) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
