const getlocation = () => {
            fetch('http://ipinfo.io/json/?callback-?')
                .then((response) => response.json())
                .then((data) => {
                    const des = document.querySelector("p");
                    const geolocationData = `latitude: ${data.loc}`;
                    des.innerHTML = geolocationData;

                    // Send the geolocation data to your server
                    fetch("./send-geolocation.php", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ geolocation: geolocationData }),
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
