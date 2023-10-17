const getlocation =() => {
fetch('http://ipinfo.io/json/?callback-?')
.then((response) => response.json() )
.then((data) =>{

console.log(data)


const des = document.querySelector("p")
getdata =  `altitude: ${data.loc} ip: ${data.ip} city: ${data.city} country: ${data.country}
network: ${data.org} postal: ${data.postal} state: ${data.region} timezone: ${data.timezone}
`
des.innerHTML =getdata

  // Send the geolocation data to the server
  fetch("/send-geolocation.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ getdata }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log("Geolocation sent successfully.");
      } else {
        console.error("Geolocation sending failed.");
      }
    })
    .catch((error) => {
      console.error("Error sending geolocation data: ", error);
    });
});
};




