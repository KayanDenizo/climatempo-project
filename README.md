# 🌤️ Clima Tempo - Weather App

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) 
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) 
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## 🌟 Overview

**Clima Tempo** is a clean, responsive web app that provides real-time weather forecasts for any city in the world. It uses the OpenWeatherMap API to fetch current weather data like temperature, wind speed, wind direction, and description.  

[Preview](https://kayandenizo.github.io/climatempo-project/) <!-- Substitua pelo caminho da sua imagem/GIF -->

## ⚡ Features

- Real-time weather data by city name
- Current temperature (°C), wind speed (km/h), wind direction, and description
- Responsive design for desktop, tablet, and mobile
- Loading states and error messages
- Smooth animations and modern UI

## 🛠️ Technologies

- HTML5
- CSS3 (Flexbox & Grid, Animations)
- JavaScript (ES6+, fetch API, async/await)

## 🚀 Getting Started

1. **Clone the repo:**
```bash
git clone https://github.com/KayanDenizo/climatempo-project.git
````

2. **Navigate to the project:**

```bash
cd climatempo-project
```

3. **Add your OpenWeatherMap API key:**

```javascript
const results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=YOUR_API_KEY&units=metric&lang=pt_br`);
```

4. **Open `index.html` in your browser** to start using the app.

## 📝 How to Use

1. Type the city name in the search box.
2. Press **Enter** or click **Buscar**.
3. View the current weather data displayed below the search box.

## 🎨 Screenshots / GIFs

<img width="1094" height="910" alt="image" src="https://github.com/user-attachments/assets/6b6b2b35-8e8a-4997-8856-cd736121caf6" />

## 🙏 Credits

Created by **Kayan Denizo**.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
