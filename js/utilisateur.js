class Utilisateur {
    constructor(name, status, contributions = []) {
        this.id = Utilisateur.generateId(); // Génération automatique d'un ID à 4 chiffres
        this.name = name;
        this.status = status;
        this.contributions = contributions; // Tableau de contributions
        this.state = this.calculateState(); // Calcul de l'état à la création
    }

    // Méthode statique pour générer un ID à 4 chiffres
    static generateId() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    // Méthode pour calculer l'état en fonction de la somme des contributions
    calculateState() {
        const totalContributions = this.contributions.reduce((sum, value) => sum + value, 0);
        return totalContributions >= 5000 ? "Éligible" : "Non éligible";
    }

    // Méthode pour ajouter une contribution et mettre à jour l'état
    addContribution(contribution) {
        this.contributions.push(contribution);
        this.state = this.calculateState(); // Recalculer l'état après l'ajout
    }

    // Méthode pour afficher les informations
    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Nom: ${this.name}`);
        console.log(`Statut: ${this.status}`);
        console.log(`État: ${this.state}`);
        console.log(`Contributions: ${this.contributions.join(', ')}`);
    }
}


// Fonction pour afficher les utilisateurs dans le HTML
function displayUsers(users) {
    const userList = document.querySelector(".container-tab");

    // Créer un tableau HTML
    let table = `
        <h2>Tableau de contribuants <small>Horizon 2025</small></h2>
        <ul class="responsive-table">
            <li class="table-header">
                <div class="col col-1">ID</div>
                <div class="col col-2">Nom</div>
                <div class="col col-3">Etat</div>
                <div class="col col-4">Status</div>
            </li>
    `;

    // Ajouter chaque utilisateur au tableau
    users.forEach(user => {
        table += `
            <li class="table-row">
                <div class="col col-1">#${user.id}</div>
                <div class="col col-2">${user.name}</div>
                <div class="col col-3">${user.status}</div>
                <div class="col col-4">${user.state}</div>
            </li>
                         
                        
        `;
    });

    table += `</ul></tbody></table>`;
    userList.innerHTML = table;
}


//Liste des utilisateurs
const users = [];

users.push(new Utilisateur("Bérénice","Membre", [1000,4000]));
users.push(new Utilisateur("Dan","Membre", [2500,2500,3000]));
users.push(new Utilisateur("Andy","Membre", [5000]));
users.push(new Utilisateur("Lionnel","Membre", [5000]));
users.push(new Utilisateur("Miradi","Membre", [1000,3000,1000]));
users.push(new Utilisateur("Monsieur Guens","Membre", [5000]));
users.push(new Utilisateur("Eli","Membre", [5000]));
users.push(new Utilisateur("Gigie","Membre", [5000]));
users.push(new Utilisateur("Johnson","Membre", [5000]));
users.push(new Utilisateur("Eric","Invité", [3000,2000]));


// Appeler la fonction pour afficher les utilisateurs
displayUsers(users);

