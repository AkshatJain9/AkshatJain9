<template>
    <div id="introduction">
        <div class="introduction">
        <div class="title">
          Hi! My Name is <span class="nametext">Akshat Jain</span> 
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

.nametext {
  color: #2b7fab;
}

.introduction .description {
  font-size: 20px;
  padding-bottom: 20px;
}

</style>