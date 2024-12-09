import "../App.css";
import React, { useEffect, useState } from "react";

function Nouv() {
  const [file, setFile] = useState(null); // État pour stocker le fichier 
  const [isLoading, setIsLoading] = useState(false); // État pour le loader
  const [message, setMessage] = useState(""); // Message pour l'état du téléchargement

  // Gérer la sélection du fichier
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  // Gérer l'envoi du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Veuillez sélectionner un fichier avant d'envoyer.");
      return;
    }

    const formData = new FormData();
    formData.append("csvData", file); // Ajouter le fichier au FormData

    try {
      setIsLoading(true);
      setMessage("Envoi en cours...");
      console.log(formData);
      // Envoyer le fichier à l'API
      const response = await fetch(
        ` ${import.meta.env.VITE_APP_API_ADRESSE}api/donnee/`, // Remplacez par votre endpoint API
        {
          method: "POST",
          body: formData, // Le FormData contient le fichier
        }
      );
      if (response.status != 200) {
        throw new Error("Erreur de téléchargement");
      }

      const data = await response.json();

      // Traiter la réponse de l'API
      setMessage(`Fichier téléchargé avec succès`);
    } catch (error) {
      console.error("Erreur lors du téléchargement du fichier", error);
      setMessage("Erreur lors du téléchargement du fichier.");
    }finally {
      setIsLoading(false); // Désactiver le loader
  }
  };

  return (
    <>
      <div className="global_n">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
        <form onSubmit={handleSubmit} method="post">
          <input
            type="file"
            name="csvData"
            className="input_n"
            accept=".csv"
            onChange={handleFileChange}
          ></input>
          <button className="submitButton" type="submit">Envoyer</button>
        </form> 
      )}
        {message && <p>{message}</p>}
        
        
      </div>
    </>
  );
}

export default Nouv;
