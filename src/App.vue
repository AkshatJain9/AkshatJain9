<template>
  <div id="app">
    <main>
      <Introduction />
      <Contact />
      <Skills />
      <div class="projectstitle">Software Projects</div>
    <Projects />
    </main>

  </div>
</template>


<script>
import Introduction from './components/Introduction.vue';
import Contact from './components/Contact.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';

particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 50,
        },
        "color": {
          "value":"#649BD6"
        },
        "size":{
          "value":2,
          "random":true,
        },
        "line_linked":{
          "distance":160.3412060865523,
          "color":"#ffffff",
          "opacity":0.44093831673801875,
          "width":1.2827296486924182
        },
        "move":{
          "enable":true,
          "speed":6,
          "direction":"top-right",
        }
      },
      "interactivity": {
        "detect_on":"window",
        "events": {
          "onhover": {
            "enable":true,
            "mode":"grab"
          },
          "onclick":{
            "enable":true,
            "mode":"repulse"
          },
        },
        "modes":{
          "grab":{
            "distance":231.44200550588337,
            "line_linked":{
              "opacity":1
            }
          },
          "repulse":{
            "distance":200,
            "duration":0.4
          },
        }
      },
    });


  export default {
    name: 'app',
    components : {
      Introduction,
      Projects,
      Contact,
      Skills
    },

    
    mounted() {
      let canvas = document.getElementsByTagName('canvas')[0];
      canvas.setAttribute('width', window.innerWidth - 20);
      canvas.setAttribute('height', window.innerHeight);
    }

  }
</script>



<style>

canvas {
  display: block;
}
  
#particles-js { 
  position:fixed; 
  width: 100%; 
  height: 100%; 

  background-color: #000000; 
  background-image: url(""); 
  background-repeat: no-repeat; 
  background-size: cover; 
  background-position: 50% 50%;
  z-index: -100; 
}

#app {
  transition: 0.4s;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  min-height: 200vh;
  padding: 25px;
}

body {
  font-family: 'montserrat', sans-serif;
}


.projectstitle {
  padding: 25px;
  font-family: PortfolioFont;
  font-weight: 100;
  color: #FFF;
  padding-top: 125px;
  font-size: 40px;
  text-align: center;
}



@font-face {
  font-family: PortfolioFont;
  src: url("./assets/fonts/LibreFranklin-VariableFont_wght.ttf");
}
</style>
