import "../styles/ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact" id="ContactMe">
      <h2 className="title-section">Contato</h2>
      <div className="contact-container container">
        <div className="container-form">
          <h3 className="destaque-text"> Entre em contato comigo </h3>
          <p className="paragraph">
            Caso queira saber mais sobre mim e meu trabalho, ou apenas me mandar
            uma mensagem, me mande um e-mail.
          </p>
          <form
            action="https://formsubmit.co/joao.viictorss31@gmail.com"
            method="post"
          >
            <div className="input-form">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Digite seu nome"
              />
            </div>
            <div className="input-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="input-form">
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                cols="110"
                rows="4"
                placeholder="Digite sua mensagem..."
              ></textarea>
            </div>
            <div className="btn-submit-container">
              <input type="submit" value="Enviar" className="btn-submit" />
            </div>
          </form>
        </div>

        <div className="social-container">
          <div className="contact-icons">
            <h3>Email</h3>
            <p>joao.viictorss31@gmail.com</p>
          </div>

          <div className="contact-icons">
            <h3>Localização</h3>
            <p>Cotia-SP, Brasil</p>
          </div>
          <div>
            <h3>Social</h3>

            <div className="social-icons">
              <a
                href="https://github.com/joaoviictorss"
                target="_blank"
                className="social-media"
              >
                <img src="./icons8-github1.svg" alt="Link github" />
              </a>
              <a
                href="https://www.linkedin.com/in/joao-viictor/"
                target="_blank"
                className="social-media"
              >
                <img src="./icons8-linkedin1.svg" alt="Link github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
