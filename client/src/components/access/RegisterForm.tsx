// (11) 993205-9928

/* CSS */
import styles from "./RegisterForm.module.css";

/* IMPORTS */
import {
  useState,
  useEffect,
  ChangeEvent,
  FocusEvent,
  MouseEvent,
} from "react";
import $ from "jquery";
import axios from "axios";

/* ICONS */
import { BiSolidErrorCircle } from "react-icons/bi";

const RegisterForm = () => {
  const [year, setYear] = useState<number>(0);
  const [passwordCorrect, setPasswordCorrect] = useState<boolean>(false);
  const [successForm, setSuccessForm] = useState<boolean>(false);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  const validDigits = (value: string) => {
    return value.replace(/[^0-9]/g, "");
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    const updatedValue = validDigits(e.target.value);

    e.target.value = updatedValue;

    if (parseInt(e.target.value) < 1) {
      e.target.value = "1";
    }

    if (parseInt(e.target.value) > 31 && type === "day") {
      e.target.value = "31";
    }

    if (parseInt(e.target.value) > 12 && type === "month") {
      e.target.value = "12";
    }

    if (parseInt(e.target.value) > year && type === "year") {
      e.target.value = year.toString();
    }
  };

  const handleDateChangeBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) < 10 && !e.target.value.includes("0")) {
      e.target.value = "0" + e.target.value;
    }
  };

  const handleCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      $("#password").val() != $("#repeat-password").val() &&
      $("#repeat-password").val()
    ) {
      $("#password").addClass(styles.error);
      $("#" + styles.passwordError).removeClass(styles.hide);
    } else {
      $("#password").removeClass(styles.error);
      $("#" + styles.passwordError).addClass(styles.hide);
    }

    if ($("#password").val()!.toString().length >= 3) {
      $("#character").removeClass(styles.errorRule);
      $("#character").addClass(styles.alrightRule);
    } else {
      $("#character").addClass(styles.errorRule);
      $("#character").removeClass(styles.alrightRule);
    }

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test($("#password").val()!.toString())) {
      $("#symbol").removeClass(styles.errorRule);
      $("#symbol").addClass(styles.alrightRule);
    } else {
      $("#symbol").addClass(styles.errorRule);
      $("#symbol").removeClass(styles.alrightRule);
    }

    const capitalLetters = /[A-Z]/;
    if (capitalLetters.test($("#password").val()!.toString())) {
      $("#capital-letter").removeClass(styles.errorRule);
      $("#capital-letter").addClass(styles.alrightRule);
    } else {
      $("#capital-letter").addClass(styles.errorRule);
      $("#capital-letter").removeClass(styles.alrightRule);
    }

    if ($("#password").val()!.toString().length > 0) {
      $("#password-rules").removeClass(styles.hide);
    } else {
      $("#password-rules").addClass(styles.hide);
    }

    if (
      $("#password").val()!.toString().length >= 3 &&
      specialChars.test($("#password").val()!.toString()) &&
      capitalLetters.test($("#password").val()!.toString())
    ) {
      setPasswordCorrect(true);
    }

    if (passwordCorrect) {
      $("#password-rules").addClass(styles.hide);
    }
  };

  const handleCheckPhone = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedValue = validDigits(e.target.value);
    e.target.value = updatedValue;
  };

  const handleMaskPhone = (e: FocusEvent<HTMLInputElement>) => {
    const phoneMask = /(^[0-9]{2})([0-9]{5})([0-9]{4})/;
    const result = e.target.value.match(phoneMask);

    if (result) {
      e.target.value = "(" + result[1] + ") " + result[2] + "-" + result[3];
    }
  };

  const handleClickRegister = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!passwordCorrect) {
      $("." + styles.emptyInput).removeClass(styles.hide);
    } else {
      $("." + styles.emptyInput).addClass(styles.hide);
    }

    if (
      $("#name").val() !== "" &&
      $("#lastname").val() !== "" &&
      $("#email").val() !== "" &&
      $("#phone").val() !== "" &&
      $("#address").val() !== "" &&
      $("#password").val() !== "" &&
      $("#day").val() !== "" &&
      $("#month").val() !== "" &&
      $("#year").val() !== ""
    ) {
      setSuccessForm(true);
    }

    if (passwordCorrect === true && successForm === true) {
      axios
        .post("http://localhost:8080/register", {
          name: $("#name").val(),
          lastname: $("#lastname").val(),
          email: $("#email").val(),
          phone: $("#phone").val(),
          address: $("#address").val(),
          password: $("#password").val(),
          day: $("#day").val(),
          month: $("#month").val(),
          year: $("#year").val(),
        })
        .then((response) => {
          console.log(response.headers);
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Registre sua conta</h1>
        <div className={`${styles.emptyInput} ${styles.hide}`}>
          <span>
            {!successForm
              ? "Preencha todos os campos."
              : !passwordCorrect
              ? "A senha não está segura."
              : ""}
          </span>
        </div>
        <form method="post" id="form-register">
          <div className={`${styles.formControl} ${styles.names}`}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Digite seu sobrenome"
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Digite seu telefone"
              onChange={handleCheckPhone}
              onBlur={handleMaskPhone}
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Digite seu endereço"
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              onBlur={handleCheckPassword}
              onChange={handleCheckPassword}
            />
            <div id={styles.passwordError} className={styles.hide}>
              <BiSolidErrorCircle />
              <span>Senhas não coinscidem.</span>
            </div>
            <div id="password-rules" className={styles.hide}>
              <ul id={styles.rules}>
                <li id="character" className={`${styles.errorRule}`}>
                  Três ou mais caracteres.
                </li>
                <li id="symbol" className={`${styles.errorRule}`}>
                  Pelo menos um símbolo especial.
                </li>
                <li id="capital-letter" className={`${styles.errorRule}`}>
                  Pelo menos uma letra maiúscula.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.formControl}>
            <input
              type="password"
              name="repeat-password"
              id="repeat-password"
              placeholder="Repita sua senha"
              onBlur={handleCheckPassword}
            />
          </div>
          <label htmlFor="birth">Data de Nascimento</label>
          <div className={`${styles.formControl} ${styles.birth}`}>
            <input
              type="text"
              id="day"
              name="day"
              onChange={(e) => handleDateChange(e, "day")}
              onBlur={handleDateChangeBlur}
              placeholder="Dia"
            />
            <input
              type="text"
              id="month"
              name="month"
              placeholder="Mês"
              onChange={(e) => handleDateChange(e, "month")}
              onBlur={handleDateChangeBlur}
            />
            <input
              type="text"
              id="year"
              name="year"
              placeholder="Ano"
              onChange={(e) => handleDateChange(e, "year")}
            />
          </div>
          <div className={styles.formControl}>
            <button onClick={handleClickRegister} id="btn-register">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
