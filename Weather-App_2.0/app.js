const temp = document.getElementById("temp");
const desc = document.getElementById("desc");
const humidity = document.getElementById("hum");
const wSpeed = document.getElementById("wSpeed");
const btn = document.getElementById("btn");
const cityName = document.getElementById("c-name");
const currentDate = document.getElementById("date");
const weekday = document.getElementById("weekday");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const imgHumidity = document.getElementById("img-humidity")
const imgWind = document.getElementById("img-wind")
const imgSunrise = document.getElementById("img-sunrise")
const imgSunset = document.getElementById("img-sunset")


btn.addEventListener("click", () => {
	let city = document.getElementById("city").value;

	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7314495091e5a59a46e480759172ae2&units=metric`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			cityName.innerText = data.name;

			temp.innerText = Math.floor(data.main.temp) + " °C";

			let iconName = data.weather[0].icon
			icon.src = "http://openweathermap.org/img/wn/" + iconName + "@2x.png"

			hum.innerText = data.main.humidity + " %"
			imgHumidity.style.backgroundImage = "url('./Images/humidity.png')"

			wSpeed.innerText = data.wind.speed + " m/s";
			imgWind.style.backgroundImage = "url('./Images/wind.png')"

			let dSunrise = new Date(data.sys.sunrise * 1000)
			sunrise.innerText = dSunrise.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
			imgSunrise.style.backgroundImage = "url('./Images/sunrise.png')"


			let dSunset = new Date(data.sys.sunset * 1000)
			sunset.innerText = dSunset.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
			imgSunset.style.backgroundImage = "url('./Images/sunset.png')"
		}).catch((err) => {

			//alert("Invalid city name ! Please try again.");
			cityName.innerHTML = 'Invalid city name! <br>'
			cityName.innerHTML += 'Please try again.'
			humidity.textContent = " "
			wSpeed.textContent = " "
			sunrise.textContent = " "
			sunset.textContent = " "
			temp.textContent = " "
			icon.src = " "
			currentDate.textContent = " "
			imgHumidity.style.backgroundImage = "none"
			imgSunrise.style.backgroundImage = "none"
			imgSunset.style.backgroundImage = "none"
			imgWind.style.backgroundImage = "none"
			icon.src.style.backgroundImage = "none"
		})

	let today = new Date()
	let dayOfWeekName = today.toLocaleString('default', { weekday: 'long' })
	let monthName = today.toLocaleString('default', { month: 'long' })
	let date = `${dayOfWeekName}, ${today.getDate()} ${monthName} ${today.getFullYear()}`
	currentDate.innerHTML = date

});

