const db = [
    {
        id: 1, 
        name : 'Bérénice', 
        Contribution : [1000]
    },
    
]

let mylist = document.querySelector(".database");

// Fonction pour afficher le nom et la somme des contributions
db.forEach(person => {
    const totalContribution = person.Contribution.reduce((acc, curr) => acc + curr, 0);
    let name = document.createElement('h4');
    name.innerText = person.name;
    name.style.color = "gray"
    let contribution = document.createElement('p')
    contribution.innerHTML = totalContribution;

    if(totalContribution < 5000){
        contribution.innerHTML = '<emb>En cours...</emb>';
        contribution.style.color = "red";
    }else{
        contribution.innerHTML = '<emb>Terminé</emb>';
        contribution.style.color = "green";
    }

    mylist.appendChild(name);
    mylist.appendChild(contribution) 
    mylist.appendChild(document.createElement('hr'))
    console.log(`${person.name}: ${totalContribution}`);
});

