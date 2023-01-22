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

var select = document.getElementById("select")
select.addEventListener('change', (event) => {
    const image = document.getElementById('planet-image')
    image.src = ''
    if(event.target.value != 'none'){
        image.src = `./images/${event.target.value}.png`
    }
})
