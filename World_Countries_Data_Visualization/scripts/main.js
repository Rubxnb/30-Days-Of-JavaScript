const graphs = document.querySelector('.graphs')
const graphTitle = document.querySelector('.graph-title')
const subtitle = document.querySelector('.subtitle')

subtitle.appendChild(document.createTextNode(`Currently, we have ${COUNTRIES_DATA.length} countries`))

const populationButton = document.querySelector('.population')
populationButton.addEventListener('click', () => {
    population()})

const languagesButton = document.querySelector('.languages')
languagesButton.addEventListener('click', () => {
    languages()})

function population() {
    removeChilds(graphs)
    removeChilds(graphTitle)
    graphTitle.appendChild(document.createTextNode('10 Most populated countries in the world'))
    let total = 0

    COUNTRIES_DATA.forEach((e) => {
        total += e.population
    })

    COUNTRIES_DATA.sort((a, b) => {
        if(a.population > b.population) return -1
        if(a.population < b.population) return 1
        return 0
    })

    createGraphWrapper('World', total, total)
    for(var i = 0; i < 9; i++) {
        createGraphWrapper(COUNTRIES_DATA[i].name, total, COUNTRIES_DATA[i].population)
    } 
}

function languages() {
    removeChilds(graphs)
    removeChilds(graphTitle)
    graphTitle.appendChild(document.createTextNode('10 most spoken languages in the world'))

    let languages = new Map()

    COUNTRIES_DATA.forEach((c) => {
        c.languages.forEach((l) => {
            if(languages.has(l)) {
                languages.set(l, languages.get(l) + 1)
            } else {
                languages.set(l, 1)
            }
        })
    })
    languages = new Map([...languages.entries()].sort((a, b) => b[1] - a[1]));
    const keys = languages.entries()
    for(let i = 0; i<10; i++) {
        const language = keys.next().value
        createGraphWrapper(language[0], 100, languages.get(language[0]))
    }
}

function createGraphWrapper(country, total, value){
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