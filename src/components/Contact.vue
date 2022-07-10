 <template>
    <div id="contact">
    <div class="contact">
        <div class="github">
        <button class="githubbutton" type="button" id="gitbutton" onclick="window.open('https://github.com/AkshatJain9', '_blank')"></button>
        </div>

      <div class ="resume">
        <button class="resumebutton" type="button" id="resbutton" onclick="window.open('https://akshatjain9.github.io/Resume/Resume_JAIN.pdf', '_blank')"></button>
      </div>

      <div class="linkedin">
        <button class="linkedinbutton" type="button" id="libutton" onclick="window.open('https://www.linkedin.com/in/akshat-jain-155b74203/', '_blank')"></button>
      </div>
  </div>
  </div>

</template>


<script>
export default {
    name: 'contact',
    data () {

    },

    methods: {

    },
    beforeMount() {

    }
  }
</script>

<style>
.contact {
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
}

.contact .githubbutton {
  background-image: url('../assets/Github-logo.png');
  background-color: transparent;
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
  cursor: pointer;
}

.contact .resumebutton {
  background-image: url('../assets/resume.png');
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
  cursor: pointer;
}


.contact .linkedinbutton {
  background-image: url('../assets/Linkedin-logo.png');
  background-color: transparent;
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
  cursor: pointer;
}




</style> 