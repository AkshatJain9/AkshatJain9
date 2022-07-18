<template>
  <div id="timeline">
    <span id="timelineline">
      <div class="cublino softwarep left">

      Cublino
      </div>

    </span>

    



  </div>
  
</template>


<script>


  export default {
    name: 'projects',
    data () {

    },

    methods: {

    },
    beforeMount() {

    }
  }
</script>



<style>

#timeline {
  padding-top: 40px;
  display: flex;
  align-items: center;
}


#timeline #timelineline {
  position: relative;
  height: 1500px;
  width: 40px;
  background-color: #8b1801;
  border-radius: 99px;
  align-items: center;
  display: table;
  margin: 0 auto;
}

.softwarep {
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: #FFF;
}

.left {
  left: 100px
}

.cublino {
  top: 75px
}


</style>
