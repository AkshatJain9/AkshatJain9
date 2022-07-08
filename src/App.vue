<template>
  <div id="app">
    <main>
      <div class="introduction">
        <div class="title">
          Hi! My Name is <name>Akshat Jain</name> 
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
        <button class="resumebutton" type="button" id="resbutton" onclick="window.open('https://akshatjain9.github.io/Resume/Resume_JAIN.pdf', '_blank')"></button>
      </div>

      <div class="linkedin">
        <button class="linkedinbutton" type="button" id="libutton" onclick="window.open('https://www.linkedin.com/in/akshat-jain-155b74203/', '_blank')"></button>
      </div>
      </div>

      
      <div class="skillstitle"> My Skills at a Glance</div>

      <div class="skills">
        <div class="python">
          <img src="./assets/python.png" alt="python" width="120" height="120">
        </div> 
        <div class="cpp">
          <img src="./assets/cpp.png" alt="cpp" width="110" height="120">
        </div> 
        <div class="git">
          <img src="./assets/git.png" alt="git" width="120" height="120">
        </div> 
        <div class="java">
          <img src="./assets/java.png" alt="java" width="120" height="120">
        </div> 
        <div class="javascript">
          <img src="./assets/javascript.png" alt="javascript" width="120" height="120">
        </div> 
      </div>


      <div class="projects">
        <div class="projectstitle">Software Projects</div>

      </div>

    <Timeline />
    </main>

  </div>
</template>


<script>
import Timeline from './components/Timeline.vue';
  export default {
    name: 'app',
    components : {
      Timeline
    },
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

.introduction .title name {
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

.skills {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
}


.skillstitle {
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
  background-image: url('./assets/resume.png');
  /* background-color: transparent; */
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
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
