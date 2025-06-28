<template>
  <div class="introduction">
    <div class="title">
      Hi! My Name is <span class="nametext">Akshat Jain</span> 
    </div>
    <div class="description">
        I am a Software Engineer at <a href="https://sig.com" target="_blank">Susquehanna International Group (SIG)</a> and former Intern at <a href="https://www.atlassian.com" target="_blank">Atlassian</a>
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

.title {
  font-size: 50px;
  padding-bottom: 20px;
}

.description {
  font-size: 20px;
  padding-bottom: 20px;
}

.description a {
  color: #9ddcff; /* soft, light blue */
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
  border-bottom: 1px solid transparent;
}

.description a:hover {
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
}

.nametext {
  color: #2b7fab;
}
</style>
