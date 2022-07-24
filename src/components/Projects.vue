<template>


<section class="timeline">
  <ul> <!-- Unordered list, alternate is ordered list (ol)-->
    <li> <!-- List element -->
      <div>
        <title>Cublino</title>
        Created a digital version of the German board game "Cublino" using Java and an MVP architecture.
        Further extended the game with 3D Graphics and a custom game-mode. Added the ability to play
        against computet agents, which utilised basic Reinforcement Learning techniques.

        <images class="timeline-images">
          <img src="../assets/cublino/cublino-1.png">
        </images>

        <button onclick="window.open('https://github.com/AkshatJain9/CublinoGame', '_blank')">View Source</button>
      </div>
    </li>

    <li>
      <div>
        <title>Fitomatic</title> 
        Created an Android application aimed around connecting people with similar fitness goals and interests 
        using a social-media like application. The app included features such as being able to follow, like and share posts.
        It also allowed for peer-to-peer messaging and utilised a NoSQL Google Firestore database to store and query data. 
        Also added a basic language comrehension model to allow users to use a search mechanism.

        <images class="timeline-images">
          <img src="../assets/fitomatic/fitomatic-1.jpg">
        </images>

        <button onclick="window.open('https://github.com/AkshatJain9/Fitomatic', '_blank')">View Source</button>
      </div>
    </li>

    <li>
      <div>
        <title>VueJS Personal Website</title>
        Created <span id="thissite">this</span> website using VueJS!

        <button onclick="window.open('https://github.com/AkshatJain9/AkshatJain9', '_blank')">View Source</button>
      </div>
    </li>

    <li>
      <div>
        <title>Chaturanga</title>
        A C++ implementation of the earliest known Chess ancestor "Chaturanga". Features an MVVM architecture built on
        the SDL graphics library. Also allows users to play against bots which make use of PyTorch's C++ library (In Progress).
        
        <button onclick="window.open('https://github.com/AkshatJain9/ChaturangaAI', '_blank')">View Source</button>
      </div>
    </li>
  
  </ul>
</section>

  
</template>


<script>
  export default {
    name: 'projects',
    mounted() {
      "use strict";
      var items = document.querySelectorAll(".timeline li");
      
      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        let res = (rect.top >= 0 && rect.left >= 0 && rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        return res;
      }
    
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
    }
  }
</script>


<!-- See  https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528 -->
<style>

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: normal 16px/1.5 "Helvetica Neue", sans-serif;
  background: transparent;
  color: #fff;
  overflow-x: hidden;
  padding-bottom: 50px;
}


/* TIMELINE
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul {
  background: transparent;
  padding: 50px 0;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #fff;
}

.timeline ul li::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
  z-index: 1;
}

.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 600px;
  padding: 20px;
  background: #205034;
}
/* #344B52 #367450;*/

.timeline ul li div::before {
  content: "";
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) div {
  left: 45px;
}

.timeline ul li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #205034 transparent transparent;
}

.timeline ul li:nth-child(even) div {
  left: -639px;
}

.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #205034;
}

title {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

ul li button {
  display: block;
  margin-top: 10px;
  padding: 10px;
  background: #017D64;
  height: 10%;
  width: 50%;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
}


.timeline-images {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  position: relative;
  align-items: center;
}

ul li img {
  display: block;

  background: blue;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 3px;
  align-self: center;
}


/* EFFECTS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.timeline ul li::after {
  transition: background 0.5s ease-in-out;
}

.timeline ul li.in-view::after {
  background: #4D7B60;
}

.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.timeline ul li:nth-child(odd) div {
  transform: translate3d(200px, 0, 0);
}

.timeline ul li:nth-child(even) div {
  transform: translate3d(-200px, 0, 0);
}

.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}


/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media screen and (max-width: 900px) {
  .timeline ul li div {
    width: 250px;
  }
  .timeline ul li:nth-child(even) div {
    left: -289px;
  }
}

@media screen and (max-width: 600px) {
  .timeline ul li {
    margin-left: 20px;
  }
  .timeline ul li div {
    width: calc(100vw - 91px);
  }
  .timeline ul li:nth-child(even) div {
    left: 45px;
  }
  .timeline ul li:nth-child(even) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #4D7B60 transparent transparent;
  }
}


/* EXTRA/CLIP PATH STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.timeline-clippy ul li::after {
  width: 40px;
  height: 40px;
  border-radius: 0;
}

.timeline-rhombus ul li::after {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.timeline-rhombus ul li div::before {
  bottom: 12px;
}

.timeline-star ul li::after {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.timeline-heptagon ul li::after {
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
}

.timeline-infinite ul li::after {
  animation: scaleAnimation 2s infinite;
}

@keyframes scaleAnimation {
  0% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.25);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}

</style>
