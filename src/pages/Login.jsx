import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNAv from "../components/PageNAv";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
  const { login,isAuthenticated}=useAuth()
  // PRE-FILL FOR DEV PURPOSES
  const navigate=useNavigate()
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  useEffect(()=>{
    if(isAuthenticated){
      navigate('/layout',{replace:true})
    }
  },[isAuthenticated,navigate])
  function handelLogin(e){
  e.preventDefault();
  if(email && password) login(email,password)
 }

  return (
    <main className={styles.login}>
      <PageNAv />
      <form className={styles.form} onSubmit={handelLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" >Login</Button>
        </div>
      </form>
    </main>
  );
}
