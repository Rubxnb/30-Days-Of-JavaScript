const planets = {
    'mercury': 3.7,
    'venus' : 8.87,
    'earth' : 9.81,
    'mars' : 3.71,
    'jupiter' : 24.79,
    'saturn' : 10.44,
    'uranus' : 8.87,
    'neptune' : 11.15,
    'pluto' : 0.62,
    'moon' : 1.62
}

for(var planet in planets) {
    var select = document.getElementById("select"),
        opt = document.createElement("option")
    opt.value = planet
    opt.textContent = planet
    select.appendChild(opt)
}

const image = document.getElementById('planet-image')
let planetSelected = 'none'
var select = document.getElementById("select")
select.addEventListener('change', (event) => {
    image.src = ''
    if(event.target.value != 'none'){
        planetSelected = event.target.value
        image.src = `./images/${event.target.value}.png`
    }
})


const result = `<div class="result"> 
                    <p>${4}</p>
                </div>`

const mass = document.getElementById('mass')

const button = document.querySelector('button')

button.addEventListener('click', e => {
    console.log('click')
    const flexContainer = document.querySelector('.flex-container')
    cleanDescripion(flexContainer)
    if(mass.value === '') {
        const div = createDescription('Mass is required', false)
        flexContainer.appendChild(div)

    }
     if(planetSelected ==='none'){
        image.src = ''
        if(mass.value !== ''){
            const div = createDescription('You did not choose a planet yet', false)
            flexContainer.appendChild(div)
        }
        
    } 
    if(mass.value !== '' && planetSelected !=='none') {
        const div = createDescription(`The weight of the object on ${planetSelected}`, true)
        flexContainer.appendChild(div)
    }
    
})

function createDescription(text, correct) {
    let div = document.createElement('div')
    div.className = 'flex-item description'
    div.id = 'description'
    let p = document.createElement('p')
    p.appendChild(document.createTextNode(text))
    div.appendChild(p)

    if(correct) {
        let res = document.createElement('div')
        res.className = 'result'
        res.appendChild(document.createTextNode(`${calculate()} N`))
        div.appendChild(res)
    }

    return div
}

function cleanDescripion(flexContainer){
    const description = document.getElementById('description')

    if(description !== null){
        flexContainer.removeChild(description)
    }

}


function calculate() {
    return ((mass.value / 9.81) * planets[planetSelected]).toFixed(2)
}