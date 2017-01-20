$(function() {

	var x = document.getElementById("geo");

	//If no more requests by ipInfo

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

		


	var getInfoAboutUser = function(){
	$.get("http://ipinfo.io", function(response){
		// console.log(response.city, response.region,  response.country, response.loc);
		city = ( response.city);
		console.log(city);

				//Weather info
	var temp = document.getElementById('temp');
	var weather = document.getElementById('weather');
	
	var z = $.get('http://api.openweathermap.org/data/2.5/weather', { appid : '334e12fbfc05f6bcc98770eca8633a9b', q : city }, function(response){
		console.log(response.cod + ' ' + response.name + ' ' + response.main.temp + ' ' + response.weather[0].main);
		var weatherMain = response.weather[0].main ;
		var KelvinT = response.main.temp;
		var Celcius = (KelvinT - 273).toFixed();

		var Fahrenheit = Celcius * (9/5) + 32;
		console.log(Celcius + " " + KelvinT + ' Fahrenheit: ' + Fahrenheit);

		


		var tempOut = function(units){
			temp.innerHTML = ' ';
			temp.innerHTML += " " + units + " ";
		}


		weather.innerHTML += " " + weatherMain;


		$('#Fahrenheit').on('click', function(){
				$(this).addClass('active').css({ 'opacity' : '1'});
				$('#celsius').removeClass('active').css({'opacity' : '0.5'});
				$('#temp').css('font-size', '8vw');

				
				tempOut(Fahrenheit);
		});

		$('#celsius').on('click', function(){
			$(this).addClass('active').css('opacity', '1');
			$('#Fahrenheit').removeClass('active').css('opacity', '0.5');

			tempOut(Celcius);
		});

		if($("#celsius").hasClass('active')){
			tempOut(Celcius);
		} else {
			tempOut(Fahrenheit);
		}

		
	},"jsonp");

		x.innerHTML = " " + response.city + " , " + response.country ;
	}, "jsonp");



};

	 getInfoAboutUser();






});
