function whoIsAdmin(utilisateurs) {
  // Vérifier que c'est bien un tableau
  if (!Array.isArray(utilisateurs)) return [];

  // Filtrer les utilisateurs qui sont admin et retourner leurs noms
  return utilisateurs
    .filter(user => user.estAdmin === true)
    .map(user => user.nom);
}

const users = [
  { nom: "Paul", age: 25, estAdmin: true },
  { nom: "Marie", age: 30, estAdmin: false },
  { nom: "Éric", age: 22, estAdmin: true }
];

console.log(whoIsAdmin(users));

// Ne pas modifier la ligne ci-dessous
module.exports = {
  whoIsAdmin,
};
