<template>
  <div id="app">
    <main>
      <div class="introduction">
        <div class="title">
          Hi! My Name is <span>Akshat Jain</span> 
        </div>
        <div class="description">
          I am a Student at the Australian National University (ANU) and a Database Engineer at Services Australia
        </div>
      </div>

      <div class="contact">
      <div class="github">
        <button class="githubbutton" type="button" id="gitbutton" onclick="window.open('https://github.com/AkshatJain9', '_blank')"></button>
      </div>

      <div class ="resume">
      <button class="resumebutton" type="button" id="resbutton" onclick="location.href='assets/Resume_JAIN.pdf';">Resume</button>
      </div>

      <div class="linkedin">
      <button class="linkedinbutton" type="button" id="libutton" onclick="window.open('https://www.linkedin.com/in/akshat-jain-155b74203/', '_blank')"></button>
      </div>
      </div>

      <div class="skills">
        <div class="skillstitle"> My Skills at a Glance</div>

      </div>

      <div class="aboutme">
        Test

      </div>

      <div class="projects">
        <div class="projectstitle">Software Projects</div>

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

.contact {
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
}


.skillstitle {
  padding: 25px;
  font-family: PortfolioFont;
  font-weight: 100;
  color: #FFF;
  padding-top: 100px;
  font-size: 40px;
}

.githubbutton {
  background-image: url('./assets/Github-logo.png');
  background-color: transparent;
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
  cursor: pointer;
}

.resumebutton {
  cursor: pointer;
}



.linkedinbutton {
  background-image: url('./assets/Linkedin-logo.png');
  background-color: transparent;
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
  cursor: pointer;
}

.projectstitle {
  padding: 25px;
  font-family: PortfolioFont;
  font-weight: 100;
  color: #FFF;
  padding-top: 100px;
  font-size: 40px;
  text-align: center;
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



@font-face {
  font-family: PortfolioFont;
  src: url("./assets/fonts/LibreFranklin-VariableFont_wght.ttf");
}
</style>
