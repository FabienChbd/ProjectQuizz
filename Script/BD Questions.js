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
questionnaire[14].correct = (questionnaire[14].reponse[0])||(questionnaire[14].reponse[1])||(questionnaire[14].reponse[2])||(questionnaire[14].reponse[3])

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


//Implantation dans le HTML
for (i=0;i<questionnaire.length;i++){
const question = document.querySelector('.question')
question.innerHTML= questionnaire[i].question
const reponse1 = document.querySelector('.reponse-1')
reponse1.innerHTML= questionnaire[i].reponse[0]
const reponse2 = document.querySelector('.reponse-2')
reponse2.innerHTML= questionnaire[i].reponse[1]
const reponse3 = document.querySelector('.reponse-3')
reponse3.innerHTML= questionnaire[i].reponse[2]
const reponse4 = document.querySelector('.reponse-4')
reponse4.innerHTML= questionnaire[i].reponse[3]
const validation = document.querySelector('.valider')
if (i=14){
    validation.innerHTML = "Prêt à rencontrer l'ours ?"
}
else {
    validation.innerHTML = "Sûr de votre réponse ?"
}}