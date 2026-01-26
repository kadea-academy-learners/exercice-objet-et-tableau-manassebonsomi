// Exemple de tableau de notes
let notes = [12, 8, 15, 9, 11];

function averageNote(notes) {
  // Vérifier que notes est un tableau avec au moins un élément
  if (!Array.isArray(notes) || notes.length === 0) return "Échoué";

  // Calculer la somme des notes
  let somme = 0;
  for (let note of notes) {
    // Vérifier que chaque note est un nombre
    if (typeof note !== 'number' || isNaN(note)) return "Échoué";
    somme += note;
  }

  // Calculer la moyenne
  let moyenne = somme / notes.length;

  // Retourner le message selon la moyenne
  return moyenne >= 10 ? "Réussi" : "Échoué";
}

console.log(averageNote([12, 8, 15, 9, 11])); // "Réussi"
console.log(averageNote([5, 7, 9, 8, 6]));    // "Échoué"
console.log(averageNote([]));                 // "Échoué"

// Ne pas modifier la ligne ci-dessous
module.exports = {
  averageNote,
};
