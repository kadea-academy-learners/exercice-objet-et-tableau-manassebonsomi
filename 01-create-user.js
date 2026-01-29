function createUser(nom, age, estConnecte) {
    return {
        nom: nom,
        age: age,
        estConnecte: estConnecte
    };
}

const utilisateur = createUser("Manassé Bonsomi", 25, true);
console.log(utilisateur); 

module.exports = {
    createUser,
};
