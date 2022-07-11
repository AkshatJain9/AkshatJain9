<template>
  <div id="app">
    <main>
      
      
    
      <Introduction />
      <Contact />
      <Skills />


      <div class="projects">
        <div class="projectstitle">Software Projects</div>

      </div>

    <Timeline />
    </main>

  </div>
</template>


<script>


import Timeline from './components/Timeline.vue';
import Introduction from './components/Introduction.vue';
import Contact from './components/Contact.vue';
import Skills from './components/Skills.vue'; 

particlesJS("particles-js", 
          {"particles":{"number":{"value":85,
          "density":{"enable":true,"value_area":800}},
          "color":{"value":"#ffffff"},
          "shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},
          "polygon":{"nb_sides":11},
          "image":{"src":"img/github.svg","width":100,"height":100}},
          "opacity":{"value":1,"random":false,
          "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
          "size":{"value":1,"random":true,
          "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
          "line_linked":{"enable":true,"distance":160.3412060865523,
          "color":"#ffffff","opacity":0.44093831673801875,
          "width":1.2827296486924182},
          "move":{"enable":true,"speed":6,"direction":"top-right",
          "random":false,"straight":false,"out_mode":"out","bounce":false,
          "attract":{"enable":false,"rotateX":3367.1653278175977,
          "rotateY":2324.947488255008}}},"interactivity":{"detect_on":"canvas",
          "events":{"onhover":{"enable":true,"mode":"grab"},
          "onclick":{"enable":true,"mode":"repulse"},"resize":true},
          "modes":{"grab":{"distance":231.44200550588337,"line_linked":{"opacity":1}},
          "bubble":{"distance":400,"size":40,"duration":0.48724632738080703,
          "opacity":0.7146279468251837,"speed":3},"repulse":{"distance":200,"duration":0.4},
          "push":{"particles_nb":4},"remove":{"particles_nb":2}}},
          "retina_detect":true});
          var count_particles, stats, update; stats = new Stats; 
          stats.setMode(0); stats.domElement.style.position = 'absolute'; 
          stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; 
          document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); 
          update = function() { stats.begin(); stats.end(); 
          if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
            { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
          requestAnimationFrame(update); }; 
          requestAnimationFrame(update);;

  export default {
    name: 'app',
    components : {
      Introduction,
      Timeline,
      Contact,
      Skills
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
/* #background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -100;
} */

canvas{ display: block;  } /* ---- particles.js container ---- */ 
#particles-js { 
  position:absolute; 
  width: 100%; 
  height: 100%; 
  background-color: #000000; 
  background-image: url(""); 
  background-repeat: no-repeat; 
  background-size: cover; 
  background-position: 50% 50%;
  z-index: -100; 
  } 
  /* ---- stats.js ---- */ 
/* .count-particles{ background: #000022; position: absolute; top: 48px; left: 0; width: 80px; color: #13E8E9; font-size: .8em; text-align: left; text-indent: 4px; line-height: 14px; padding-bottom: 2px; font-family: Helvetica, Arial, sans-serif; font-weight: bold; } 
.js-count-particles{ font-size: 1.1em; } #stats, 
.count-particles{ -webkit-user-select: none; margin-top: 5px; margin-left: 5px; } 
#stats{ border-radius: 3px 3px 0 0; overflow: hidden; } .count-particles{ border-radius: 0 0 3px 3px; } */

#app {
  /* background-size:contain;
  background-position: bottom; */
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
