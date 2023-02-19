const containers = document.querySelectorAll('.container')
const insectBoxes = document.querySelectorAll('li')
const btn = document.querySelector('.btn')
const playArea = document.querySelector('.play-area')
let scoreOfGame = document.querySelector('.score')
let timeOfGame = document.querySelector('.time')
let message = document.querySelector('.message')

let idx;
let score = 0;
let time = 0;

let randomNumber = function(){
    let x = Math.random()*(window.innerWidth -300) + 100
    let y = Math.random()*(window.innerHeight-300) + 100
    return {x, y}
}

btn.addEventListener('click', ()=>{
    idx = 0
    scrollDown()
})

function scrollDown(){
    containers[idx].classList.add('show')
}

insectBoxes.forEach(box=> {
    box.addEventListener('click', ()=>{
        idx = 1
        scrollDown()
        let insectImg = box.childNodes[1].getAttribute('src')
        
        setTimeout(() => {
            createdInsect(insectImg)
        }, 1000);

        setInterval(() => {
            time++
            let m = Math.floor(time / 60)
            let s = time % 60
            m = m < 10 ? `0${m}` : m
            s = s < 10 ? `0${s}` : s
            timeOfGame.innerText = `${m}:${s}`
        }, 1000);
    })
})


function createdInsect(bug){
    let insect = document.createElement('img')
    insect.classList.add('insect')
    insect.src = bug
    let {x, y} = randomNumber()
    insect.style.top = y+"px"
    insect.style.left = x+"px"
    insect.style.transform = `rotate(${Math.floor(Math.random()*360)}deg)`
    playArea.appendChild(insect)

    insect.addEventListener('click', ()=>{
        score++
        scoreOfGame.innerText = score
        if(score == 20){
            message.style.transform = "translate(0)"
        }
        let insectImg = insect.src
        insect.classList.add('caught')
        setTimeout(() => {
            createdInsect(insectImg)
        }, 1000);
        setTimeout(() => {
            createdInsect(insectImg)
        }, 1500);
    })
 
}