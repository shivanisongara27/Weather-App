let form = document.querySelector("form");
let input = document.querySelector("input");
let container = document.querySelector(".container");
let type = document.querySelector(".type");
let mainContainer = document.querySelector(".main-container")
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let para = document.querySelector("p");
let h5 = document.querySelector("h5");
let heading5 = document.querySelector(".heading5");
let heading1 = document.querySelector(".heading1");
let span1 = document.querySelector(".span1")
let dt1 = document.querySelector(".dt1");
let detail2 = document.querySelector(".detail2");
let details = document.querySelector(".details");
let dt2 = document.querySelector(".dt2");
let airControl = document.querySelector(".box");
let airControl1 = document.querySelector(".box1");
let airControl2 = document.querySelector(".box2");
let airControl3 = document.querySelector(".box3");




const weatherGenerator = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key= e3cdd873094b43cba5d141423231306&q=${input.value}&aqi=yes
          `
        );

        const data = await response.json();
        console.log(data)


        const temp = data.current.temp_c;
        const tempF = data.current.temp_f;
        const cityName = data.location.name;
        const country = data.location.country;
        const dateTime = data.current.last_updated;
        const weatherType = data.current.condition.text;
        const humidity = data.current.humidity;

        const pressure1 = data.current.pressure_in;
        const AirControl = data.current.air_quality.co;
        const AirControl1 = data.current.air_quality.no2;
        const AirControl2 = data.current.air_quality.o3;
        const AirControl3 = data.current.air_quality.so2;






        console.log(data);



        details.style.border = "1px solid black";
        details.style.borderLeft = "none";

        details.style.borderRight = "none";



        //  let hr = document.createElement("hr");
        //  hr.style.width ="100%";
        //  hr.style.marginTop ="20px";
        //  hr.style.color =" black";
        //  hr.style.border = " 0.05em solid rgb(96,98,137)";



        //  type.appendChild(hr);


      
        h1.innerText = `${temp}°C`;
        h2.innerText = cityName;
        h3.innerText = `${tempF}°F`;
        h5.innerText = country;
        para.innerText = dateTime;
        heading5.innerText = weatherType;
        heading1.innerText = " Other Details"
        dt1.innerText = ` Humidity : ${humidity} `;
        dt2.innerText = ` Pressure : ${pressure1}`
        detail2.innerText = " Air Quality ";
        airControl.innerText = `co : ${AirControl} `;
        airControl1.innerText = `no2 : ${AirControl1} `;
        airControl2.innerText = `o3 : ${AirControl2} `;
        airControl3.innerText = `so2 : ${AirControl3} `;




        // bg change according to waether


        if (temp >= 30 && temp < 45) {
            container.style.backgroundImage = "url('sunny_weather.jpg')";

            h1.style.color = " black";
            h2.style.textShadow = "2px 2px 5px white";
            h2.style.color = " black";
            h3.style.color = " black";
            h5.style.color = " black";
            heading1.style.textShadow = "2px 2px 5px white";
            heading1.style.textShadow = "2px 2px 5px white";
            h5.style.textShadow = "2px 2px 5px white";
            heading5.style.color = "black";
            detail2.style.textShadow = "2px 2px 5px white";
            input.style.backgroundColor = "rgb(55, 62, 63)";
            input.style.color = "white";
            para.style.color = " black";
            mainContainer.style.border = "8px solid white"
       




        }
        else if (temp >= 20 && temp < 30) {
            container.style.backgroundImage = "url('wram_weather.jpg')";

            h1.style.color = "black";
            h2.style.textShadow = "0px 1px 5px white";
            h2.style.color = " black";
            h3.style.color = " black";
            h5.style.color = " white";
            h1.style.textShadow = "0px 1px 5px white";
            h5.style.textShadow = "0px 1px 5px white";
            heading1.style.textShadow = "0px 1px 5px white";
            detail2.style.textShadow = "0px 1px 5px white";
            h3.style.textShadow = "0px 1px 5px white";
            heading5.style.color = "black";
            heading5.style.textShadow = "0px 1px 5px white";
            input.style.backgroundColor = "rgb(55, 62, 63)";
            input.style.color = "white";
            para.style.color = " black";
            para.style.textShadow = "2px 2px 5px white";
            mainContainer.style.border = "8px solid white";
            airControl.style.textShadow = "2px 2px 5px black";
            airControl1.style.textShadow = "2px 2px 5px black";
            airControl2.style.textShadow = "2px 2px 5px black";
            airControl3.style.textShadow = "2px 2px 5px black";
            

        }
        else if (temp >= 15 && temp < 20) {
            container.style.backgroundImage = "url('partly_cloudy.jpeg')";


            
        }
        else if (temp >= 5 && temp < 15) {
            container.style.backgroundImage = "url('cold_weather.webp')";

            h1.style.color = "black";
            h2.style.textShadow = "0px 1px 5px black";
            h2.style.color = " black";
            h3.style.color = " black";
            h5.style.color = " black";
            h1.style.textShadow = "0px 1px 5px black";
            h5.style.textShadow = "0px 1px 5px black";
            heading1.style.textShadow = "0px 1px 5px black";
            detail2.style.textShadow = "0px 1px 5px black";
            h3.style.textShadow = "0px 1px 5px black";
            heading5.style.color = "black";
            heading5.style.textShadow = "0px 1px 5px black";
            input.style.backgroundColor = "white";
            input.style.color = "black";
            para.style.color = " black";
            mainContainer.style.border = "8px solid white";
            airControl.style.textShadow = "2px 2px 5px black";
            airControl1.style.textShadow = "2px 2px 5px black";
            airControl2.style.textShadow = "2px 2px 5px black";
            airControl3.style.textShadow = "2px 2px 5px black";


        }
        else {
            container.style.backgroundImage = "url('main3.jpg')";
        }



    }


    catch (error) {
        window.alert("Enter Valid City Name");
    }
    form.reset();

};





form.addEventListener("submit", weatherGenerator)

