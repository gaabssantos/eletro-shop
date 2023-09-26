// CSS
import styles from "./Offers.module.css";

/* Imports */
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";

/* JSON */
const url = "http://localhost:3000/itens";

/* Components */

const Offers = () => {
  /* States */
  const [products, setProducts] = useState<Array<any>>([]);

  /* Effect */
  useEffect(() => {
    async function getData() {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProducts(data);
        });
    }

    getData();
  });

  const handleArrow = () => {
    document.querySelectorAll("." + styles.content).forEach((content) => {
      content.classList.toggle(styles.hideContent);
      content.classList.add(styles.contentSwap);
    });
  };

  return (
    <div>
      <div className={styles.offers}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`${styles.content} ${product.hide ? styles.hideContent : ""}`}
          >
            <div id={styles.imageContainer}>
              <img
                className="offers-image"
                src={product.image}
                id={product.id}
                height={300}
                alt={product.name}
              />
            </div>
            <p>{product.name}</p>
            <div className={styles.price}>
              <h3>R$ {product.price_pix}</h3>
              <small>no PIX ou boleto</small> <br />
              <small>
                ou <strong>R$ {product.price_original}</strong> até 10x de R${" "}
                {product.price_divisor}
              </small>
            </div>
          </div>
        ))}
        <div className="arrow-control">
          <button className={styles.arrow} id={styles.arrowLeft} onClick={handleArrow}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button className={styles.arrow} id={styles.arrowRight} onClick={handleArrow}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
