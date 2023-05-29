const username= []
const question = ["Who is the president of ecell SGSITS?", "Who is the president of NSS SGSITS?", "Who is the president of InDhan SGSITS?", "Who is the president of GSPH SGSITS?", "Who is the president of India?"]
const incorrectOption1 = ["someone", "Amaya", "Zion", "Aaliyah", "Finn"]
const incorrectOption2 = ["anyone", "Alina", "Mia", "Aurora", "Maeve"]
const incorrectOption3 = ["everyone", "Mila", "Kofi", "Maisha", "Tau"]
const correctOption = ["none", "Kayden", "Halima", "Diara", "Kesia"]
const options = [incorrectOption1, correctOption, incorrectOption2, incorrectOption3]

let n = 0;
const question_html = document.querySelector("#question");
const option1_html = document.querySelector("#option-content-1");
const option2_html = document.querySelector("#option-content-2");
const option3_html = document.querySelector("#option-content-3");
const option4_html = document.querySelector("#option-content-4");



function initiate() {
    if(n<question.length-1){
    n++;
    return n;}else{
         window. location. replace("index.html")
    }
}
console.log(n)

/** @type {HTMLDivElement} */
const opt_1 = document.querySelector('#option-1')
const opt_2 = document.querySelector('#option-2')
const opt_3 = document.querySelector('#option-3')
const opt_4 = document.querySelector('#option-4')
// opt_1.style
/** @type {HTMLDivElement} */
const optionsDiv =  document.querySelector('.options')
// optionsDiv.style.col
// optionsDiv.style.backgroundColor='pink';
// document.querySelector('.options').
// document.querySelector('body').

// const logic = function () {
//     // console.log(e)
//     const answer = item.lastElementChild.innerHTML;
//     console.log(answer)
//     console.log(correctOption.includes(answer))
//     if (correctOption.includes(answer) == true) {
//         item.lastElementChild.innerHTML = "Correct";
//         // item.removeEventListener('click',func);
//         setTimeout(function () {
//             initiate()
//             nextQuestion()
//         }, 5000);
//     } else {
//         item.lastElementChild.innerHTML = 'Incorrect';
//         setTimeout(function () {
//             initiate()
//             nextQuestion()
//         }, 5000);
//     }
// }

opt_1.addEventListener('click',function () {
    const answer = opt_1.lastElementChild.innerHTML;
    console.log(answer)
    console.log(correctOption.includes(answer))
    if (correctOption.includes(answer) == true) {
        opt_1.lastElementChild.innerHTML = "<i>Correct</i>";
        // item.removeEventListener('click',func);
        optionsDiv.style.pointerEvents='none';
        // opt_1.style.backgroundColor ='green'
        setTimeout(function () {
            initiate()
            nextQuestion()
            // optionsDiv.sty
            // optionsDiv.style.pointerEvents='auto';
            // opt_1.style.backgroundColor ='unset'
        }, 1000);

    } else {
        opt_1.lastElementChild.innerHTML = '<em>Incorrect</em>';
        optionsDiv.style.pointerEvents='none';
        // opt_1.style.color = 'red'
        // optionsDiv.style.color = 'red'
        // opt_1.style.backgroundColor ='red'

        setTimeout(function () {
            initiate()
            nextQuestion()
            // optionsDiv.style.pointerEvents='auto';
            // opt_1.style.backgroundColor ='unset'

        }, 1000);

    }
});

opt_2.addEventListener('click',function (e) {
    const answer = opt_2.lastElementChild.innerHTML;
    console.log(answer)
    console.log(correctOption.includes(answer))
    if (correctOption.includes(answer) == true) {
        opt_2.lastElementChild.innerHTML = "<i>Correct</i>";
        optionsDiv.style.pointerEvents='none';
        // opt_2.style.backgroundColor ='green'

        // item.removeEventListener('click',func);
        setTimeout(function () {
            initiate()
            nextQuestion()
        }, 1000);
        // e.preventDefault;
    } else {
        opt_2.lastElementChild.innerHTML = '<em>Incorrect</em>';
        optionsDiv.style.pointerEvents='none';
        // opt_2.style.backgroundColor ='red'

        setTimeout(function () {
            initiate()
            nextQuestion()
        }, 1000);
        // e.preventDefault;
    }
});

