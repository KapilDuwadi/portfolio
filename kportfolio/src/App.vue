<template>
  <div class="container">
    <div class='back1'>
    </div>
    <div class="logo">
      <h2>K</h2>
    </div>
    <div class="menu-small" @click="show_menu">=</div>
    <div class="nav" v-if="menu_on">
      <div class="close" v-if="menu_on" @click="close_menu">X</div>
      <router-link to="/" class="nav-item">Home</router-link> 
      <router-link to="/work" class="nav-item">Works</router-link>
      <router-link to="/education" class="nav-item">Education</router-link>
      <router-link to="/publication" class="nav-item">Publication</router-link>
    </div>
  </div>

  <router-view/>
</template>

<script>

export default {
  data(){
    return {
      menu_on: false
    }
  },
  methods: {
    show_menu(){
      this.menu_on = true;
    },
    close_menu(){
      this.menu_on = false
    }
  },
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

:root {
  --primary-color: #252e40;
  --logo-background: #1e232c;
}

*{
  margin: 0;
  padding: 0;
}

body{
  background: var(--primary-color);
  font-family: 'Roboto', sans-serif;
  position: relative;
}


.menu-small{
  /* visibility: hidden; */
  width: 40px;
  height: 40px;
  background: teal;
  border-radius: 50%;
  text-align: center;
  color: white;
  font-size: 2em;
}

.menu-small:hover{
  cursor: pointer;
}

.container {
  margin: 30px 10% 0 10%;
  display: flex;
  justify-content: space-between;
}

.nav{
  display: flex;
  position: absolute;
  flex-direction: column;
  top: -30px;
  right: 0;
  background: rgb(17, 17, 17, 0.95);
  height: 100%;
  justify-content: start;
  z-index: 4;
  width: 25%;
}

.nav-item {
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  font-style: normal;
  padding: 5px 10px;
  height: 25px;
}

.nav-item:hover{
  border: 1px dashed white;
  border-radius: 5px;
}

.logo{
  width: 60px;
  height: 60px;
  background: var(--logo-background);
  transform: rotate(45deg);
  border-radius: 15px;
  margin-top: -10px;
}

.logo h2{
  transform: rotate(-45deg);
  color: white;
  padding-left: 16px;
  padding-top: 10px;
  font-size: 30px;
}

.back1{
  position: absolute;
  width: 600px;
  height: 600px;
  top: 0px;
  left: -15%;
  background: #C2B960;
  opacity: 0.05;
  transform: rotate(45deg);
  z-index: -1;
}

.router-link-active{
  color: orange;
}

.close{
  color: red;
  padding: 10px;
  text-align: right;
}

.close:hover{
  cursor: pointer;
}

@media (max-width: 1200px){
  .back1{
    width: 200px;
    height: 200px;
  }
}
</style>
