//Base de données questions

const questionnaire = [
    {
        question: "Qui joue au jeu en ligne de manière active?",
        reponse: ["Alex", "Delphine", "Waheb", "Avec un accent québécois : D la réponse D"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui est surnommé le dormeur ?",
        reponse: ["Cathy", "42", "François le Francais", "Nils"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui est la personne qui nous fait le plus rire ?",
        reponse: ["Pierre Palmade", "Thomas V", "Laëtitia", "Fabien"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui à vécu aux États Unis ?",
        reponse: ["Amaury", "Wilhem", "Nicolas", "Nils"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui fait du sport pour décompresser ?",
        reponse: ["Julien", "Laëtitia", "Du sport ??? Connais pas", "Cathy"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui pourrait être le deuxième formateur ?",
        reponse: ["Delphine", "Chat GPT", "Waheb", "Thomas V"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui vient en train à la formation ?",
        reponse: ["Thomas D", "Nicolas", "Fabien", "49-3"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui a une voiture électrique ?",
        reponse: ["Waheb", "Julien", "Donald Trump", "Nils"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui voit son prénom toujours écorché le Vendredi ?",
        reponse: ["Nicolas", "Cathy", "Waheb", "Lorem ipsum dolor sit amet,…"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui s’est auto proclamé master du barbecue ?",
        reponse: ["Laëtitia", "Greta Thunberg", "Thomas D", "Amaury"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui à des bugs réguliers sur son PC, sauf quand elle devrait en avoir ??",
        reponse: ["Cathy", "C’est techniquement impossible", "Wilhem", "Waheb"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui à un fond d’écran meet avec un chien en danger ?",
        reponse: ["Brigitte Bardot", "Nicolas", "Thomas V", "Julien"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui fait ces quêtes plus vite que son ombre ?",
        reponse: ["Nils", "Wilhem", "Lucky Luke", "Laëtitia"],
        correct: null,
        userReponse: null
    },

    {
        question: "Qui est en mode relâche le Vendredi ?",
        reponse: ["Cathy – Delphine – Fabien – Thomas V", "Alex – Thomas D – Wilhem – Julien – Nicolas", "Nils – Amaury – Laëticia – Waheb", "Réponse A – Réponse B – Réponse C et donc Réponse D"],
        correct: null,
        userReponse: null
    },

    {
        question: "SOS !!!",
        reponse: ["Nicolas Wormser", "Nicolas Wormser", "Nicolas Wormser", "Nicolas Wormser"],
        correct: null,
        userReponse: null
    },
]

//Bonnes réponses
// for (let j = 0; j < question.reponse.length; j++) {}
//         const reponse = question.reponse[j];
questionnaire[0].correct = questionnaire[0].reponse[0]
questionnaire[1].correct = questionnaire[1].reponse[2]
questionnaire[2].correct = questionnaire[2].reponse[1]
questionnaire[3].correct = questionnaire[3].reponse[3]
questionnaire[4].correct = questionnaire[4].reponse[1]
questionnaire[5].correct = questionnaire[5].reponse[0]
questionnaire[6].correct = questionnaire[6].reponse[2]
questionnaire[7].correct = questionnaire[7].reponse[1]
questionnaire[8].correct = questionnaire[8].reponse[2]
questionnaire[9].correct = questionnaire[9].reponse[3]
questionnaire[10].correct = questionnaire[10].reponse[0]
questionnaire[11].correct = questionnaire[11].reponse[1]
questionnaire[12].correct = questionnaire[12].reponse[1]
questionnaire[13].correct = questionnaire[13].reponse[3]
questionnaire[14].correct = (questionnaire[14].reponse[0]) || (questionnaire[14].reponse[1]) || (questionnaire[14].reponse[2]) || (questionnaire[14].reponse[3])

//Réponses utlisateurs
// questionnaire[0].userReponse = 
// questionnaire[1].userReponse = 
// questionnaire[2].userReponse = 
// questionnaire[3].userReponse = 
// questionnaire[4].userReponse = 
// questionnaire[5].userReponse = 
// questionnaire[6].userReponse = 
// questionnaire[7].userReponse = 
// questionnaire[8].userReponse = 
// questionnaire[9].userReponse = 
// questionnaire[10].userReponse = 
// questionnaire[11].userReponse = 
// questionnaire[12].userReponse = 
// questionnaire[13].userReponse = 
// questionnaire[14].userReponse = 

// const userAnswer = document.createElement("div");


//Implantation dans le HTML

for (let i = 0; i < questionnaire.length; i++) {
    const question = document.querySelector('.quest')
    question.innerText = questionnaire[i].question
    const reponse1 = document.querySelector('.R1')
    reponse1.innerText = questionnaire[i].reponse[0]
    const reponse2 = document.querySelector('.R2')
    reponse2.innerText = questionnaire[i].reponse[1]
    const reponse3 = document.querySelector('.R3')
    reponse3.innerText = questionnaire[i].reponse[2]
    const reponse4 = document.querySelector('.R4')
    reponse4.innerText = questionnaire[i].reponse[3]
}






// const questionnaireDiv = document.getElementById("questions");

// for (let i = 0; i < questionnaire.length; i++) {
//     const question = questionnaire[i];

//     // Créer un élément de question contenant le texte de la question
//     const questionDiv = document.createElement("div");
//     questionDiv.textContent = question.question;

//     // Ajouter un attribut data-index avec la valeur de l'index de la question
//     questionDiv.setAttribute("data-index", i);

//     // Ajouter l'élément de question au conteneur de questions
//     questionnaireDiv.appendChild(questionDiv);

//     // Boucle à travers les réponses et créer un élément de réponse pour chacune
//     for (let j = 0; j < question.reponse.length; j++) {
//         const reponse = question.reponse[j];

//         // Créer un élément de réponse contenant le texte de la réponse
//         const reponseDiv = document.createElement("div");
//         reponseDiv.textContent = reponse;

//         // Ajouter un attribut data-index avec la valeur de l'index de la question et de la réponse
//         reponseDiv.setAttribute("data-index", i + "-" + j);

//         // Ajouter un gestionnaire d'événement de clic pour stocker la réponse choisie par l'utilisateur
//         reponseDiv.addEventListener("click", function() {
//             question.userReponse = j;
//         });

//         // Ajouter l'élément de réponse au conteneur de questions
//         questionsDiv.appendChild(reponseDiv);
//     }
// }

//pour le bouton valider



const validateButton = document.getElementsByClassName("valider");
validateButton.addEventListener("click",)




//pour le score 

const score = 0
const updatedScore = Number

//pour comparer la reponse d'user a la bonne


function userScoreUpdate() {
    const isCorrect = userReponse === questionnaire.correct
    if (isCorrect) {
        score++
    }
}
for (let j = 0; j < questionnaire.length; j++) { userScoreUpdate() }


//pour afficher le score final sur la page endQuizz
const userScore = document.getElementsByClassName("userScore")
userScore.innerText = updatedScore




//const endQuizz{}
//button restart => link to welcome page