opt_3.addEventListener('click',function (e) {
    const answer = opt_3.lastElementChild.innerHTML;
    console.log(answer)
    console.log(correctOption.includes(answer))
    optionsDiv.style.pointerEvents='none';
    // opt_3.style.backgroundColor ='green'

    if (correctOption.includes(answer) == true) {
        opt_3.lastElementChild.innerHTML = "<i>Correct</i>";
        // item.removeEventListener('click',func);
        setTimeout(function () {
            initiate()
            nextQuestion()
            
        }, 1000);
        // e.preventDefault;
    } else {
        opt_3.lastElementChild.innerHTML = '<em>Incorrect</em>';
        optionsDiv.style.pointerEvents='none';
        // opt_3.style.backgroundColor ='red'

        setTimeout(function () {
            initiate()
            nextQuestion()
        }, 1000);
        // e.preventDefault;
    }
});

opt_4.addEventListener('click',function (e) {
    const answer = opt_4.lastElementChild.innerHTML;
    optionsDiv.style.pointerEvents='none';
    // opt_4.style.backgroundColor ='green'

    console.log(answer)
    console.log(correctOption.includes(answer))
    if (correctOption.includes(answer) == true) {
        opt_4.lastElementChild.innerHTML = "<i>Correct</i>";
        // item.removeEventListener('click',func);
        setTimeout(function () {
            initiate()
            nextQuestion()
        }, 5000);
        // e.preventDefault;
    } else {
        opt_4.lastElementChild.innerHTML = '<em>Incorrect</em>';
        optionsDiv.style.pointerEvents='none';
        // opt_4.style.backgroundColor ='red'

        setTimeout(function () {
            initiate()
            nextQuestion()
        }, 5000);
        // e.preventDefault;
    }
});

// const optionsDOM = document.querySelectorAll(".option");
// optionsDOM.forEach(function (item) {
//     item.addEventListener('click', function (e) {
//         console.log(e)
//         const answer = item.lastElementChild.innerHTML;
//         console.log(answer)
//         console.log(correctOption.includes(answer))
//         if (correctOption.includes(answer) == true) {
//             item.lastElementChild.innerHTML = "Correct";
//             // item.removeEventListener('click',func);
//             setTimeout(function () {
//                 initiate()
//                 nextQuestion()
//             }, 5000);
//         } else {
//             item.lastElementChild.innerHTML = 'Incorrect';
//             setTimeout(function () {
//                 initiate()
//                 nextQuestion()
//             }, 5000);
//         }
//     })
// })
//I cannot break out of forEach hence saving all optionsDOM in new array and then for loop
/*
const optionsDOM_arr=[...optionsDOM]
const next = function(){
    let isdf=1;
    while(isdf<4){
        const item = optionsDOM_arr[isdf];
        console.log(item)
    // optionsDOM.forEach(function (item) {
        item.addEventListener('click', function () {
            const answer = item.lastElementChild.innerHTML;
            console.log(answer)
            console.log(correctOption.includes(answer))
            if (correctOption.includes(answer) == true) {
                item.lastElementChild.innerHTML = "Correct";
                // item.removeEventListener('click',func);
            } else {
                item.lastElementChild.innerHTML = 'Incorrect';
                setTimeout(function () {
                    initiate()
                    question_html.innerHTML = question[n];
                    option1_html.innerHTML = options[arr[0]][n];
                    option2_html.innerHTML = options[arr[1]][n];
                    option3_html.innerHTML = options[arr[2]][n];
                    option4_html.innerHTML = options[arr[3]][n];
                    next();
                }, 2000);
    
            }
        },{once: true})
        isdf++
           break;
    }
    }
    next();
*/
let arr = [];

for (var a = [0, 1, 2, 3], i = a.length; i--;) {
    var random = a.splice(Math.floor(Math.random() * (i)), 1)[0];
    arr.push(random);
}

const nextQuestion = function () {
    question_html.innerHTML = question[n];
    option1_html.innerHTML = options[arr[0]][n];
    option2_html.innerHTML = options[arr[1]][n];
    option3_html.innerHTML = options[arr[2]][n];
    option4_html.innerHTML = options[arr[3]][n];
    optionsDiv.style.pointerEvents='auto';
}
nextQuestion();
console.log(options[arr[0]])
console.log(n)