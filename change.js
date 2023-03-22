const questionnaire = [
    {
        question: "Qui joue au jeu en ligne de manière active?",
        reponse: ["Alex", "Delphine", "Waheb", "D la réponse D"],
        correct: null,
    },

    {
        question: "Qui est surnommé le dormeur ?",
        reponse: ["Cathy", "42", "Thomas D", "Nils"],
        correct: null
    }
]

questionnaire[0].correct = questionnaire[0].reponse[0]
questionnaire[1].correct = questionnaire[1].reponse[2]

console.log(questionnaire[0].correct)
console.log(questionnaire[1].correct)