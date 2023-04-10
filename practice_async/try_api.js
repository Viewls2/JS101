// const API_KEY = "{YOUR_API_KEY}";
// const CITY = "Bangkok";
// const COUNTRY = "Thailand";

// const url = `https://api.airvisual.com/v2/city?city=${CITY}&state=&country=${COUNTRY}&key=${API_KEY}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const pm25 = data.data.current.pollution.pm25;
//     document.getElementById("pm25").textContent = pm25;
//   })
//   .catch(error => console.error(error));


const endpoint = 'http://api.airvisual.com/v2/city?city=Chiang Mai&state=Chiang Mai&country=Thailand&key={YOUR_API_KEY}';
fetch(endpoint)
.then((response)=>{
    if (response.ok){
        return response.json();
    }
    throw new Error('Failed to fetch');
},networkError=>console.log(networkError.message))
.then((jsonResponse)=>{
    console.log(jsonResponse);
    const pollution = jsonResponse.data.current.pollution;
    // for (const element in pollution){
    //     console.log(element);
    // }
    console.log('Timestamp:',pollution.ts);
    console.log('AQI value based on US:',pollution.aqius);
    console.log('Main pollutant for US AQI:',pollution.mainus);
    console.log('AQI value based on China:',pollution.aqicn);
    console.log('Main pollutant for China AQI:',pollution.maincn);
})