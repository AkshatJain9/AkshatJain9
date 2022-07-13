 <template>
    <div id="skills">
    <div class="skillstitle">Skills at a Glance</div>

      <div class="skills">
        <div class="python">
          <img src="../assets/python.png" alt="python" width="120" height="120">
        </div> 
        <div class="cpp">
          <img src="../assets/cpp.png" alt="cpp" width="110" height="120">
        </div> 
        <div class="git">
          <img src="../assets/git.png" alt="git" width="120" height="120">
        </div> 
        <div class="java">
          <img src="../assets/java.png" alt="java" width="120" height="120">
        </div> 
        <div class="javascript">
          <img src="../assets/javascript.png" alt="javascript" width="120" height="120">
        </div> 
      </div>
  </div>

</template>


<script>
export default {
    name: 'skills',
    data () {

    },

    methods: {

    },
    beforeMount() {

    }
  }
</script>

<style>
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
  padding-top: 50px;
  font-size: 40px;
}


</style> 