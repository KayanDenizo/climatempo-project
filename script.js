document.querySelector('.busca').addEventListener("submit", async (e) => {
    e.preventDefault();

    const input = document.querySelector('#searchInput').value.trim();
    const button = document.querySelector('button');
    const searchInput = document.querySelector('#searchInput');

    if (input !== "") {
        // Ativar estado de loading
        setLoadingState(true);
        showWarning("Carregando...");

        try {
            const results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=8ee2b7b80481b9c67e4d3b83a1bf6055&units=metric&lang=pt_br`);
            const json = await results.json();

            if (json.cod == 200) {
                showInfo({
                    name: json.name,
                    country: json.sys.country,
                    temp: Math.round(json.main.temp),
                    tempIcon: json.weather[0].icon,
                    windSpeed: Math.round(json.wind.speed * 3.6), // Convert m/s to km/h
                    windAngle: json.wind.deg,
                    description: json.weather[0].description
                });
            } else {
                showWarning("Não encontramos essa localização...");
            }
        } catch (error) {
            showWarning("Erro ao buscar dados do clima. Tente novamente.");
            console.error('Erro na API:', error);
        } finally {
            // Desativar estado de loading
            setLoadingState(false);
        }
    } else {
        showWarning("Por favor, digite o nome de uma cidade.");
    }
});

function setLoadingState(isLoading) {
    const button = document.querySelector('button');
    const searchInput = document.querySelector('#searchInput');
    
    if (isLoading) {
        button.disabled = true;
        button.classList.add('loading');
        searchInput.disabled = true;
    } else {
        button.disabled = false;
        button.classList.remove('loading');
        searchInput.disabled = false;
    }
}

function showWarning(msg) {
    document.querySelector(".aviso").innerHTML = msg
}

function showInfo(json) {
    showWarning("");
    
    const resultado = document.querySelector(".resultado");
    resultado.style.display = "block";
    resultado.classList.add("show");
    
    // Animar a exibição dos dados
    setTimeout(() => {
        document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`;
        document.querySelector(".tempInfo").innerHTML = `${json.temp}<sup>°C</sup>`;
        document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} <span>km/h</span>`;
        
        // Adicionar descrição do clima se existir
        const descElement = document.querySelector(".descricao");
        if (descElement) {
            descElement.innerHTML = json.description;
        }

        document.querySelector(".temp img").setAttribute("src", `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
        document.querySelector(".ventoPonto").style.transform = `rotate(${json.windAngle-90}deg)`;
    }, 100);
}

// Adicionar funcionalidade de busca ao pressionar Enter
document.querySelector('#searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('.busca').dispatchEvent(new Event('submit'));
    }
});

// Limpar avisos quando o usuário começar a digitar
document.querySelector('#searchInput').addEventListener('input', () => {
    const aviso = document.querySelector('.aviso');
    if (aviso.innerHTML.includes('Por favor, digite') || aviso.innerHTML.includes('Não encontramos')) {
        showWarning('');
    }
});