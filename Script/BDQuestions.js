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


//Implantation dans le HTML
for (let i=0;i<questionnaire.length;i++){
    const question = document.querySelector('.quest')
    question.innerText= questionnaire[i].question
    const reponse1 = document.querySelector('.R1')
    reponse1.innerText= questionnaire[i].reponse[0]
    const reponse2 = document.querySelector('.R2')
    reponse2.innerText= questionnaire[i].reponse[1]
    const reponse3 = document.querySelector('.R3')
    reponse3.innerText= questionnaire[i].reponse[2]
    const reponse4 = document.querySelector('.R4')
    reponse4.innerText= questionnaire[i].reponse[3]
    }


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
questionnaire[14].correct = (questionnaire[14].reponse[0]) || (questionnaire[14].reponse[1]) || (questionnaire[14].reponse[2]) || (questionnaire[14].reponse[3])



const reponsesQuestion = document.querySelectorAll(".R1, .R2, .R3, .R4"); // les class css
//Ensuite on veut récupérer le click sur une R1 ou R1 ou ... et le stocker dans une variable qui la comparera à la bonne réponse
reponsesQuestion.forEach(response => {
    response.addEventListener("click", function (event) {
        console.log(response.dataset.response) // data-response sur le <p>
        response.dataset.response = questionnaire[i].reponsesQuestion
    })
})
console.log(reponsesQuestion)
//questionnaire[i].reponsesQuestion = userReponse // pas reponsesQuestion.inner

//Réponses utlisateurs
// questionnaire[0].reponsesQuestion = 
// questionnaire[1].reponsesQuestion = 
// questionnaire[2].reponsesQuestion = 
// questionnaire[3].reponsesQuestion = 
// questionnaire[4].reponsesQuestion = 
// questionnaire[5].reponsesQuestion = 
// questionnaire[6].reponsesQuestion = 
// questionnaire[7].reponsesQuestion = 
// questionnaire[8].reponsesQuestion = 
// questionnaire[9].reponsesQuestion = 
// questionnaire[10].reponsesQuestion = 
// questionnaire[11].reponsesQuestion = 
// questionnaire[12].reponsesQuestion = 
// questionnaire[13].reponsesQuestion = 
// questionnaire[14].reponsesQuestion = 

//cont userAnswer = document.createElement("div");
//userAnswer.innertext =

// Faire une boucle avec addEventListener, qui lorsque l'on clique sur une des réponse :
// Stock le résultat dans une variable que l'on compare aux bonnes réponse


function comptageBeer(questionnaire) {
    let scoreBeer = 0;
    let scoreCookie = 0;
    for (let i = 0; i < questionnaire.length; i++) {

      if (i < questionnaire.length -1) {
        if (questionnaire[i].userReponse === questionnaire[i].correct) {
          scoreBeer++;
        }
      } else {
        if (questionnaire[i].userReponse === questionnaire[i].correct) {
          scoreCookie++;
        }
      }
      return scoreBeer
      return scoreCookie
    }
}
// export {scoreBeer, scoreCookie}

