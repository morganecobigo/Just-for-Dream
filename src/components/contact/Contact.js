import React from "react";
import "./contact.css";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Formulaire soumis !");
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="form-image-wrapper">
        <div className="form-container">
          <h1>Contactez-moi</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" placeholder="Votre nom" />

            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Votre prénom"
            />

            <label htmlFor="type">Vous êtes</label>
            <select id="type" name="type">
              <option value="particulier">Particulier</option>
              <option value="professionnel">Professionnel</option>
            </select>

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre e-mail"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
            ></textarea>

            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
