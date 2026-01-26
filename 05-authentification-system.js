const baseDeDonnees = [];

// Fonction pour créer un nouvel utilisateur
function signUp(nom, email, password, confirmPassword) {
  // Vérifier si l'email existe déjà
  if (baseDeDonnees.some(user => user.email === email)) {
    return "Erreur : cet email est déjà utilisé.";
  }

  // Vérifier si les mots de passe correspondent
  if (password !== confirmPassword) {
    return "Erreur : les mots de passe ne correspondent pas.";
  }

  // Créer un id unique
  const id = baseDeDonnees.length > 0 
    ? baseDeDonnees[baseDeDonnees.length - 1].id + 1 
    : 1;

  // Créer l'utilisateur
  const nouvelUtilisateur = {
    id: id,
    nom: nom,
    email: email,
    password: password,
    estConnecte: false,
    estBloque: false
  };

  // Ajouter à la base de données
  baseDeDonnees.push(nouvelUtilisateur);

  return nouvelUtilisateur;
}

// Fonction pour connecter un utilisateur
function login(email, password) {
  // Rechercher l'utilisateur
  const utilisateur = baseDeDonnees.find(user => user.email === email);

  if (!utilisateur) {
    return "Erreur : utilisateur non trouvé.";
  }

  if (utilisateur.password !== password) {
    return "Erreur : mot de passe incorrect.";
  }

  if (utilisateur.estBloque) {
    return "Erreur : utilisateur bloqué.";
  }

  // Mettre à jour le statut de connexion
  utilisateur.estConnecte = true;

  return utilisateur;
}

console.log(signUp("Paul", "paul@mail.com", "1234", "1234"));
console.log(login("paul@mail.com", "1234"));

module.exports = { baseDeDonnees, signUp, login };
