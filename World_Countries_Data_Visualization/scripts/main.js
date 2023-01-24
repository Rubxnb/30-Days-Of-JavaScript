const graphs = document.querySelector('.graphs')
const graphTitle = document.querySelector('.graph-title')

const populationButton = document.querySelector('.population')
populationButton.addEventListener('click', () => {
    population()})

function population() {
    removeChilds(graphs)
    let total = 0

    COUNTRIES_DATA.forEach((e) => {
        total += e.population
    })

    COUNTRIES_DATA.sort((a, b) => {
        if(a.population > b.population) return -1
        if(a.population < b.population) return 1
        return 0
    })

    createGraphWrapperPopulation('World', total, total)
    for(var i = 0; i < 9; i++) {
        createGraphWrapperPopulation(COUNTRIES_DATA[i].name, total, COUNTRIES_DATA[i].population)
    }
    
}

function createGraphWrapperPopulation(country, total, value){
    // div graph-wrapper
    let graphWrapper = document.createElement('div')
    graphWrapper.className = 'graph-wrapper'

    // name
    let language = document.createElement('p')
    language.className = 'language'
    language.appendChild(document.createTextNode(country))
    graphWrapper.appendChild(language)

    // bar
    let bar = document.createElement('div')
    bar.className = 'bar'
    bar.style.width = ((value*100) / total)   + '%'
    graphWrapper.appendChild(bar)

    let values = document.createElement('p')
    values.className = 'value'
    values.appendChild(document.createTextNode(value))
    graphWrapper.appendChild(values)
    graphs.appendChild(graphWrapper)
}

function removeChilds( parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}