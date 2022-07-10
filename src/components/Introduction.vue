<template>
    <div id="introduction">
        <div class="introduction">
        <div class="title">
          Hi! My Name is <name>Akshat Jain</name> 
        </div>
        <div class="description">
          I am a Student at the Australian National University (ANU) and a Database Engineer at Services Australia
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'introduction',
    data () {

    },

    methods: {

    },
    beforeMount() {

    }
  }
</script>

<style>

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

</style>