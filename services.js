const WEATHER_API_KEY = '398133a7a6msh51384cbccc390e9p1762e6jsnbfab717f1144';
const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN');
xhr.setRequestHeader('x-rapidapi-key', '398133a7a6msh51384cbccc390e9p1762e6jsnbfab717f1144');
xhr.setRequestHeader('x-rapidapi-host', 'open-weather13.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);

