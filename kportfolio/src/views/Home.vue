<template>
  <div class='home-conatiner'> 
    <div class="email" v-bind:style="{top: emailtop + 'px'}" @click="handleTalk">
      <img src="../assets/email.svg" width='80' height="60">
    </div>
    
    <div class='home-highlightbox'>
      <LetsTalk v-if="letstalk" @cancelClicked="handleCancelTalk"/>
      <div>
        <p>Hello, I am</p>
        <h1 class="big-font">Kapil Duwadi</h1>
        <p>Electric Engineer, Software Developer, Data Analyst</p>
        <p>Currently working at <a href="https://www.nrel.gov/" target="_blank">National Renewable Energy <br> Laboratory (NREL)</a>, Golden , CO, USA</p>
        <div class="home-buttons">
          <button @click="handleTalk">Let's Talk</button>
          <a href="https://kduwadi.com/api/resume"><button>Download Resume</button></a>
        </div>
        <div class="icons">
          <a href="https://github.com/KapilDuwadi" target="_blank">
            <img src="../assets/github.svg" width="40" height="40">
          </a>
          <a href="https://www.linkedin.com/in/kapil-duwadi" target="_blank"><img src="../assets/linked_in.svg" width='40' height="40"></a>
          <a href="https://scholar.google.com/citations?user=A2JYsYwAAAAJ&hl=en" target="_blank"><img src="../assets/scholar.svg" width='40' height="40"></a>
        </div>
      </div>
      <img src="../assets/kapil3.png" width='400' height="400" class="me">
      
    </div>
    <div class="home-middle">
      <div class="home-middle-left">
        <h3 class="h3header">Skills</h3>
        <p>Modeling and simulating  emerging grid edge technologies (e.g. roof top PV, energy storage, electric vehicle) to understand the impact on power distribution grids.</p>
        <p>Development of full stack software application mainly for power system related tasks but happy to apply knowledge in other fields as well.</p>
        <div class="skills">
          <li>Python</li>
          <li>JavaScript</li>
          <li>Vue</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>MS SQL</li>
          <li>Docker</li>
          <li>OpenDSS</li>
          <li>PSSE</li>
        </div>
      </div>
      <div class="home-middle-right">
        <h1>2+</h1>
        <p>Years of working experience</p>
      </div>
    </div>

    <div class="home-bottom">
      <h3 class="h3header m20">Projects</h3>
      <div class="project-cards">
        <div class="pcard" v-for="item in projects" :key="item.name" @click="handleCardClick">
          <a :href="item.link" target="_blank">
            <img src="../assets/github.svg" width='40' height="40">
          </a>
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <p>{{ item.language }}</p>
          
        </div>
      </div>
    </div>
    <p class="footer">@KapilDuwadi, 2021</p>
  </div>
</template>

<script>
import LetsTalk from '../components/LetsTalk.vue';

