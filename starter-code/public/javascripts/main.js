document.addEventListener('DOMContentLoaded', () => {

    const ironhackMadrid = {
      lat: 40.3826658,
      lng: -3.7015088
    };
    const map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15,
        center: ironhackMADRID
      }
    );
  
    window.places.forEach( place => {
      new google.maps.Marker({
        position: {
          lat: place.location.coordinates[0],
          lng: place.location.coordinates[1]
        },
        map: map,
        title: `${place.name} - ${place.description}`
      });
    })
  
  
  
    const geolocate = () => {
      return new Promise((resolve, reject) => {
        // Try to get a geolocation object from the web browser
        if (navigator.geolocation) {
  
          // Get current position
          // The permissions dialog will popup
          navigator.geolocation.getCurrentPosition(function (position) {
            // Create an object to match
            // google's Lat-Lng object format
            console.log(position)
            const myPosition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log('myPosition: ', myPosition)
            resolve(myPosition);
          }, ()  => reject('Error in the geolocation service.')); // If something else goes wrong
        } else {
          reject('Browser does not support geolocation.'); // Browser says: Nah! I do not support this.
  
        }
      })
    }
  
  
    geolocate().then(position => {
      // User granted permission
       const myMarker = new google.maps.Marker({
         position,
         map: map,
         title: "I'm here"
       });
       map.setCenter(position);
   })
  
   
  
  }, false);