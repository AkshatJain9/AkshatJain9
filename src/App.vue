<template>
  <div id="app">
    <main>
      <div class="introduction">
        <div class="title">
          Hi! My name is Akshat Jain
        </div>
        <div class="description">
          I am a Student at the Australian National University (ANU) and a Database Engineer at Services Australia
        </div>
      </div>

      <div class="contact">
        <div class="github">
          <button type="button" id="gitbutton">Github</button>
        </div>

        <div class="resume">

        </div>

        <div class="linkedin">


        </div>

      </div>

      <div class="work">

      </div>

      <div class="projects">

      </div>

      <div class="university">

      </div>
    </main>
  </div>
</template>


<script>
  export default {
    name: 'app',
    data () {
      return {
        weather_api: '08d19d2cfc7606d7d78082f4185a934b',
        url_base: 'http://api.openweathermap.org/data/2.5/',
        query:'Canberra',
        weather: {}
      };
    },

    methods: {
      fetchWeather() {
          fetch(`${this.url_base}weather?q=Canberra&units=metric&APPID=${this.weather_api}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      },
      setResults (results) {
          this.weather = results;
      },

      dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
      }
    },
    beforeMount() {
      this.fetchWeather()
    }
  }
</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app {
  background-size:contain;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 200vh;
  padding: 25px;
  background-color: black;
}

.introduction {
  padding: 25px;
  text-align: center;
  font-family: PortfolioFont;
  font-weight: 100;
  color: #FFF;
}

.introduction .title {
  font-size: 50px;
}

.introduction .description {
  font-size: 20px;
}

@font-face {
  font-family: PortfolioFont;
  src: url("./assets/fonts/LibreFranklin-VariableFont_wght.ttf");
}
</style>
