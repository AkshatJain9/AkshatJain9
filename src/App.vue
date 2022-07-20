<template>
  <div id="app">
    <main>
      <Introduction />
      <Contact />
      <Skills />
      <div class="projects">
        <div class="projectstitle">Software Projects</div>
      </div>
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
          "value":85,
          "density": {
            "enable":true,
            "value_area":800
          }
        },
        "color": {
          "value":"#ffffff"
        },
        "shape": {
          "type":"polygon",
          "stroke":{
            "width":0,
            "color":"#000000"
          },
          "polygon":{
            "nb_sides":11
          },
          "image":{
            "src":"img/github.svg",
            "width":100,
            "height":100
          }
        },
        "opacity":{
          "value":1,
          "random":false,
          "anim":{
            "enable":false,
            "speed":1,
            "opacity_min":0.1,
            "sync":false
          }
        },
        "size":{
          "value":1,
          "random":true,
          "anim":{
            "enable":false,
            "speed":40,
            "size_min":0.1,
            "sync":false
          }
        },
        "line_linked":{
          "enable":true,
          "distance":160.3412060865523,
          "color":"#ffffff",
          "opacity":0.44093831673801875,
          "width":1.2827296486924182
        },
        "move":{
          "enable":true,
          "speed":6,
          "direction":"top-right",
          "random":false,
          "straight":false,
          "out_mode":"out",
          "bounce":false,
          "attract":{
            "enable":false,
            "rotateX":3367.1653278175977,
            "rotateY":2324.947488255008
          }
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
          "resize":true
        },
        "modes":{
          "grab":{
            "distance":231.44200550588337,
            "line_linked":{
              "opacity":1
            }
          },
          "bubble":{
            "distance":400,
            "size":40,
            "duration":0.48724632738080703,
            "opacity":0.7146279468251837,"speed":3
          },
          "repulse":{
            "distance":200,
            "duration":0.4
          },
          "push":{
            "particles_nb":4
          },
          "remove":{
            "particles_nb":2
          }
        }
      },
      "retina_detect":true
    });


  export default {
    name: 'app',
    components : {
      Introduction,
      Projects,
      Contact,
      Skills
    },
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
  padding-top: 100px;
  font-size: 40px;
  text-align: center;
}



@font-face {
  font-family: PortfolioFont;
  src: url("./assets/fonts/LibreFranklin-VariableFont_wght.ttf");
}
</style>
