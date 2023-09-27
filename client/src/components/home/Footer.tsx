import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>@ 2023 EletroShop – Todos os direitos reservados.</p>
      <div className={styles.paymentMethods}>
        <h3>métodos de pagamentos</h3>
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-1.png" alt="Boleto" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-2.png" alt="Cartão de Crédito" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-3.png" alt="Elo" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-4.png" alt="American Express" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-5.png" alt="JCB" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-6.png" alt="" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-7.png" alt="HiperCard" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-8.png" alt="MasterCard" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-9.png" alt="Visa" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/meio-pgto-10.png" alt="Pix" />
      </div>
      <div className={styles.security}>
        <h3>segurança</h3>
        <img width={40} src="https://secure.convertize.com.br/static/media/pci-shield.svg" alt="PCI" />
        <img width={55} src="https://lojasmel1.vtexassets.com/arquivos/reclame-aqui.png" alt="Reclame Aqui" />
        <img src="https://lojasmel1.vtexassets.com/arquivos/norton.png" alt="Norton" />
      </div>
    </div>
  );
};

export default Footer;
