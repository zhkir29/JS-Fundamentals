let displayLocation = document.getElementById('demo');

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(ShowPostion)
}else{
    displayLocation.innerHTML = "Your browser does not support geolocaiton."
}

function ShowPostion(a){
    displayLocation.innerHTML = "Latitude: "+ a.coords.latitude +'</br>'+"Longitude:" + a.coords.longitude;
}