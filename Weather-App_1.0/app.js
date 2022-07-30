const tem = document.getElementById("temp");
const desc = document.getElementById("desc");
const btn = document.getElementById("fetch");

btn.addEventListener("click",() => {
    city = document.getElementById("city").value;
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7efb9c4b4f5627f0994d66569cdfd5ff&units=metric`
        )
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.weather[0].main);
            tem.innerText += ':  ' + data.main.temp + ' °C'
            desc.innerText += ':  ' + data.weather[0].description;
            hum.innerText += ':  ' + data.main.humidity + ' %';
            wspeed.innerText += ':  ' + data.wind.speed + ' m/s';
        });
});