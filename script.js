const getlocation =() => {
fetch('https://freegeoip.net/json/?callback-?')
.then((response) => response.json() )
.then((data) =>{

console.log(data)


const des = document.querySelector("p")
des.innerHTML = `latitude: ${data.loc}`;


});


};





