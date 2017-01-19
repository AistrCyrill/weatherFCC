$(function() {

	// Custom JS
	// $(document).ready(function(){
	// 	console.log("Hello");
	// })

	var x = document.getElementById("geo");

	// var geolocation = function() {
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition(showPosition);
	// 	} else {
	// 		x.innerHTML = "Not supported :C"
	// 	}
	// }

	// var showPosition = function(position) {
	// 	x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
	// }

	// showPosition(geolocation());

		
	var city;


	var getInfoAboutUser = function(){
	$.get("http://ipinfo.io", function(response){
		// console.log(response.city, response.region,  response.country, response.loc);
		city = ( response.city);
		console.log(city);
		x.innerHTML = "City: " + response.city + "<br>Country: " + response.country + "<br>" + response.loc;
	}, "jsonp");


};



	getInfoAboutUser();

	


	// var getTheWeather = function(city){
	// 	console.log(city);
		// $.get('http://api.openweathermap.org/data/2.5/weather', { appid : '334e12fbfc05f6bcc98770eca8633a9b', q : city }, function(response){
		// 	console.log(response.cod + ' ' + response.name);
	

	// getTheWeather(city);

	// var z = $.get('http://api.openweathermap.org/data/2.5/weather', { appid : '334e12fbfc05f6bcc98770eca8633a9b', q : 'Kiev' }, function(response){
	// 	console.log(response.cod + ' ' + response.name);
	// },"jsonp");

	// var url      = window.location.href ;

	// var newurl = 'http://google.com';

	// window.location.href = newurl;

	// console.log(url, typeof y);
});
