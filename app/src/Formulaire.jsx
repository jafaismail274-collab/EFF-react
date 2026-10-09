import { useState } from "react";
import expertsData from "./data.js";
function Formulaire() {
  const [theme, setTheme] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [cout, setCout] = useState("");
  const [expertNom, setExpertNom] = useState("");
  const [resultat, setResultat] = useState("");

  function confirmer(e) {
    e.preventDefault();

    if (!theme || !dateDebut || !dateFin || !cout || !expertNom) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);

    if (fin < debut) {
      alert("La date de fin doit être après la date de début.");
      return;
    }

    const duree =
      Math.round((fin - debut) / (1000 * 60 * 60 * 24));

    const expert = expertsData.find(
      (ex) => ex.nom === expertNom
    );

    const coutTotal = Number(cout) * duree;

    setResultat(
      `${expert.nom} assurera le thème : ${theme}, avec un coût journalier de : ${cout} DH, pour une durée de : ${duree} jours, soit un coût total de : ${coutTotal} DH.`
    );
  }

  return (
    <div>
      <h2>Formulaire de l'événement</h2>

      <form onSubmit={confirmer}>
        <div>
          <label>Thème : </label>
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>

        <div>
          <label>Date de début : </label>
          <input
            type="date"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
          />
        </div>

        <div>
          <label>Date de fin : </label>
          <input
            type="date"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
          />
        </div>

        <div>
          <label>Coût journalier : </label>
          <input
            type="number"
            min="0"
            value={cout}
            onChange={(e) => setCout(e.target.value)}
          />
        </div>

        <div>
          <label>Expert : </label>
          <select
            value={expertNom}
            onChange={(e) => setExpertNom(e.target.value)}
          >
            <option value="">-- Choisir un expert --</option>

            {expertsData.map((expert, index) => (
              <option key={index} value={expert.nom}>
                {expert.nom}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Confirmer</button>
      </form>

      {resultat && <p>{resultat}</p>}
    </div>
  );
}

export default Formulaire;