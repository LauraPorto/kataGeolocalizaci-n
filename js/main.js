navigator.geolocation.getCurrentPosition(position =>{
    const {latitude, longitude} = position.coords
    console.log(latitude, longitude);
    new google.maps.Map(document.querySelector('.mapaGoogle'), {
        zoom: 20,
        center:{
            lat:latitude, 
            lng: longitude
    }, 
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    const marker = new google.maps.Marker({
        map, 
        position:{
            lat:latitude, 
            lng: longitude
        }})
}, error=>console.log(error));