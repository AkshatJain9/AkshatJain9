 <template>
    <div id="skills">
    <div class="skillstitle">Skills at a Glance</div>
      <div class="skills">
        <div class="img_wrapper">
          <div class="text"> Having majored in Machine Learning, I am proficient in Python and its core libraries including 
          NumPy, Pandas, MPL, PyTorch, Tkinter and more. I also have experience in building Python backends 
          for web applications </div>
          <img src="../assets/python.png" alt="python" width="120" height="120">
        </div> 
        <div class="img_wrapper">
          <div class="text"> 
            I have experience in both C and C++, mainly building applications centred around Systems Programming. This includes a Dynamic Memory Allocator and
            HTTP Proxy listed below. I have also experimented with common libraries such as SDL and PyTorch
          </div>
          <img src="../assets/cpp.png" alt="cpp" width="110" height="120">
        </div> 
        <div class="img_wrapper">
          <div class="text"> I have worked in Agile Software Engineering environments and have displayed an ability to work
            in teams and use common tools such as Git
          </div>
          <img src="../assets/git.png" alt="git" width="120" height="120">
        </div> 
        <div class="img_wrapper">
          <div class="text"> Java is my strongest programming language as I have built several applications and tools using it. I have deep knowledge
            of the standard library as well as external libraries such as Guava</div>
          <img src="../assets/java.png" alt="java" width="120" height="120">
        </div> 
        <div class="img_wrapper">
          <div class="text"> I have experience creating multi-page front-end Web-Apps using the Vue ecosystem. I am capable
            of writing both JavaScript and TypeScript and enjoy learning new frameworks
          </div>
          <img src="../assets/javascript.png" alt="javascript" width="120" height="120">
        </div> 
      </div>
  </div>

</template>


<script>
export default {
    name: 'skills',
  }
</script>

<style scoped>
.skills {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding-top: 50px;
}

.img_wrapper {
  position: relative;
  color: transparent;
  text-align: center;
}

.img_wrapper:hover {
  color: white
}

.img_wrapper:hover .text {
  background-color: #1d1d1d;
}

.img_wrapper:hover img {
  opacity: 0;
}


.text {
  position:absolute;
  top: -25%;
  left: -85%;
  font-size: 19px;
  z-index: 200;
  width: 275%;
  transition: .5s ease-out;
}

.skillstitle {
  font-family: PortfolioFont;
  font-weight: 100;
  color: #FFF;
  padding-top: 50px;
  font-size: 40px;
}

img {
  transition: .3s ease-out;
}


</style> 