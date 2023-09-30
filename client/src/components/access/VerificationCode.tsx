/* CSS */
import styles from "./Verification.module.css";

/* COMPONENTS */
import Navbar from "../other/Navbar";

const VerificationCode = ({canAccess}: any) => {
  return (
    <div>
      {canAccess === true && (
        <>
          <header>
            <Navbar />
          </header>
          <main>
            <div id="verification">
              <h1>Verifique o código que veio para o seu e-mail</h1>
              <input type="text" className={styles.code} id="code-1" />
              <input type="text" className={styles.code} id="code-2" />
              <input type="text" className={styles.code} id="code-3" />
              <input type="text" className={styles.code} id="code-4" />
              <input type="text" className={styles.code} id="code-5" />
              <input type="text" className={styles.code} id="code-6" />
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default VerificationCode;
