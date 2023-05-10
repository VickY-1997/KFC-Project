// .........coupon Code ............

let popupCloseButton=document.querySelector('#popupClose')
popupCloseButton.addEventListener('click',()=>{
    document.querySelector('#coupon').style.display='none';
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
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
                //api calling
                fetch(url,{method: 'GET'})
                //return promise
                .then((res) =>res.json())
                //resolve the promise
                .then((data) => {
                    console.log(data)
                    let cityName = data.city.name;
                    let temp = data.list[0].temp.day+" °C"
                    y.innerText = `Weather of ${cityName} is ${temp}`
                })
            }
