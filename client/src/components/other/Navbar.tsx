/* CSS */
import styles from "./Navbar.module.css";

/* Imports */
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to={"/"}>
          <h1>
            <span id={styles.wordEletro}>Eletro</span>
            <span id={styles.wordShop}>Shop</span>
          </h1>
        </Link>
        <div className={styles.menuHamburger}>
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                const itens = document.querySelectorAll("." + styles.menuItens);
                const btnAcess = document.querySelectorAll("#" + styles.access);
                for (let i = 0; i < itens.length; i++) {
                  itens[i].classList.toggle(styles.hide);
                }

                for (let i = 0; i < btnAcess.length; i++) {
                  btnAcess[i].classList.toggle(styles.hide);
                }
              } else {
                const itens = document.querySelectorAll("." + styles.menuItens);
                const btnAcess = document.querySelectorAll("#" + styles.access);
                for (let i = 0; i < itens.length; i++) {
                  itens[i].classList.toggle(styles.hide);
                }

                for (let i = 0; i < btnAcess.length; i++) {
                  btnAcess[i].classList.toggle(styles.hide);
                }
              }
            }}
          />
        </div>
        <input
          type="text"
          name="search"
          placeholder="O que gostaria de comprar?"
        />

        <Link to={"/logar"}>
          <button id={styles.access} className={styles.hide}>
            <i className="fa fa-user" aria-hidden="true"></i> Acessar
          </button>
        </Link>
      </ul>
      <ul>
        <li className={`${styles.menuItens} ${styles.hide}`}>Celulares</li>
        <li className={`${styles.menuItens} ${styles.hide}`}>Computadores</li>
        <li className={`${styles.menuItens} ${styles.hide}`}>Periféricos</li>
        <li className={`${styles.menuItens} ${styles.hide}`}>Monitores</li>
        <li className={`${styles.menuItens} ${styles.hide}`}>Outros</li>
      </ul>
    </nav>
  );
};

export default Navbar;
