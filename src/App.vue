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
#app {
  background-size:contain;
  background-position: bottom;
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
  background-color: black;
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
