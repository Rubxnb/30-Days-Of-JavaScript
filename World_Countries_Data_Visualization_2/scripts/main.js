
const main = document.querySelector('.main')
const counter = document.querySelector('.counter')
counter.appendChild(document.createTextNode(`Total Number of countries: ${countries.length}`))

const startButton = document.querySelector('.start')
const searchButton = document.querySelector('.search')

countries.forEach(c => createCard(c))

const sortButton = document.querySelector('.sort')
sortButton.addEventListener('click', () => {
    removeChilds(main)
    countries.reverse().forEach(c => createCard(c))
})

let buttonPressed = 0;

function createCard(country) {

    const card = document.createElement('div')
    card.className = 'card'

    const filter = document.createElement('div')
    filter.className = 'card-filter'

    const text = document.createElement('h1')
    text.className = 'country'
    text.appendChild(document.createTextNode(country))

    filter.appendChild(text)
    card.appendChild(filter)

    main.appendChild(card)
}

function removeChilds(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


startButton.addEventListener('click', () => {
    countries.forEach(c => createCard(c))
    startButton.classList.toggle('active');
    buttonPressed = 1
    if(searchButton.classList.toggle('active')){
        searchButton.classList.toggle('active')
    }
    
});

searchButton.addEventListener('click', () => {
    countries.forEach(c => createCard(c))
    searchButton.classList.toggle('active');
    buttonPressed = 2
    if(startButton.classList.toggle('active')){
        startButton.classList.toggle('active')
    } 
});

const input = document.querySelector('.input')
input.addEventListener('input', (e) => {filterFunction(e.target.value)})

function filterFunction(value) {
    console.log(input.value)
    
    if(buttonPressed === 1) {
        removeChilds(main)
        const filter = countries.filter((c) => c.toUpperCase().startsWith(value.toUpperCase()))
        
        filter.forEach(c => createCard(c))
    } else if(buttonPressed === 2) {
        removeChilds(main)
        const filter = countries.filter((c) => c.toUpperCase().includes(value.toUpperCase()))
        
        filter.forEach(c => createCard(c))
    }
}