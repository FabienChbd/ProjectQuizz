//Base de données questions
const questionnaire = [
    {
        question: "Qui joue aux jeux en ligne de manière active?",
        reponse: ["Alex", "Delphine", "Waheb", "Avec un accent québécois : D la réponse D"],
        correct: null
    },

    {
        question: "Qui est surnommé le dormeur ?",
        reponse: ["Cathy", "42", "Thomas D", "Nills"],
        correct: null
    },

    {
        question: "Qui est la personne qui nous fait le plus rire ?",
        reponse: ["Pierre Palmade", "Thomas V", "Laëtitia", "Fabien"],
        correct: null
    },

    {
        question: "Qui a vécu aux États Unis ?",
        reponse: ["Amaury", "Wilhem", "Francois le Francais", "Nills"],
        correct: null
    },

    {
        question: "Qui fait du sport pour décompresser ?",
        reponse: ["Julien", "Laëtitia", "Du sport ??? Connais pas", "Cathy"],
        correct: null
    },

    {
        question: "Qui pourrait être le deuxième formateur ?",
        reponse: ["Delphine", "Chat GPT", "Waheb", "Thomas V"],
        correct: null
    },

    {
        question: "Qui vient en train à la formation ?",
        reponse: ["Thomas D", "Nicolas", "Fabien", "49-3"],
        correct: null
    },

    {
        question: "Qui a une voiture électrique ?",
        reponse: ["Waheb", "Julien", "Donald Trump", "Nills"],
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
        question: "Qui a des bugs réguliers sur son PC, sauf quand elle devrait en avoir ??",
        reponse: ["Cathy", "C’est techniquement impossible", "Wilhem", "Waheb"],
        correct: null
    },

    {
        question: "Qui a un fond d’écran meet avec un chien en danger ?",
        reponse: ["Brigitte Bardot", "Nicolas", "Thomas V", "Julien"],
        correct: null
    },

    {
        question: "Qui fait ses quêtes plus vite que son ombre ?",
        reponse: ["Nills", "Wilhem", "Lucky Luke", "Laëtitia"],
        correct: null
    },

    {
        question: "Qui est en mode relâche le Vendredi ?",
        reponse: ["Cathy – Delphine – Fabien – Thomas V", "Alex – Thomas D – Wilhem – Julien – Nicolas", "Nills – Amaury – Laëticia – Waheb", "Réponse A – Réponse B – Réponse C et donc Réponse D"],
        correct: null
    },

    {
        question: "SOS !!!",
        reponse: ["Nicolas Wormser", "Nicolas Wormser", "Nicolas Wormser", "Nicolas Wormser"],
        correct: null
    },
]

let scoreBeer = 0; //initialisation score


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

const startQuestion = document.querySelector(".go > button")
startQuestion.addEventListener("click", quizz)
let index = 0

//Implantation dans le HTML
function quizz(event) {
    let index = event.target.dataset.index
    console.log(event.target)
    const question = document.querySelector('.quest')
    question.textContent= questionnaire[index].question

    const reponses = document.querySelectorAll('.reponse')
   reponses.forEach((r, i) => {
      r.textContent= questionnaire[index].reponse[i]
      r.dataset.correct = questionnaire[index].correct === questionnaire[index].reponse[i]
      console.log(questionnaire[index].reponse[i])}
    )
}

// Enregistrement réponse user
const reponsesQuestion = document.querySelectorAll(".reponse")
reponsesQuestion.forEach(response => {
    response.addEventListener("click", function (event) {
        checkAnswer(response)
            // Passage question suivante quizz (Q1-->Q15)
    const nextQuestion = document.querySelector(".buttonNext > button")
    console.log(nextQuestion)
    nextQuestion.addEventListener("click",quizz)
    index++
    nextQuestion.dataset.index = index
    console.log("nextQuestion:", nextQuestion)
    })
})
console.log(reponsesQuestion)

// verifier bonne ou mauvaise reponse de l'user => affichage answer
function checkAnswer(response){
    if (response.dataset.correct === "true") {
        const goodAnswer = document.querySelector("#rightAnswer")
        goodAnswer.style.visibility = "visible"
        scoreBeer++
        let scoreR = document.querySelector('.userScoreR')
        scoreR.textContent = (`Tu as gagné ${scoreBeer} jusqu'a maintenant!!!`)
    }
    else {
        const wrongAnswer = document.querySelector("#wrongAnswer")
        wrongAnswer.style.visibility="visible"
        let scoreW = document.querySelector('.userScoreW')
        scoreW.textContent = (`Tu as ${scoreBeer} `)
    }

 }


// nextQuestion.addEventListener("click", quizz)
// nextQuestion.dataset.index = questionnaire[i].question
// questionnaire[i++].question




// Code a trier

// //pour afficher le score final sur la page endQuizz
// const userScore = document.getElementsByClassName("userScore")
// userScore.innerText = updatedScore



//function endedQuizz()
//const end = document.querySelector(".endQuizz")
//.end.style.visibility="visible"
//

//button restart => link to welcome page
