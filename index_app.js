//play
const play = document.querySelector('.play');
play.addEventListener('click', function(){
    /** @type {HTMLDivElement} */
    const button = document.querySelector('.button');
    button.style.display = 'none'
    const usernameInput = document.querySelector('.usernameBox')
    usernameInput.style.display='unset'
})