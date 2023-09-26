/* CSS */
import styles from "./ComputerGamer.module.css";

/* Icons */
import { FaComputer, FaComputerMouse } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { BsMotherboard, BsHeadset } from "react-icons/bs";

const ComputerGamer = () => {
  return (
    <div className="container-computer">
      <div className={styles.categories}>
        <div className={styles.category}>
          <h3>
            <div className={styles.icon}>
                <FaComputer />
            </div>
            Computadores prontos
          </h3>
        </div>
        <div className={styles.category}>
          <h3>
            <div className={styles.icon}>
                <FaComputerMouse />
            </div>
            Periféricos
          </h3>
        </div>
        <div className={styles.category}>
          <h3>
            <div className={styles.icon}>
                <FiMonitor />
            </div>
            Monitores
          </h3>
        </div>
        <div className={styles.category}>
          <h3>
            <div className={styles.icon}>
                <BsMotherboard />
            </div>
            Componentes
          </h3>
        </div>
        <div className={styles.category}>
          <h3>
            <div className={styles.icon}>
                <BsHeadset />
            </div>
            Áudio
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ComputerGamer;
