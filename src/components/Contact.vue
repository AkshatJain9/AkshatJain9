 <template>
  <div class="contact">
      <div class="background githubbackground" @click="openLink('https://github.com/AkshatJain9')">
        <button class="githubbutton button"></button>
        <div class="text">GitHub</div>
      </div>

      <div class="resume background" @click="openLink('https://akshatjain9.github.io/Resume/Resume_JAIN.pdf')">
        <button class="resumebutton button"></button>
        <div class="text">Resume</div>
      </div>

      <div class="linkedin background" @click="openLink('https://www.linkedin.com/in/akshat-jain-155b74203/')">
        <button class="linkedinbutton button"></button>
        <div class="text">LinkedIn</div>
      </div>
  </div>
</template>


<script>
  export default {
    name: 'contact',

    methods: {
      openLink(link) {
        window.open(link, '_blank')
      }
    }
  }
</script>

<style scoped>
.contact {
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 100px;
  padding-bottom: 150px;
  position: relative;
}

.button {
  background-color: transparent;
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
  cursor: pointer;
  border: none;
}

.githubbutton {
  background-image: url('../assets/Github-logo.png');
}

.resumebutton {
  background-image: url('../assets/resume.png');
  background-color: white;
}

.linkedinbutton {
  background-image: url('../assets/Linkedin-logo.png');
}

.text {
  color: transparent;
  align-items: center;
  font-size: 180%;
  padding-top: 5%;
  transition: .55s ease-out;
}

.background {
  background-color: transparent;
  transition: .5s ease-out;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 33%;
  text-align: center;
  padding-top: 20px;
  cursor: pointer;
  border-radius: 40px;
}

.background:hover {
  background-color: #1d1d1d;
}

.background:hover .text {
  color: white;
}

.resume {
  left: 33.33%;
}

.githubbackground {
  left: 0%;
}

.linkedin {
  left: 66.66%;
}
</style> 