    const pseudo = prompt("C'est quoi ton blaze")
    const greet = document.querySelector('.hello')
    if (pseudo)
        {if (pseudo.indexOf ('Taupe') !==-1 )
        {greet.textContent = `Hello petite taupe mais fait attention à l'ours !!!`}
        else 
    {greet.textContent = `Hello ${pseudo} !!!`}}
    else
    {greet.textContent = `Hello Anonymous player !!!`}

    // export {pseudo}