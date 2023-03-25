// import {pseudo} from hello.js
// import {scoreBeer, scoreCookie} from BDquestions.js

let pseudo = "Test"
let scoreCookie = 1
let scoreBeer = 14

const scoreFinal = document.querySelector('.score')
switch(scoreBeer){
    case 0:
        scoreFinal.innerHTML = `Sérieusement !!! ${pseudo}, tu n'as même pas répondu à la question sur toi. L'ours n'a pas eu de bière et ${scoreCookie} cookie. L'ours va donc te dévorer.`;
        break;
    case 1:
        scoreFinal.innerHTML = `Désolé ${pseudo}, mais apparemment tu ne connais que toi-même, car l'ours n'a eu qu'une seule bière et ${scoreCookie} cookie. L'ours va donc te dévorer.`;
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        scoreFinal.innerHTML = `Désolé ${pseudo}, mais l'ours n'a eu que ${scoreBeer} bières et ${scoreCookie} cookie. Tu ne connais pas assez sa promo, il va donc te considérer comme son futur repas. COURS VITE !!!`;
        break;
    case 7:
    case 8:
    case 9:
        scoreFinal.innerHTML = `Presque ${pseudo} ! L'ours a eu ${scoreBeer} bières et ${scoreCookie} cookie. L'ours a un stock de bières suffisant, mais envisage rapidement de courir...`;
        break;
    case 10:
    case 11:
    case 12:
    case 13:
        scoreFinal.innerHTML = `Bravo ${pseudo} ! L'ours a eu ${scoreBeer} bières et ${scoreCookie} cookie. L'ours a un stock de bières largement suffisant, il t'en paye même une !!! Reste sur tes gardes tout de même, un ours reste un ours.`;
        break;
    case 14:
        scoreFinal.innerHTML = `Soit tu as créé le site et tu fais un test, soit tu es très fort. Dans ce dernier cas, bravo ${pseudo} ! L'ours a eu ${scoreBeer} bières et ${scoreCookie} cookie. L'ours a un stock de bières largement suffisant, il t'en paye même une !!! Reste sur tes gardes tout de même, un ours reste un ours.`;
        break;
    default:
        score.innerHTML = `42`;
        break;
}

