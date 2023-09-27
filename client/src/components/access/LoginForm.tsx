/* CSS */
import styles from "./LoginForm.module.css";

/* IMPORTS */
import { Link } from "react-router-dom";

/* ICON */
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const LoginForm = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <h1>Entre com sua conta</h1>
        <form action="" method="post">
          <div className={styles.formControl}>
            <input type="text" name="email" placeholder="Digite seu e-mail" />
          </div>
          <div className={styles.formControl}>
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div className={styles.formControl}>
            <button>Entrar</button>
            <p>
              <Link to={"/recuperar"}>Esqueceu a senha?</Link>
            </p>
          </div>
          <div id={styles.registerContainer}>
            <p>
              Não tem uma conta? Se <Link to={"/registrar"}>registre</Link>{" "}
              agora.
            </p>
          </div>
          <div className={styles.loginMethods}>
            <div id={styles.methodGoogle}>
              <FcGoogle /> Entre com o Google
            </div>
            <div id={styles.methodFacebook}>
              <BsFacebook /> Entre com o Facebook
            </div>
            <div id={styles.methodTwitter}>
              <BsTwitter /> Entre com o Twitter
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
