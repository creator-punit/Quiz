//play
const allUsername = JSON.parse(localStorage.getItem("allUsername")) || [];
const play = document.querySelector('.play');
const usernameFeature = document.querySelector('.usernameBox')

play.addEventListener('click', function () {
    /** @type {HTMLDivElement} */
    const button = document.querySelector('.button');
    button.style.display = 'none'
    usernameFeature.style.display = 'unset'
})

/**
 * @type HTMLInputElement
 */
const usernameInput = document.querySelector('.username')//.value not working with it...intellisense does not recognize
usernameInput.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        const username = usernameInput.value;
        allUsername.push(username);
        console.log(allUsername)
        const localUsername = JSON.stringify(allUsername)
        localStorage.setItem("allUsername", localUsername)
        window.location.replace("game.html")
        let retString = localStorage.getItem("allUsername")
        let retArray = JSON.parse(retString)
        console.log(retArray);
    }
})
console.log(allUsername)

