const getlocation =() => {
fetch('https://ipinfo.io/json/?callback-?')
.then((response) => response.json() )
.then((data) =>{

console.log(data)


const des = document.querySelector("p")
des.innerHTML = `latitude: ${data.loc}` ip:${data.ip};


});


};





