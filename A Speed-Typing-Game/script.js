

const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const typingSound = document.getElementById('typing-sound');

quoteInputElement.addEventListener('keydown', (event) => {
    typingSound.currentTime = 14;
    typingSound.play();
  });

quoteInputElement.addEventListener('input',()=>{
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    
    let correct = true
    arrayQuote.forEach((characterSpan, index)=>{
        const character = arrayValue[index]
        if(character == null){
            characterSpan.classList.remove("correct")
            characterSpan.classList.remove("incorrect")
            correct = false
        }else if(character === characterSpan.innerHTML){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove("incorrect")
        }else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add("incorrect")
            correct = false
        }
    })
    if(correct) renderNewQuote()
})

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
    .then(respnce => respnce.json())
    .then(data => data.content)
}


async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerHTML = ' '
    
    quote.split("").forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.innerHTML = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
    satarTime()
}

let startTime
function satarTime() {
    
    timerElement.innerHTML = 0
    startTime = new Date()
    setInterval(()=>{
        timerElement.innerHTML = getTimerTime()
    },1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}
renderNewQuote();