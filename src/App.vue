<template>
  <div id="app">
    <main>
      <div class="introduction">
        <div class="title">
          Hi! My name is <span>Akshat Jain</span> 
        </div>
        <div class="description">
          I am a Student at the Australian National University (ANU) and a Database Engineer at Services Australia
        </div>
      </div>

      <!-- <div class="contact"> -->
      <div class="github">
        <button class="githubbutton" type="button" id="gitbutton" onclick="window.open('https://github.com/AkshatJain9', '_blank')"></button>
      </div>

      <button class="resumebutton" type="button" id="resbutton">Resume</button>

      <button class="linkedinbutton" type="button" id="libutton">Linkedin</button>

<!-- 
      </div> -->

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

    },

    methods: {
    },
    beforeMount() {

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
.contact {
  font-size: large;
}

.github {
    margin-left: 25%;
    padding-top: 50px;
}

.githubbutton {
  background-image: url('./assets/Github-logo.png');
  background-color: transparent;
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
}

.linkedinbutton {

  margin-left: 25%;
}

.resumebutton {
  margin-left: 25%;
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
  padding-bottom: 20px;
}

.introduction .title span {
  color: #2b7fab;
}

.introduction .description {
  font-size: 20px;
}

@font-face {
  font-family: PortfolioFont;
  src: url("./assets/fonts/LibreFranklin-VariableFont_wght.ttf");
}
</style>
