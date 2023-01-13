const wolf = document.querySelector('.wolf')
const pipe = document.querySelector('.pipe')

const jump = () => {
    wolf.classList.add('jump')
    setTimeout(() => {
        wolf.classList.remove('jump')
    }, 500)
}
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft
    const woldPosition = +window.getComputedStyle(wolf).bottom.replace('px','')

    if(pipePosition <= 140 && pipePosition > 0 && woldPosition < 50){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        wolf.style.animation = 'none'
        wolf.style.bottom = `${woldPosition}px`

        wolf.src ='./img/game-over.png'
        wolf.style.width = '150px' 

        crearInteral(loop)
    }
},10)
document.addEventListener('keydown', jump)