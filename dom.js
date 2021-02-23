const form = document.querySelector('.location');
const time = document.querySelector('.time-image');
const icon = document.querySelector('.localicon');
const body = document.querySelector('body');
const card = document.querySelector('.main');
// const heading = document.querySelector('.heading');   
// const label = document.querySelector('.label');


const updateui = (data) =>{
    //update details in the UI
    document.getElementById("localname").innerText = `${data.cityname.LocalizedName}`;
    document.getElementById("localcondition").innerText = `${data.climate.WeatherText}`;
    document.getElementById("localtemp").innerText = `${data.climate.Temperature.Metric.Value}`;

    //update the icon of the weathercondition
    const iconsource = `icons/${data.climate.WeatherIcon}.svg`;
    icon.setAttribute('src',iconsource);

    //update Image and background color of day/night in the UI
    let timesource = null;
    if(data.climate.IsDayTime){
        body.style.color = 'Black';
        body.style.backgroundColor = '#fdfd96';
        timesource = 'day.svg';

    }else{
        body.style.color ='white';
        body.style.backgroundColor = '#4d4cbe';
        timesource = 'night.svg';
    }
    time.setAttribute('src' , timesource);

    //remove d-none class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

}


//get both weather and location name using the getcity and weathercondition funct
const getconditions = async (location)=>{
    const cityname = await getcity(location);
    const climate = await weathercondition(cityname.Key);
    return {cityname , climate};
}


//get form input
form.addEventListener('submit', e =>{
    //prevent defaults
    e.preventDefault();

    //city name input
    const temp = form.locname.value.trim();
    form.reset();

    //call fucntion to get the weather conditions and city name
    getconditions(temp).then(data=>{
        //function to update the UI
        updateui(data);

    }).catch(err=>{
        console.log(err);
    })

})

