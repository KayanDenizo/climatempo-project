document.querySelector('.busca').addEventListener("submit", async (e) => {
    e.preventDefault();

    let input = document.querySelector('#searchInput').value

    if (input !== "") {
        showWarning("Carregando...")

        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}
        &appid=8ee2b7b80481b9c67e4d3b83a1bf6055
        &units=metrics&lang=pt_br`);
        let json = await results.json();

        if (json.cod == 200) {

            showInfo(({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            }))

        } else {
            showWarning("Nao encontramos essa localização...")
        }
    } else {

    }
})

function showWarning(msg) {
    document.querySelector(".aviso").innerHTML = msg
}

function showInfo(json) {
    showWarning("")
    document.querySelector(".resultado").style.display = "block"
    document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`
    document.querySelector(".tempInfo").innerHTML = `${json.temp}<sup>°C</sup>`
    document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} <span>Km/h</span>`

    document.querySelector(".temp img").setAttribute("src", `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector(".ventoPonto").style.transform = `rotate(${json.windAngle-90}deg)`
}