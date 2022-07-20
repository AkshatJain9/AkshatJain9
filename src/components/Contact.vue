 <template>
    <div id="contact">
    <div class="contact">
      <div class="github">
        <div class="githubbackground" onclick="window.open('https://github.com/AkshatJain9', '_blank')">
          <button class="githubbutton" type="button" id="gitbutton" onclick="window.open('https://github.com/AkshatJain9', '_blank')"></button>
          <div class="githubtext">GitHub</div>
        </div>
      </div>

      <div class ="resume">
        <div class="resumebackground" onclick="window.open('https://akshatjain9.github.io/Resume/Resume_JAIN.pdf', '_blank')">
        <button class="resumebutton" type="button" id="resbutton" onclick="window.open('https://akshatjain9.github.io/Resume/Resume_JAIN.pdf', '_blank')"></button>

          <div class="resumetext">Resume</div>
        </div>
      </div>

      <div class="linkedin">
        <div class="linkedinbackground" onclick="window.open('https://www.linkedin.com/in/akshat-jain-155b74203/', '_blank')">
          <button class="linkedinbutton" type="button" id="libutton" onclick="window.open('https://www.linkedin.com/in/akshat-jain-155b74203/', '_blank')"></button>
          <div class="linkedintext">LinkedIn</div>
        </div>
        
      </div>
  </div>
  </div>
</template>


<script>
export default {
    name: 'contact',
  }
</script>

<style>
.contact {
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 100px;
  padding-bottom: 150px;
  position: relative;
}

.githubbutton {
  background-image: url('../assets/Github-logo.png');
  background-color: transparent;
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
  cursor: pointer;
  border: none;
}

.resumebutton {
  background-image: url('../assets/resume.png');
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
  cursor: pointer;
  border: none;
}

.linkedinbutton {
  background-image: url('../assets/Linkedin-logo.png');
  background-color: transparent;
  background-size: cover;
  object-fit: contain;
  width: 150px;
  height: 150px;
  cursor: pointer;
  border: none;
}


.githubbackground {
  background-color: transparent;
  transition: .5s ease-out;
  width: 33%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
  padding-top: 20px;
  cursor: pointer;
}

.githubbackground:hover {
  background-color: #1d1d1d;
}

.githubbackground:hover .githubtext {
  color: white;
}

.githubtext {
  color: transparent;
  align-items: center;
  font-size: 180%;
  padding-top: 5%;
  transition: .55s ease-out;
}


.resumebackground {
  background-color: transparent;
  transition: .5s ease-out;
  width: 33%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 33.33%;
  text-align: center;
  padding-top: 20px;
  cursor: pointer;
}

.resumebackground:hover {
  background-color: #1d1d1d;
}

.resumebackground:hover .resumetext {
  color: white;
}

.resumetext {
  color: transparent;
  align-items: center;
  font-size: 180%;
  padding-top: 5%;
  transition: .55s ease-out;
}

.linkedinbackground {
  background-color: transparent;
  transition: .5s ease-out;
  width: 33%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 66.66%;
  text-align: center;
  padding-top: 20px;
  cursor: pointer;
}

.linkedinbackground:hover {
  background-color: #1d1d1d;

}

.linkedinbackground:hover .linkedintext {
  color: white;

}

.linkedintext {
  color: transparent;
  align-items: center;
  font-size: 180%;
  padding-top: 5%;
  transition: .5s ease-out;
}


</style> 