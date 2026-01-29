function showStudentBulletin(eleves) {
  // Vérifier que c'est bien un tableau
  if (!Array.isArray(eleves)) return [];

  // Parcourir chaque élève et créer son bulletin
  return eleves.map(eleve => {
    let moyenne = 0;
    let commentaire = "À revoir";

    if (Array.isArray(eleve.notes) && eleve.notes.length > 0) {
      // Calculer la moyenne
      let somme = eleve.notes.reduce((acc, note) => acc + note, 0);
      moyenne = parseFloat((somme / eleve.notes.length).toFixed(2));

      // Déterminer le commentaire
      if (moyenne >= 16) commentaire = "Excellent";
      else if (moyenne >= 14) commentaire = "Très Bien";
      else if (moyenne >= 12) commentaire = "Bien";
      else if (moyenne >= 10) commentaire = "Passable";
      else commentaire = "À revoir";
    }

    return {
      nom: eleve.nom,
      moyenne: moyenne,
      commentaire: commentaire
    };
  });
}

const eleves = [
  { nom: "Manassé Bonsomi", notes: [18, 18, 17] },
  { nom: "Kent Ngala", notes: [20, 14, 15] },
  { nom: "Sacré Mbiku", notes: [19, 18, 14] }
];

console.log(showStudentBulletin(eleves));

module.exports = {
  showStudentBulletin,
};
