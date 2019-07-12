function initMap() {
    var coordinates = {lat: 48.716, lng: 44.524},
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            disableDefaultUI: false,
            scrollwheel: false
        });
}