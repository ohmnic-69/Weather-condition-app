//use your own API key here
const key = 'r0cgvOSMlGrptXKPoIFbzPkS8xGbYjhs'

//fetching the key of the location
const getcity = async (name) =>{
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${name}`;
    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];
}


//fetching the weather conditions of the city using the key obtained from above async funct
const weathercondition = async (citykey)=>{
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${citykey}?apikey=${key}`;
    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];
}
