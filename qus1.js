








async function checkweather(){
    const response=await(apiUrl +'&appid=${apiKey}');
    var data=await response.json();

    console.log(data);

  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";


}