export default {
  name: "navBar",
  components: {
    LetsTalk
  },
  data() {
    return {
      letstalk: false,
      projects : [
        {
          "name": "EMERGE",
          "description": "Framework for analyzing impact of roof top PV in power distribution systems",
          "language": "Python, Plotly Dash",
          "link": "https://github.com/nrel/emerge"
        },
        {
          "name": "EVOLVE",
          "description": "Framework for analyzing impact of emerging technologies on net load shape",
          "language": "Python, React",
          "link": "https://github.com/nrel/evolve"
        },
        {
          "name": "EFFORT",
          "description": "Framework for designing time of use tariff for distribution utility",
          "language": "Python, Pyomo",
          "link": "https://github.com/nrel/effort"
        },
        {
          "name": "PRECISE",
          "description": "Framework for automating the process of assessing roof top PV interconnection application",
          "language": "Python, Vue, MS SQL",
          "link": "https://www.nrel.gov/grid/precise-tool.html"
        },
      ],
      emailtop: document.documentElement.clientHeight -150
    }
  },
  methods: {
    handleScroll(){
      this.emailtop = window.scrollY + document.documentElement.clientHeight -150;
      // console.log(this.emailtop)
    },
    handleTalk() {
    window.scrollTo(0,0)
    this.letstalk = true
    },
    handleCancelTalk() {
      this.letstalk = false
    },
    handleSubmitTalk() {
      this.letstalk = false
      this.thankyou = true
    },
    handleThankRemoval(){
      this.thankyou = false
    },
    handleCardClick(){
      this.$router.push('/work')
    }

  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
.email{
  position: absolute;
  top: 60vh;
  right: 50px;
  background: rgba(23, 124, 46, 0.5);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 3;
}

.email img{
  position: absolute;
  top: 22px;
  left: 10px;
}

.home-highlightbox a{
  text-decoration: none;
  color: orange;
}

.email:hover{
  cursor: pointer;
}

.footer{
  color: white;
  text-align: center;
  padding-bottom: 30px;
}

.project-cards{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 30px;
 
}

.pcard img{
  position: absolute;
  top: 20px;
  right: 20px;
}

.pcard{
  position: relative;
  margin: 20px 20px 0 0;
  width: 75%;
  height: 200px;
  background: #1E232C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 50px;
}

.pcard:nth-child(odd){
  justify-self: start;
}

.pcard:nth-child(even){
  justify-self: end;
}




.pcard h3{
  font-size: 1.5em;
  padding-bottom: 40px;
  padding-top: 30px;
}

.pcard p{
  font-size: 1.2em;
  padding-bottom: 30px;
}

.pcard:hover{
  border: 2px solid orange;
  cursor: pointer;
}

.m20{
  margin-top: 20px;
}

.home-middle{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
}

.h3header {
  font-size: 2em;
  letter-spacing: 0.05em;
  padding-bottom: 10px;
  color: orange;
}

.home-middle-left p{
  font-size: 1.2em;
  /* letter-spacing: 0.05em; */
  line-height: 1.5em;
  padding-bottom: 20px;
}

.skills{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.skills li{
  margin-bottom: 10px;
  list-style: none;
  margin-left: 20px;
}

.skills li::before { 
  content: "";
  border-color: transparent white;
  border-style: solid;
  border-width: 0.35em 0 0.35em 0.45em;
  display: block;
  height: 0;
  width: 0;
  left: -1em;
  top: 0.9em;
  position: relative;
}


.home-middle-right h1{
  font-size: 250px;
  width: 100%;
  text-align: right;
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  color: rgba(255,165,0,1);
  letter-spacing: 0.1em;
  font-style: normal;
  font-weight: normal;
}

.home-middle-right p{
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 39px;
  letter-spacing: 0.1em;
  color: orange;
  text-align: right;
}

.home-conatiner{
  margin: 10px 10% 0 10%;
  color: white;
}

.home-highlightbox{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.icons{
  position: relative;
  margin-top: 20px;
  z-index: 2;
}


.icons img{
  margin-right: 30px;
}

.icons a:hover{
  cursor: pointer;
}

.home-highlightbox p{
  font-size: 1.2em;
  padding: 10px 0;
}

.big-font{
  font-size: 5.0em;
}

.me{
  border-radius: 50%;
  border: 5px solid orange;
}

.home-buttons{
  display: flex;
  margin-top: 10px;
}

.home-buttons button{
  height: 60px;
  min-width: 200px;
  color: white;
  background: #374052;
  border: none;
  outline: none;
  font-size: 1.1em;
  margin-right: 20px;
  z-index: 2;
}

.home-buttons button:hover{
  cursor: pointer;
  border: 1px dashed white;
}

@media (max-width: 1200px){
  .project-cards{
    display: grid;
    grid-template-columns: 1fr;
  }

  .pcard{
    margin-right:0;
    justify-self: start;
    width: 80%;
  }
  .pcard:nth-child(even){
  justify-self: start;
  }
  .home-highlightbox{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home-middle{
    display: grid;
    grid-template-columns: 1fr;
  }
  .home-middle-right h1{
    margin-left:0;
    text-align: center;
  }
  .home-middle-right p{
    margin-left:0;
    text-align: center;
  }
}

</style>