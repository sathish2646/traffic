let time = document.querySelector('h1')
let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')

let count = 60

function number(){
    count -= 1
    time.textContent = count
    if(count === 59){
        green.style.backgroundColor = 'lime '
        yellow.style.backgroundColor = 'white'
        red.style.backgroundColor = 'white'
    }
    if(count === 5){
        green.style.backgroundColor = 'white'
        yellow.style.backgroundColor = 'yellow'
        red.style.backgroundColor = 'white'
    }
    if(count === 1){
        green.style.backgroundColor = 'white'
        yellow.style.backgroundColor = 'white'
        red.style.backgroundColor = 'red'
    }
    if(count === 0){
        count = 120
    }
    if(count === 65){
         green.style.backgroundColor = 'white'
        yellow.style.backgroundColor = 'yellow'
        red.style.backgroundColor = 'white'
    }

}

setInterval(() => {
    number()
},1000)