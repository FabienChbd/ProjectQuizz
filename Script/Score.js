
console.log(scoreBeer);
const scoreFinal = document.querySelector('.score');


switch (scoreBeer) {
    case 0:
        scoreFinal.textContent = `${pseudo}, ceci est techniquement impossible.`;
        break;
    case 1:
        scoreFinal.textContent = `Sérieusement!!! ${pseudo}, tu n'as même pas répondu à la question sur toi. L'ours n'a pas eu de bière. L'ours va donc te dévorer.`;
        break;
    case 2:
        scoreFinal.textContent = `Désolé ${pseudo}, mais apparemment tu ne te connais que toi - même, car l'ours n'a eu qu'une seule bière. L'ours va donc te dévorer.`;
        break;
    case 3: case 4:case 5: case 6:
        scoreFinal.textContent = `Désolé ${pseudo}, mais l'ours n'a eu que ${scoreBeer} bières.Tu ne connais pas assez sa promotion, il va donc te considérer comme son futur repas.COURS VITE!!!`;
        break;
    case 7: case 8: case 9:
        scoreFinal.textContent = `Presque ${pseudo}! L'ours a eu ${scoreBeer} bières. L'ours a un stock de bières suffisant, mais envisage rapidement de courir...`;
        break;
    case 10:case 11:case 12:case 13:case 14:

        scoreFinal.textContent = `Bravo ${pseudo} ! L'ours a eu ${scoreBeer} bières. L'ours a un stock de bières largement suffisant, il t'en paye même une !!! Reste sur tes gardes tout de même, un ours reste un ours.`;

        break;
    case 15:
        scoreFinal.textContent = `Soit tu as créé le site et tu fais un test, soit tu es très fort. Dans ce dernier cas, bravo ${pseudo} ! L'ours a eu ${scoreBeer} bières. L'ours a un stock de bières largement suffisant, il t'en paye même une !!! Reste sur tes gardes tout de même, un ours reste un ours.`;
        break;
    default:
        scoreFinal.textContent = `42`;
        break;
}

