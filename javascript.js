// .........coupon Code ............

let popupCloseButton=document.querySelector('#popupClose')
popupCloseButton.addEventListener('click',()=>{
    document.querySelector('#coupon').style.display='none';
})


// ...............dark and light mode..............

function changeMode() {
    let mybody = document.body;
    mybody.classList.toggle('darkmode')
    if (mybody.classList.contains('darkmode'))
    {
        document.getElementById("lightdark").src="night.gif";
    }
    else
    {
        document.getElementById("lightdark").src="sun1.gif";
    }
}

//  ................weather............



            
            let y = document.getElementById('weather');
            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                }else{
                    x.innerText="Geo Not Supported"
                }
            }

            function showPosition(data){
                console.log(data)
                let lat = data.coords.latitude
                let lon = data.coords.longitude
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
                
                fetch(url,{method:'GET'})

            .then((res)=>res.json())

            .then((data)=>{
                console.log(data)
                
                let cityName = data.city.name;
                let temp = data.list[0].temp.day + '°C';
                let descrip = data.list[0].weather[0].description;
                let iconcode = data.list[0].weather[0].icon;

                document.getElementById("wicon").src = "http://openweathermap.org/img/wn/" + iconcode + ".png";
                
                y.innerText = `Weather of ${cityName}
                 ${temp} ${descrip}`
                
                       })
                    }
