    const pseudo = prompt("C'est quoi ton blaze")
    const greet = document.querySelector('.hello')
    if (pseudo)
        {if (pseudo.indexOf ('Taupe') !==-1 )
        {greet.innerHTML = `Hello petite taupe mais fait attention à l'ours !!!`}
        else 
    {greet.innerHTML = `Hello ${pseudo} !!!`}}
    else
    {greet.innerHTML = `Hello Anonymous player !!!`}

    export {pseudo}