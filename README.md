# 🌤️ Clima Tempo - Previsão do Tempo
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/KayanDenizo/climatempo-project)

## Overview

Clima Tempo is a clean and simple web application that provides real-time weather forecasts for any city in the world. Using the OpenWeatherMap API, it fetches and displays current weather conditions, including temperature, wind speed, wind direction, and a brief description. The interface is designed to be modern, responsive, and user-friendly.

## Features

- **Real-time Weather Data:** Get up-to-date weather information by searching for a city name.
- **Detailed Information:** Displays current temperature (°C), wind speed (km/h), wind direction, and a capitalized weather description.
- **Dynamic UI:** Features a loading state during API calls and provides clear error messages for invalid searches or network issues.
- **Responsive Design:** The layout is fully responsive and adapts seamlessly to desktop, tablet, and mobile screens.
- **Modern Aesthetics:** A visually appealing design with smooth animations, gradients, and box shadows.

## Technologies Used

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white): For the basic structure and content of the web page.
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white): For styling, layout (Flexbox & Grid), animations, and responsiveness.
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black): For application logic, DOM manipulation, and handling asynchronous API requests with `async/await` and the `fetch` API.


## Setup and Installation

This project is a static web application and does not require a build process or special server.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kayandenizo/climatempo-project.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd climatempo-project
    ```

3.  **Add your API Key:**
    The project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You'll need to get your own free API key.

    - Open the `script.js` file.
    - Find the following line of code:
      ```javascript
      const results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=8ee2b7b80481b9c67e4d3b83a1bf6055&units=metric&lang=pt_br`);
      ```
    - Replace the existing API key (`8ee2b7b80481b9c67e4d3b83a1bf6055`) with your own key.

4.  **Run the application:**
    Simply open the `index.html` file in your favorite web browser.

## How to Use

1.  Open the `index.html` file in a web browser.
2.  In the search box, type the name of the city you want to check.
3.  Click the "Buscar" (Search) button or press the `Enter` key.
4.  The current weather information for the specified city will be displayed below the search bar.

## Credits

This project was created by **Kayan Denizo**.
