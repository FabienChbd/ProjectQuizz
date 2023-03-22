const questionnaire = [
    {
        question: "Qui joue au jeu en ligne de manière active?",
        reponse: ["Alex", "Delphine", "Waheb", "D la réponse D"],
        correct: null
    },

    {
        question: "Qui est surnommé le dormeur ?",
        reponse: ["Cathy", "42", "Thomas D", "Nils"],
        correct: null
    },

    {
        question: "Qui est la personne qui nous fait le plus rire ?",
        reponse: ["Pierre Palmade", "Thomas V", "Laëtitia", "Fabien"],
        correct: null
    },

    {
        question: "Qui à vécu aux États Unis ?",
        reponse: ["Amaury", "Wilhem", "Nicolas", "Nils"],
        correct: null
    },

    {
        question: "Qui fait du sport pour décompresser ?",
        reponse: ["Julien", "Laëtitia", "Du sport ??? Connais pas", "Cathy"],
        correct: null
    },

    {
        question: "Qui pourrait être le deuxième formateur ?",
        reponse: ["Delphine", "Chat GPT", "Waheb", "Lorem ipsum dolor sit amet,…"],
        correct: null
    },

    {
        question: "Qui vient en train à la formation ?",
        reponse: ["Thomas D", "Nicolas", "Fabien", "Amaury"],
        correct: null
    },

    {
        question: "Qui a une voiture électrique ?",
        reponse: ["Waheb", "Julien", "Donald Trump", "Nils"],
        correct: null
    },

    {
        question: "Qui voit son prénom toujours écorché le Vendredi ?",
        reponse: ["Nicolas", "Cathy", "Waheb", "Lorem ipsum dolor sit amet,…"],
        correct: null
    },

    {
        question: "Qui s’est auto proclamé master du barbecue ?",
        reponse: ["Laëtitia", "Greta Thunberg", "Thomas D", "Amaury"],
        correct: null
    },

    {
        question: "Qui à des bugs réguliers sur son PC, sauf quand elle devrait en avoir ??",
        reponse: ["Cathy", "C’est techniquement impossible", "Wilhem", "Waheb"],
        correct: null
    },

    {
        question: "Qui à un fond d’écran meet avec un chien en danger ?",
        reponse: ["Brigitte Bardot", "Nicolas", "Thomas V", "Julien"],
        correct: null
    },

    {
        question: "Qui fait ces quêtes plus vite que son ombre ?",
        reponse: ["Nils", "Wilhem", "Lucky Luke", "Laëtitia"],
        correct: null
    },

    {
        question: "Qui est en mode relache le Vendredi ?",
        reponse: ["Cathy – Delphine – Fabien – Thomas V", "Alex – Thomas D – Wilhem – Julien – Nicolas", "Nils – Amaury – Laëticia – Waheb", "Réponse A – Réponse B – Réponse C et donc Réponse D"],
        correct: null
    },

    {
        question: "SOS !!!",
        reponse: ["Nicolas Wormser", "Nicolas Wormser", "Nicolas Wormser", "Nicolas Wormser"],
        correct: null
    },
]

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


console.log(questionnaire[0].correct)
console.log(questionnaire[1].correct)
console.log(questionnaire[2].correct)
console.log(questionnaire[3].correct)
console.log(questionnaire[4].correct)
console.log(questionnaire[5].correct)
console.log(questionnaire[6].correct)
console.log(questionnaire[7].correct)
console.log(questionnaire[8].correct)
console.log(questionnaire[9].correct)
console.log(questionnaire[10].correct)
console.log(questionnaire[11].correct)
console.log(questionnaire[12].correct)
console.log(questionnaire[13].correct)
console.log(questionnaire[14].correct)
